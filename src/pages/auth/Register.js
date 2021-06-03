import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {Form, Button, Grid, Segment} from "semantic-ui-react"
import { postRegister } from '../../store/asyncMethods/AuthMethods';
import {REMOVE_MESSAGE} from '../../store/types/PostTypes';

const Register = (props) => {
	const [state, setState] = useState({
		name: '',
		email: '',
		password: '',
	});
	const { loading, registerErrors, user } = useSelector(
		(state) => state.AuthReducer
	);

	const dispatch = useDispatch();
	const handleInputs = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	const userRegister = async (e) => {
		e.preventDefault();
		dispatch(postRegister(state));
	};
	useEffect(() => {
		if (registerErrors?.length > 0) {
			registerErrors.map((error) => toast.error(error.msg));
			dispatch({ type: REMOVE_MESSAGE });
		}
	}, [registerErrors, user]);
	return (
		<div className="authHeroRegister">
			<Helmet>
				<title>User Register</title>
				<meta name='description' content='User register form' />
			</Helmet>
			<Toaster
			position='top-center'
			reverseOrder={false}
			toastOptions={{
                icon: '',
				style: {
					fontSize: '26px',
                    borderRadius: '10px',
                    background: '#af9a7d',
                    color: '#fff',
                    fontWeight:'bold',
                    padding: '10px',
                    border: '3px solid white'
				},
				}}
		    />
				<Grid centered>
					<Grid.Column style={{minWidth:400, marginTop:0}}>
					<Segment style={{color:'#af9a7d', letterSpacing:'2px', fontSize:'25px', fontWeight:'bold'}} textAlign='center'>
						Sign Up
					</Segment>
						<Segment className='account__section'>
							<Form>
								<Form.Field className='group'>
									<Form.Input
									    label='Name'
										type='text'
										name='name'
										className='group__control'
										placeholder='Enter Name'
										value={state.name}
										onChange={handleInputs}
									/>
								</Form.Field>
								<Form.Field className='group'>
									<Form.Input
									    label='Email'
										type='email'
										name='email'
										className='group__control'
										placeholder='Enter Email'
										value={state.email}
										onChange={handleInputs}
									/>
								</Form.Field>
								<Form.Field className='group'>
									<Form.Input
										type='password'
										label='Password'
										name='password'
										className='group__control'
										placeholder='Create Password'
										value={state.password}
										onChange={handleInputs}
									/>
								</Form.Field>
									<Button
									    onClick={userRegister}
										fluid
										style={{backgroundColor:'#af9a7d', color:'white'}}
										loading={loading}
										disabled={loading}
									>
										Submit
									</Button>
							</Form>
						</Segment>
						<Segment style={{color:'#af9a7d'}}>
								Already have an account? <Link to="/login">Login</Link>
							</Segment>
					</Grid.Column>
				</Grid>
			{/* </div> */}
		</div>
	);
};
export default Register;
