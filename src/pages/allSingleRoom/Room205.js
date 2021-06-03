import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Container, Divider, Header, Segment, Button, List} from "semantic-ui-react"
import { Grid, Image, Placeholder, Icon, Form, Radio } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from 'react-helmet';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { createAction } from '../../store/asyncMethods/PostMethods'
import {everyRoom} from '../../store/asyncMethods/PostMethods'
import toast, { Toaster } from 'react-hot-toast';
import {REMOVE_MESSAGE} from '../../store/types/PostTypes';

const Room205 = () => {
    const { user:{_id, name, email} } = useSelector((state) => state.AuthReducer);
	const dispatch = useDispatch();
    const {message, loading } = useSelector((state) => state.PostReducer);

    const [startDate, setStartDate] = useState(new Date());
    const [state, setState] = useState({});
    const roomOptions = [
        { key: 'ak', value: 'ak',text: 'One' },
        { key: 'ax', value: 'ax', text: 'Two' },
        { key: 'al', value: 'al', text: 'Three' },
        { key: 'ah', value: 'ah', text: 'Four' }
    ]

    const date = moment(startDate).format("DD.MM.YYYY") 

    const formData = {
        "name": name,
        "email": email,
        "id": _id,
        "date": date,
        // change hare
        "room": "205",
        "type": "single",
        "members": state.value || "One",
    }
    
    const submit = (e) => {
        e.preventDefault();
        dispatch(createAction(formData))
    }

    const handleChange = (e, { value }) => setState({ value })

    const {dataEveryRoom} = useSelector((state) => state.EveryRoom);

    useEffect(() => {
        //change hare
        dispatch(everyRoom(205)); 
    }, []);

    useEffect(() => {
        if (message) {
            toast.success(message);
            dispatch({ type: REMOVE_MESSAGE });
        }
    }, [message]);


    return (
        <>
        <Helmet>
            {/* change hare */}
			<title>Room-205</title>
			<meta name='description' content='Room-205' />
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
            

        
        <div className="responsiveDesktop">
            <Container>
            <Header textAlign='center' style={{marginTop: '100px',fontSize: '26px', fontWeight: 'bold'}}>
                {/* change hare */}
                <span style={{fontSize:"40px"}}>Room-205</span>
            </Header>
            <div style={{marginBottom: '100px', textAlign: 'center'}}>
                <Link to="/single-room" className="btn-primary">
                Back To All-Single-Rooms
                </Link> 
            </div>

            <div>
                <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Container>
                    <span>
                        {/* change hare */}
                        <h2>Room No: 205</h2>
                        <h2>Room Type: Single</h2>
                        <h2>Rent: $169 per night</h2>
                        <h2>Description:</h2>
                    </span>
                    <span >
                    <h4 style={{marginRight: "30px"}}>We have total six single rooms in AAST hotel. They are Room-201, Room-202, Room-203, Room-204, Room-205, Room-206. 
                    {/* change hare */}                    
                    Among them Room-205 is a very deluxe and luxurious room.</h4>
                    </span>
                    {/* change image */}
                    <Image className="perRoomImage" alt="" src='https://images.pexels.com/photos/8112351/pexels-photo-8112351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                    </Container>
                </Grid.Column>
                <Grid.Column>
                    <Container>
                    <span>
                        <h2 style={{marginLeft: "30px"}}>Check availability and booking</h2>
                    </span>

                    <Segment style={{ marginLeft: "30px"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                        {/* change hare */}
                        <span style={{fontSize: "20px", padding: "7px"}}>Room No: 205</span>
                        <span style={{fontSize: "20px", padding: "7px"}}>Room Type: Single</span>
                        <span style={{fontSize: "20px", padding: "7px"}}>Rent: $169</span>
                        
                        <Segment style={{display: "flex", flexDirection: "row", marginTop: "20px",  marginLeft: "7px"}}>
                        <Icon name='calendar alternate outline' size='huge' />
                        <div style={{display: "flex", flexDirection: "column",}}>
                        <span style={{fontSize: "20px", marginBottom:"5px"}}>Choose Date:</span>
                        <DatePicker className="datepicker" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div> 
                        </Segment>
                        </div>
                       
                       
                        <Segment style={{display: "flex", flexDirection: "column", marginTop: "20px",  marginLeft: "7px"}}>
                        <span style={{fontSize: "20px", padding: "7px",}}>Total members: {state.value}</span> 
                         <Form style={{marginLeft:"15px"}}>
                            <Form.Field>
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='One'
                                name='radioGroup'
                                value='One'
                                checked={state.value === 'One'}
                                onChange={handleChange}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='Two'
                                name='radioGroup'
                                value='Two'
                                checked={state.value === 'Two'}
                                onChange={handleChange}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='Three'
                                name='radioGroup'
                                value='Three'
                                checked={state.value === 'Three'}
                                onChange={handleChange}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='Four'
                                name='radioGroup'
                                value='Four'
                                checked={state.value === 'Four'}
                                onChange={handleChange}
                            />
                            </Form.Field>
                        </Form>
                        </Segment>
                            <Button
								style={{color:'white', marginTop:'10px', marginLeft: "7px"}}
                                primary
								onClick={submit}
								disabled={loading}
							>
								Booking Now
							</Button>
                    </Segment>
                    </Container>
                    <Container>
                    <span>
                        <h2 style={{marginLeft: "30px", marginTop: "80px", marginBottom:"15px"}}>
                            {/* change here */}
                            People Who Booking Room-205
                        </h2>
                    </span>
                    
                    <div style={{marginLeft: "30px"}}>
                    <Segment>
                    <List>
                    {dataEveryRoom?.length > 0 && dataEveryRoom.map((roomData)=> (
                        <List.Item key={roomData._id}>
                        <Segment>
                            <List.Content>
                                <span>Date: {moment(roomData?.date).format("DD.MM.YYYY")}</span>
                                <div>Name: {roomData?.name}</div>
                                <div>Email: {roomData?.email}</div>
                                <div>Booking date: {moment(roomData?.updatedAt).format("DD.MM.YYYY")}</div>
                            </List.Content>
                        </Segment>
                    </List.Item>
                    ))}

                    {dataEveryRoom?.length === 0 && !loading &&
                            <Segment>
                            <h3 style={{color:"yellowgreen"}}>No one booking this room yet.</h3>
                            </Segment>
                    }      
                    </List>
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
                    </Segment>
                    </div>
                    </Container>
                </Grid.Column>
                </Grid>
            </div>

        </Container>
        <Divider/>
        <Divider/>
        <Divider/>
        </div>
       


        <div className="responsiveMobile">
            <Container>
            <Header textAlign='center' style={{marginTop: '100px',fontSize: '26px', fontWeight: 'bold'}}>
                {/* change hare */}
                <span style={{fontSize:"40px"}}>Room-205</span>
            </Header>
            <div style={{marginBottom: '100px', textAlign: 'center'}}>
                <Link to="/single-room" className="btn-primary">
                Back To All-Single-Rooms
                </Link> 
            </div>

            <div>
                <Grid columns={1} padded='horizontally'>
                <Grid.Column>
                    <Container>
                    <span>
                        {/* change here */}
                        <h2>Room No: 205</h2>
                        <h2>Room Type: Single</h2>
                        <h2>Rent: $249 per night</h2>
                    </span>
                    <span>
                        <h2 style={{marginTop: "30px"}}>Check availability and booking</h2>
                    </span>

                    <Segment style={{}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                        {/* change here     */}
                        <span style={{fontSize: "20px", padding: "7px"}}>Room No: 205</span>
                        <span style={{fontSize: "20px", padding: "7px"}}>Room Type: Single</span>
                        <span style={{fontSize: "20px", padding: "7px"}}>Rent: $169</span>
                        
                        <Segment style={{display: "flex", flexDirection: "row", marginTop: "20px",  marginLeft: "7px"}}>
                        <Icon name='calendar alternate outline' size='huge' />
                        <div style={{display: "flex", flexDirection: "column",}}>
                        <span style={{fontSize: "20px", marginBottom:"5px"}}>Choose Date:</span>
                        <DatePicker className="datepicker" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div> 
                        </Segment>
                        </div>
                       
                        <Segment style={{display: "flex", flexDirection: "column", marginTop: "20px",  marginLeft: "7px"}}>
                        <span style={{fontSize: "20px", padding: "7px",}}>Total members: {state.value}</span> 
                         <Form style={{marginLeft:"15px"}}>
                            <Form.Field>
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='One'
                                name='radioGroup'
                                value='One'
                                checked={state.value === 'One'}
                                onChange={handleChange}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='Two'
                                name='radioGroup'
                                value='Two'
                                checked={state.value === 'Two'}
                                onChange={handleChange}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='Three'
                                name='radioGroup'
                                value='Three'
                                checked={state.value === 'Three'}
                                onChange={handleChange}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='Four'
                                name='radioGroup'
                                value='Four'
                                checked={state.value === 'Four'}
                                onChange={handleChange}
                            />
                            </Form.Field>
                        </Form>
                        </Segment>
                            <Button
							    style={{color:'white', marginTop:'10px', marginLeft: "7px"}}
                                primary
								onClick={submit}
								disabled={loading}
							>
								Booking Now
							</Button>
                    </Segment>
                    </Container>
                    <Container>
                    <span>
                        {/* change here */}
                        <h2 style={{marginTop: "80px", marginBottom:"15px"}}>
                            People Who Booking Room-205
                        </h2>
                    </span>
                    
                    <div style={{}}>
                    <Segment>
                    <List>
                    {dataEveryRoom?.length > 0 && dataEveryRoom.map((roomData)=> (
                        <List.Item key={roomData._id}>
                        <Segment>
                            <List.Content>
                                <span>Date: {moment(roomData?.date).format("DD.MM.YYYY")}</span>
                                <div>Name: {roomData?.name}</div>
                                <div>Email: {roomData?.email}</div>
                                <div>Booking date: {moment(roomData?.updatedAt).format("DD.MM.YYYY")}</div>
                            </List.Content>
                        </Segment>
                    </List.Item>
                    ))}

                    {dataEveryRoom?.length === 0 && !loading &&
                            <Segment>
                            <h3 style={{color:"yellowgreen"}}>No one booking this room yet.</h3>
                            </Segment>
                    }      
                    </List>
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
                    </Segment>
                    </div>
                    </Container>
                </Grid.Column>
                {/* change image */}
                <Image className="perRoomImage" alt="" src='https://images.pexels.com/photos/8112351/pexels-photo-8112351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                <span>
                <h2>Description:</h2>
                </span>
                    <span >
                    <h4 style={{marginBottom: "30px"}}>We have total six single rooms in AAST hotel. They are Room-201, Room-202, Room-203, Room-204, Room-205, Room-206.
                    {/* chnage hare */}
                    Among them Room-205 is a very deluxe and luxurious room.</h4>
                    </span>
                </Grid>
            </div>

        </Container>
        <Divider/>
        <Divider/>
        <Divider/>
        </div>
       </>
    )
}

export default Room205

