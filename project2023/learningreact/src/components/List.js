import react from 'react'
import List from './ListItem'

function MyList(){

    return(

        <ul className="socialLinks">
            <List media="Facebook" id="face" img='https://picsum.photos/60'/>
            <List media="Twitter" id="twit" img='https://picsum.photos/62'/>
            <List media="Instagram" id="insta" img='https://picsum.photos/61'/>
        </ul>
    );
}

export default MyList;