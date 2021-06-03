import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import { Helmet } from 'react-helmet';
import {REMOVE_MESSAGE} from '../store/types/PostTypes';

const Home = () => {
    const { user } = useSelector((state) => state.AuthReducer);
	const dispatch = useDispatch();
    
    const handleOptions=()=>{
        if(!user){
            return toast.error('At first, Please login your account. If you do not have any account than you should need to sign up.')
            dispatch({ type: REMOVE_MESSAGE });
        }else{
            return null;
        }
    }
    const singleRoom = <Link to="/single-room" className="option-btn-primary">
                            <span onClick={handleOptions}>Single Room</span>
                        </Link>
    const doubleRoom = <Link to="/double-room" className="option-btn-primary">
                            <span onClick={handleOptions}>Double Room</span>
                        </Link>
    const suiteRoom = <Link to="/suite-room" className="option-btn-primary">
                            <span onClick={handleOptions}>Suite Room</span>
                        </Link>
    const options = [
        { key: 1, text: singleRoom, value: 1 },
        { key: 2, text: doubleRoom, value: 2 },
        { key: 3, text: suiteRoom, value: 3 },
      ]

    return (
            <>
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

            <Helmet>
				<title>Home</title>
				<meta name='description' content='Home' />
			</Helmet>
                
                <Hero>
                    <div  style={{display:'flex', flexDirection:'column'}}>
                    <Banner 
                        title="AAST HOTEL"
                        subtitle="Deluxe and Luxurious Rooms For You"
                    ></Banner>

                    <Segment style={{backgroundColor:'rgba(0, 0, 0, 0.5)' ,display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
                        <span style={{marginBottom:'10px', fontSize:'20px', color:'white', fontWeight:'bold'}}>Let's check our rooms</span>
                        <Dropdown
                        button
                        className='icon option-btn-primary'
                        floating
                        labeled
                        options={options}
                        search
                        text='Our Rooms'
                    />
                    </Segment>
                    </div>
                </Hero>
           </>
    )
}

export default Home
