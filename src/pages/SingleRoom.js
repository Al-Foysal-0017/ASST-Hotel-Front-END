import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Header} from "semantic-ui-react"
import { Divider } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { Helmet } from 'react-helmet';

const SingleRoom = () => {
    return (
        <div>
            <Helmet>
				<title>Single Room</title>
				<meta name='description' content='Single Room' />
			</Helmet>
            <Container>
            <Header textAlign='center' style={{marginTop: '150px',fontSize: '26px', fontWeight: 'bold'}}>
                <span style={{fontSize:"40px"}}>Our Single Rooms</span>
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
                    <img src="https://images.pexels.com/photos/3754595/pexels-photo-3754595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-201</h1>
                            <p>Type: SingleRoom</p> 
                            <p>Rent: $249</p> 
                            <button>
                                <Link to="/single/room-201">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-202</h1>
                            <p>Type: SingleRoom</p> 
                            <p>Rent: $249</p> 
                            <button>
                                <Link to="/single/room-202">Check it</Link>
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
                        <img src="https://images.pexels.com/photos/1103808/pexels-photo-1103808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-203</h1>
                            <p>Type: SingleRoom</p> 
                            <p>Rent: $209</p> 
                            <button>
                                <Link to="/single/room-203">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/2351290/pexels-photo-2351290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-204</h1>
                            <p>Type: SingleRoom</p> 
                            <p>Rent: $209</p> 
                            <button>
                                <Link to="/single/room-204">Check it</Link>
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
                        <img src="https://images.pexels.com/photos/8112351/pexels-photo-8112351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-205</h1>
                            <p>Type: SingleRoom</p> 
                            <p>Rent: $169</p> 
                            <button>
                                <Link to="/single/room-205">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/2983198/pexels-photo-2983198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-206</h1>
                            <p>Type: SingleRoom</p> 
                            <p>Rent: $169</p> 
                            <button>
                                <Link to="/single/room-206">Check it</Link>
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
                    <img src="https://images.pexels.com/photos/3754595/pexels-photo-3754595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-201</h1>
                            <p>Type: SingleRoom</p> 
                            <p>Rent: $249</p> 
                            <button>
                                <Link to="/single/room-201">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column style={{marginTop:"30px"}}>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-202</h1>
                            <p>Type: SingleRoom</p> 
                            <p>Rent: $249</p> 
                            <button>
                                <Link to="/single/room-202">Check it</Link>
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
                        <img src="https://images.pexels.com/photos/1103808/pexels-photo-1103808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-203</h1>
                            <p>Type: SingleRoom</p> 
                            <p>Rent: $209</p> 
                            <button>
                                <Link to="/single/room-203">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column style={{marginTop:"30px"}}>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/2351290/pexels-photo-2351290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-204</h1>
                            <p>Type: SingleRoom</p> 
                            <p>Rent: $209</p> 
                            <button>
                                <Link to="/single/room-204">Check it</Link>
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
                        <img src="https://images.pexels.com/photos/8112351/pexels-photo-8112351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-205</h1>
                            <p>Type: SingleRoom</p> 
                            <p>Rent: $169</p> 
                            <button>
                                <Link to="/single/room-205">Check it</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column style={{marginTop:"30px"}}>
                <div className="wrapperRoomsCard">
                    <div className="cardRoomsCard">
                        <img src="https://images.pexels.com/photos/2983198/pexels-photo-2983198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="infoRoomsCard">
                            <h1>ROOM-206</h1>
                            <p>Type: SingleRoom</p> 
                            <p>Rent: $169</p> 
                            <button>
                                <Link to="/single/room-206">Check it</Link>
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

export default SingleRoom
