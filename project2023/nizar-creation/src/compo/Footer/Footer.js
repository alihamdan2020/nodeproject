import footerCss from './Footer.module.css'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaClock} from 'react-icons/fa'

function Footer(){
   let socimamediaIcons={
    backgroundColor:'rgb(49,49,49)',
    display:'inline-flex',
    padding: '10px',
    justifyContent:'center',
    alignItems:'center',
    marginRight:'15px',
    fontSize:'20px'
    }

    return(
        <div style={{backgroundColor:'rgb(25,25,25'}}>
        <div className={footerCss.footer}>

				<div className={footerCss.socialmedia}>
				<h3 className={footerCss.socialmediah3}>Nizar Creation</h3>
                <div style={socimamediaIcons}>
				<a href="https://www.facebook.com/nizar2draw" target="_blank" style={{ color:'goldenRod'}}><FaFacebook/></a>
                </div>
                <div style={socimamediaIcons}>
				<a href="https://www.instagram.com/nizar2draw/" target="_blank" style={{ color:'goldenRod'}}><FaInstagramSquare /></a>
                </div>
			</div>

			<div className="box address">
				<ul className={footerCss.footerMenu}>
					<li className={footerCss.footerMenuli}>
                        <span className={footerCss.fontIcons}><FaMapMarkerAlt/></span>
                        <p>
                            <span className={footerCss.spans}>Beirut, Tayouneh</span>
                            <span className={footerCss.spans}>KHalil El Hajj Street</span>
                            <span className={footerCss.spans}>Bulding</span>
                        </p>
                    </li>
					<li className={footerCss.footerMenuli}>
                        <span className={footerCss.fontIcons}><FaWhatsapp/></span>
                        <p>
                        <span className={footerCss.spans}>
                        <a href="https://wa.me/9613150338" className={footerCss.links}>03-150338</a>
                        </span>
                        </p>
                        </li>
					<li className={footerCss.footerMenuli}>
                        <span className={footerCss.fontIcons}><FaClock/></span>
                        <p>
                            <span className={footerCss.spans}>Business Hours:</span>
                            <span className={footerCss.spans}>From 10:00 To 18:00</span>
                        </p>
                    </li>
				</ul>
			</div>
		</div>
    </div>   

    )
}

export default Footer