import React, {useEffect} from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import {Container, Header, Segment, Placeholder} from "semantic-ui-react"
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../store/types/UserTypes';
import { List } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'
import {fetchPosts} from "../store/asyncMethods/PostMethods"
import moment from 'moment'
import { Helmet } from 'react-helmet';

const Profile = () => {
    const { user } = useSelector((state) => state.AuthReducer);
	const dispatch = useDispatch();
    const logout = () => {
		localStorage.removeItem('myToken');
		dispatch({ type: LOGOUT });
	};
    const { redirect, message, loading } = useSelector(
		(state) => state.PostReducer
	);

    const { posts} = useSelector((state) => state.FetchPosts);
    
    useEffect(() => {
		dispatch(fetchPosts(user._id));
	}, []);

    return (
        <div>
            <Helmet>
				<title>Profile</title>
				<meta name='description' content='Profile' />
			</Helmet>
            <Hero hero="roomsHero">
                <Banner title="My Profile">
                    <span className="btn-primary" onClick={logout}>
                        Logout
                    </span>
                </Banner>
            </Hero>

            <Container>
            <Header textAlign='center' style={{marginTop: '50px', fontSize: '26px', fontWeight: 'bold'}}>
                <span style={{fontSize:"40px"}}>{user.name}</span>
            </Header>
            <Header textAlign='center' style={{marginBottom: '50px', fontSize: '26px', fontWeight: 'bold'}}>
                <h2>{user.email}</h2>
                <h1>...............</h1>
            </Header>
            <Header>
               <span style={{fontWeight:"bold" ,marginLeft:'10px',fontSize:"26px"}}> My Reservation List</span>
            </Header>
         
       <div >
       <List>
           {posts?.length > 0 && posts.map((post)=> (
                <List.Item key={post._id}>
                <Segment>
                    <List.Content>
                        <span style={{fontWeight:"bold", padding:"3px", fontSize:"17px", color:"green"}}>Date:</span>
                        <span style={{fontWeight:"bold",padding:"3px", fontSize:"17px"}}>{post?.date}</span>
                        <div style={{display:"flex", flexDirection: 'row'}}>
                            <div style={{color:"green", padding:"3px",}}>Room Number:</div>
                            <span style={{padding:"3px",}}>{post?.room}</span>
                        </div>
                        <div style={{display:"flex", flexDirection: 'row'}}>
                            <div style={{color:"green", padding:"3px",}}>Room Type:</div>
                            <span style={{padding:"3px",}}>{post?.type}</span>
                        </div>
                        <div style={{display:"flex", flexDirection: 'row'}}>
                            <div style={{padding:"3px", color:"green"}}>Total members:</div>
                            <span style={{padding:"3px",}}>{post?.members}</span>
                        </div>
                        <div style={{display:"flex", flexDirection: 'row'}}>
                            <div style={{color:"green", padding:"3px",}}>Booking date:</div>
                            <span style={{padding:"3px",}}>{moment(post?.updatedAt).format("DD.MM.YYYY")}</span>
                        </div>
                        
                    </List.Content>
                </Segment>
            </List.Item>
           ))}
        </List>

        {posts?.length === 0 && !loading &&
        <Segment>
        <h3 style={{color:"yellowgreen"}}>You don not booking any room yet.</h3>
        </Segment>
        }
       </div>

       {loading && 
       <div>
            <Segment>
            <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
            </Placeholder>
            </Segment>
        </div>}
        </Container>
        <Divider/>
        <Divider/>
        <Divider/>
        </div>
    )
}

export default Profile
