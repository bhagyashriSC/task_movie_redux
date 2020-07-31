import React from 'react';
import './Star.scss'
 var star = [];
class Star extends React.Component{
    constructor(props) {
        super(props)   
       
    }  
    render() {
        for (var i = 1; i <= this.props.rating; i++) {
            star.push( <i className="fa fa-star yellow" ></i>);
          }
          star =[];
          return star;
    }
    
   
}
  

export default Star;