import Landing from './Landing/Landing'
import Services from './Services/Services'
import MyPortfolio from './Portfolio/MyPortfolio'

import { Helmet } from 'react-helmet'
function Home(){
    return(
        <>
        <Helmet>
        <title>Home</title>
        </Helmet>
            <Landing />
            <Services />
            <MyPortfolio/>
        </>
    )
}

export default Home