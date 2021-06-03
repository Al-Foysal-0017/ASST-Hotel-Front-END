import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { postLogin } from '../../store/asyncMethods/AuthMethods';
import {Form, Button, Grid, Segment} from "semantic-ui-react"
import {REMOVE_MESSAGE} from '../../store/types/PostTypes';

const Login = () => {
	const dispatch = useDispatch();
	const { loginErrors, loading } = useSelector((state) => state.AuthReducer);
	const [state, setState] = useState({
		email: '',
		password: '',
	});
	const handleInputs = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	const userLogin = (e) => {
		e.preventDefault();
		dispatch(postLogin(state));
	};
	useEffect(() => {
		if (loginErrors?.length > 0) {
			loginErrors.map((error) => toast.error(error.msg));
			dispatch({ type: REMOVE_MESSAGE });
		}
	}, [loginErrors]);
	return (
		<div className="authHeroLogin">
			<Helmet>
				<title>User Login</title>
				<meta name='description' content='User login form' />
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
								<Segment style={{color:'#af9a7d', fontSize:'25px', letterSpacing:'2px', fontWeight:'bold'}} textAlign='center'>Login</Segment>
							<Segment>
							<Form>
								<Form.Field>
									<Form.Input
										type='email'
										name='email'
										label='Email'
										value={state.email}
										onChange={handleInputs}
										className='group__control'
										placeholder='Enter Email'
									/>
								</Form.Field>
								<Form.Field className='group'>
									<Form.Input
										type='password'
										label="Password"
										name='password'
										value={state.password}
										onChange={handleInputs}
										className='group__control'
										placeholder='Enter Password'
									/>
								</Form.Field>
									<Button
										style={{backgroundColor:'#af9a7d', color:'white'}}
										fluid
										onClick={userLogin}
										loading={loading}
										disabled={loading}
									>
										Submit
									</Button>
							</Form>
							</Segment>
							<Segment style={{color:'#af9a7d'}}>
								Need a new account? <Link to="/register">Register</Link>
							</Segment>
						</Grid.Column>
			</Grid>
		</div>
	);
};
export default Login;
