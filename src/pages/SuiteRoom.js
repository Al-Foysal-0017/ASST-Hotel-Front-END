import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Header, Segment} from "semantic-ui-react"
import { Divider } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { Helmet } from 'react-helmet';

const SuiteRoom = () => {
    return (
        <div>
            <Helmet>
				<title>Suite Room</title>
				<meta name='description' content='Suite Room' />
			</Helmet>
            <Container>
            <Header textAlign='center' style={{marginTop: '150px',fontSize: '26px', fontWeight: 'bold'}}>
                <span style={{fontSize:"40px"}}>Our Suite Rooms</span>
            </Header>
            <Header textAlign='center' style={{marginBottom: '30px', fontSize: '26px', fontWeight: 'bold'}}>
                <h3>At present we have four suite rooms in AAST hotel.</h3>
                <h3>Please select any room, check availability and then booking.</h3>
            </Header>

            <div style={{marginBottom: '100px', textAlign: 'center'}}>
                <Link to="/rooms" className="btn-primary">
                        Back Room-Types
                </Link> 
            </div>

       <div className="responsiveDesktop">
       <Grid centered>
            <Grid.Row columns={3}>
            <Grid.Column>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/68389/pexels-photo-68389.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-401</h1>
                            <p>Type: Suite Room</p> 
                            <p>Rent: $699</p> 
                            <button>
                                <Link to="/suite/room-401">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-402</h1>
                            <p>Type: Suite Room</p> 
                            <p>Rent: $599</p> 
                            <button>
                                <Link to="/suite/room-402">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            </Grid.Row>


            <Grid.Row columns={3}>
            <Grid.Column>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/6207819/pexels-photo-6207819.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-403</h1>
                            <p>Type: Suite Room</p> 
                            <p>Rent: $499</p> 
                            <button>
                                <Link to="/suite/room-403">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-404</h1>
                            <p>Type: Suite Room</p> 
                            <p>Rent: $499</p> 
                            <button>
                                <Link to="/suite/room-404">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            </Grid.Row>
        </Grid>
       </div>


       <div className="responsiveMobile">
       <Grid centered>
            <Grid.Row columns={1}>
            <Grid.Column>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/68389/pexels-photo-68389.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-401</h1>
                            <p>Type: Suite Room</p> 
                            <p>Rent: $699</p> 
                            <button>
                                <Link to="/suite/room-401">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column style={{marginTop:"30px"}}>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-402</h1>
                            <p>Type: Suite Room</p> 
                            <p>Rent: $599</p> 
                            <button>
                                <Link to="/suite/room-402">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            </Grid.Row>


            <Grid.Row columns={1}>
            <Grid.Column>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/6207819/pexels-photo-6207819.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-403</h1>
                            <p>Type: Suite Room</p> 
                            <p>Rent: $499</p> 
                            <button>
                                <Link to="/suite/room-403">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column style={{marginTop:"30px"}}>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-404</h1>
                            <p>Type: Suite Room</p> 
                            <p>Rent: $499</p> 
                            <button>
                                <Link to="/suite/room-404">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            </Grid.Row>
        </Grid>
       </div>
        </Container>
        <Divider/>
        <Divider/>
        <Divider/>
        </div>
    )
}

export default SuiteRoom

