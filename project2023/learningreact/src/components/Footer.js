import react from 'react'
import FooterLink from './FooterLinks'
import MapImage from './Map'

function Footer(){
    return(
        <div className='footerContent'>
        <FooterLink />
        <MapImage />
        </div>
    )
}

export default Footer