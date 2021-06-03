import React from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import {Container, Header} from "semantic-ui-react"
import { Card, Image } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'
import singleRoomImg from '../images/room-10.jpeg'
import doubleRoomImg from '../images/room-11.jpeg'
import suiteRoomImg from '../images/details-1.jpeg'
import { Helmet } from 'react-helmet';

const Room = () => {
    return (
        <div>
            <Helmet>
				<title>Rooms</title>
				<meta name='description' content='Rooms' />
			</Helmet>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/" className="btn-primary">
                        Back Home
                    </Link> 
                </Banner>
            </Hero>

            <Container >
                <Header textAlign='center' style={{marginTop: '50px', marginBottom: '50px', fontSize: '26px', fontWeight: 'bold'}}>
                    Let's choose a room category...
                </Header>
            </Container>

            
  
            <div className="responsiveDesktop">
            <Container>
            <Grid centered container columns={3}>
                <Grid.Column>
                <Link to="/single-room">
                <Card>
                    <Image src={singleRoomImg} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Single Room</Card.Header>
                    <Card.Description>
                        We have total six single rooms. Let's check availability and booking.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <span className='date'>Start at $169 per night</span>
                    </Card.Content>
                </Card>
                </Link>
                </Grid.Column>
                <Grid.Column>
                <Link to="/double-room">
                <Card>
                    <Image src={doubleRoomImg} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Double Room</Card.Header>
                    <Card.Description>
                        We have total six double rooms. Let's check availability and booking.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <span className='date'>Start at $199 per night</span>
                    </Card.Content>
                </Card>
                </Link>
                </Grid.Column>
                <Grid.Column>
                <Link to="/suite-room">
                <Card>
                    <Image src={suiteRoomImg} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Suite Room</Card.Header>
                    <Card.Description>
                        We have total four suite rooms. Let's check availability and booking.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <span className='date'>Start at $399 per night</span>
                    </Card.Content>
                </Card>
                </Link>
                </Grid.Column>
            </Grid>
            </Container>
            </div>


            <div className="responsiveMobile">
            <Container >
            <Grid verticalAlign='middle'  columns={1}>
                <Grid.Column>
                <Link to="/single-room">
                <Card fluid>
                    <Image src={singleRoomImg} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Single Room</Card.Header>
                    <Card.Description>
                        We have total six single rooms. Let's check availability and booking.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <span className='date'>Start at $169 per night</span>
                    </Card.Content>
                </Card>
                </Link>
                </Grid.Column>
                <Grid.Column>
                <Link to="/double-room">
                <Card fluid>
                    <Image src={doubleRoomImg} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Double Room</Card.Header>
                    <Card.Description>
                        We have total six double rooms. Let's check availability and booking.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <span className='date'>Start at $199 per night</span>
                    </Card.Content>
                </Card>
                </Link>
                </Grid.Column>
                <Grid.Column>
                <Link to="/suite-room">
                <Card fluid>
                    <Image src={suiteRoomImg} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Suite Room</Card.Header>
                    <Card.Description>
                        We have total four suite rooms. Let's check availability and booking.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <span className='date'>Start at $399 per night</span>
                    </Card.Content>
                </Card>
                </Link>
                </Grid.Column>
            </Grid>
            </Container>
            </div>


            <Divider/>
            <Divider/>
            <Divider/>
        </div>
    )
}

export default Room
