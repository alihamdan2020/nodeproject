import React from "react";
import MyTitle from "./Title";
import MyParagraph from "./Paragraph";
import MyList from './List'

import "./style.css";


function Header(){

  return(
          <header>
          <MyTitle />
          <MyParagraph />
          <MyList />
          </header>
         
  );
}



export default Header;

