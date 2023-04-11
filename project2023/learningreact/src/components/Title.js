import React from "react";


function MyTitle() {
    let title="";
    const person_one="jawad ";
    const person_two="fadi ";
    const info={
        name:"ali",
        family:"hamdan"
    };
    const client="b";
    client=="a" ? title=person_one + " CV" : title=person_two + " PHD";
    return(
        <div className="heading">
            <h3>
            {title}
            ya man
            </h3>
            {/* <p>Hello {info.name+ " " + info.family}</p> */}
            <p>Hello {`${info.name} ${info.family}`}</p>
            {/* ` name it back tick` */}
        </div>
        // <h1 className="heading">{client=="a" ?  person_one + " CV": person_two + " PHD"}</h1>
        // as well as i can write te if condition inside the {}
    );
}




export default MyTitle;