import React, { useState, useEffect } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';

function Textbox(props) {
    const [name,setname] = useState("");

    const handleChange = (e) => {     
        setname(e.target.value);      
         props.onChange(e.target.value);      
      }
    return (
        <>
        <Col>
            <label className="text-capitalize">{props.fieldLabel}</label>
            <InputGroup className= {props.errorMessage === undefined ? "mb-2" : "mb-1" }>                           
            <FormControl
                id={props.id}
                className = {props.className}
                style={props.style}
                onChange={(e) => handleChange(e)}
                name={props.name}
                value={ name}
                placeholder={props.placeholder}
                aria-label={props.ariaLabel}
                aria-describedby={props.ariaDescribedBy}
                type = {props.type}
                disabled = {props.isDisabled}
                maxLength = {props.maxlength}
                minLength ={props.minlength}
            />               
            </InputGroup>       
            {props.errorMessage !== undefined ? <div className="errorMsg">{props.errorMessage}</div> : null }
            {/*this.state.errors !== undefined && this.state.errors.type !== "" ? <div className="errorMsg">{this.props.errorMessage}</div> : null */}
        </Col>     
      </>
    )
  }
  export default Textbox;