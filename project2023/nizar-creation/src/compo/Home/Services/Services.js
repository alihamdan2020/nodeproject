import './Services.css'
import { Link } from 'react-router-dom'

export default function Services() {
    return(
        <div className="features" id="services">

		<div className="container" >
			<div className="title">
				<h3 className="main-title">Services</h3>
			</div>
			<div className="content-features">

				<div className="feature-card">

					<div className="feature-image first-img"></div>

					<div className="feature-text">
						<h3 className="feature-title first">service 1</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi
							minima</p>
					</div>
					<div className="feature-footer">
						<Link to="/services" className="one">more</Link>
					</div>
				</div>

				<div className="feature-card">
					<div className="feature-image second-img"></div>
					<div className="feature-text">
						<h3 className="feature-title second">Time</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi
							minima</p>
					</div>
					<div className="feature-footer">
						<a href="#" className="two">more</a>
					</div>
				</div>

				<div className="feature-card">
					<div className="feature-image third-img"></div>
					<div className="feature-text">
						<h3 className="feature-title third">passion</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi
							minima</p>
					</div>
					<div className="feature-footer">
						<a href="#" className="three">more</a>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}