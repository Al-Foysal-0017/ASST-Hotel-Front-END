import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from "react-router-dom"
import { Helmet } from 'react-helmet';

const Error = () => {
    return (
        <>
            <Helmet>
				<title>Error</title>
				<meta name='description' content='Error' />
			</Helmet>
            <Hero>
                <Banner title="404" subtitle="page not found">
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
        </>
    )
}

export default Error
