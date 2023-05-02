import './Services.css'
import {Data} from './ServicesData'
import Card  from './Card/Card';

export default function Services() {

	let result=Data.map(function (x){
		var miniText=`${x.serviceDesc.substring(0,50)} ...`
		return <Card id={x.id} serviceName={x.serviceName} serviceDesc={miniText} serviceImage={x.serviceImage} color={x.color} />
	})
    return(
        <div className="services" id="services">
		<div className="container" >
			<div className="title">
				<h3 className="main-title">Services</h3>
			</div>
			<div className="content-services">
			{result}
			</div>
		</div>
	</div>
    )
}