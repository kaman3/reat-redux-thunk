import React, {Component} from "react";

export class Page extends Component{
    onButtonClick = e => {
        const  year = e.currentTarget.innerText;
        this.props.setYear(year);
    }
    render(){
        const { photos, year } = this.props;
        return(
            <div>
                <button onClick ={this.onButtonClick}>29</button>
                <p>У вас {photos.length} в году {year}</p>
            </div>
        );
    }
}