import React from 'react';
import Button from 'react-bootstrap/Button';
import './Buttons.scss'

function Buttons(props) {
    return (
        <>            
        <Button  
        className={`transperent-btn ${props.className}`}   
        value={props.value}
        onClick={props.onClick}
        >
            {props.value}
        </Button>      
        </>
        )
  }

  

export default Buttons;