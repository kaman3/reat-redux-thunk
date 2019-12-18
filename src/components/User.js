import React, {Component} from "react";
import PropTypes from "prop-types";

export class User extends Component{

    render(){
        const { name } = this.props;

        setTimeout(()=>{
            this.props.setUser("Сергей");
        },5000);
        
        return(
            <div>
               <p>Меня зовут {name}</p>
            </div>
        );
    }
}