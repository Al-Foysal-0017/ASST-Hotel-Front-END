import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Header, Divider} from "semantic-ui-react"
import { Grid } from 'semantic-ui-react'
import { Helmet } from 'react-helmet';

const DoubleRoom = () => {
    return (
        <div>
            <Helmet>
				<title>Double Room</title>
				<meta name='description' content='Double Room' />
			</Helmet>
            <Container>
            <Header textAlign='center' style={{marginTop: '150px',fontSize: '26px', fontWeight: 'bold'}}>
                <span style={{fontSize:"40px"}}>Our Double Rooms</span>
            </Header>
            <Header textAlign='center' style={{marginBottom: '30px', fontSize: '26px', fontWeight: 'bold'}}>
                <h3>At present we have six single rooms in AAST hotel.</h3>
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
                        <img src="https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-301</h1>
                            <p>Type: DoubleRoom</p> 
                            <p>Rent: $499</p> 
                            <button>
                                <Link to="/double/room-301">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-302</h1>
                            <p>Type: DoubleRoom</p> 
                            <p>Rent: $499</p> 
                            <button>
                                <Link to="/double/room-302">Check it</Link>
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
                        <img src="https://images.pexels.com/photos/6587907/pexels-photo-6587907.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-303</h1>
                            <p>Type: DoubleRoom</p> 
                            <p>Rent: $399</p> 
                            <button>
                                <Link to="/double/room-303">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-304</h1>
                            <p>Type: DoubleRoom</p> 
                            <p>Rent: $399</p> 
                            <button>
                                <Link to="/double/room-304">Check it</Link>
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
                        <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-305</h1>
                            <p>Type: DoubleRoom</p> 
                            <p>Rent: $299</p> 
                            <button>
                                <Link to="/double/room-305">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/6585619/pexels-photo-6585619.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-306</h1>
                            <p>Type: DoubleRoom</p> 
                            <p>Rent: $199</p> 
                            <button>
                                <Link to="/double/room-306">Check it</Link>
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
                        <img src="https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-301</h1>
                            <p>Type: DoubleRoom</p> 
                            <p>Rent: $499</p> 
                            <button>
                                <Link to="/double/room-301">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column style={{marginTop:"30px"}}>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-302</h1>
                            <p>Type: DoubleRoom</p> 
                            <p>Rent: $499</p> 
                            <button>
                                <Link to="/double/room-302">Check it</Link>
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
                        <img src="https://images.pexels.com/photos/6587907/pexels-photo-6587907.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-303</h1>
                            <p>Type: DoubleRoom</p> 
                            <p>Rent: $399</p> 
                            <button>
                                <Link to="/double/room-303">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column style={{marginTop:"30px"}}>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-304</h1>
                            <p>Type: DoubleRoom</p> 
                            <p>Rent: $399</p> 
                            <button>
                                <Link to="/double/room-304">Check it</Link>
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
                        <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-305</h1>
                            <p>Type: DoubleRoom</p> 
                            <p>Rent: $299</p> 
                            <button>
                                <Link to="/double/room-305">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column style={{marginTop:"30px"}}>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/6585619/pexels-photo-6585619.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-306</h1>
                            <p>Type: DoubleRoom</p> 
                            <p>Rent: $199</p> 
                            <button>
                                <Link to="/double/room-306">Check it</Link>
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

export default DoubleRoom

