function Paragraph(props){
    
    let  text=props.text;
    let firstPClass = {
		color:`rgba(255,20,20,0.5)`,
        padding:'10px'
	  };
    let allPClass = {
		color:`black`,
        padding:'10px'
	  };

    return(
        props.text.split('\n').map(function(str,index){
            let pClass=index==0? firstPClass : allPClass
return <p key={str} style={pClass}>{str}</p>
        } )
       //this code mean,props that come from componenet Paragraph,
       //whew i use split('\n') mean when split my string into an array
       //were when you reach \n split the string
    )
}

export default Paragraph