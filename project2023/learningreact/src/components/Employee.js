import react from 'react'

function Employee(props){
const title="web designer";
let displayEmail='';
let backcolor="black";



    return(
        <div className='emp' style={{backgroundColor: props.phone ? 'black' : 'red'}}>
            <div style={{textAlign:"center"}}>
            <img src={props.img}/>
            </div>
            <p>{props.name}</p>
            <p style={{textAlign:"center"}}>{props.id}</p>
            <h3>{title}</h3>
            <p style={{display:props.email ? 'block' : 'none'}}>{props.email}</p>
            {/* that' mean if fiedl name not exist hide the p else show it */}
            <p style={{display:props.phone ? 'block' : 'none'}}>Phone {props.phone}</p>
           
        </div>
    );
}



export default Employee