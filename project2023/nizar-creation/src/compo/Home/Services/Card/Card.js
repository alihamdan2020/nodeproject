import { HashLink as Links } from 'react-router-hash-link';
import './Card.css'

function Card(props)
{
	const mystyle = {
		background:`url(${props.serviceImage})`,
		backgroundSize:'cover'
	  };
    return(
        <div className="feature-card">
			<div className="feature-image first-img" style={mystyle}></div>
				<div className="feature-text">
					<h3 className="feature-title first">{props.serviceName}</h3>
					<p>{props.serviceDesc}</p>
				</div>
				<div className="feature-footer">
					<Links to={`/service/#${props.id}`} className="one">more</Links>
				</div>
		</div>
    )
}

export default Card