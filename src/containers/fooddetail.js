import React, {Component} from "react";
import { connect } from "react-redux";


class FoodDetail extends Component {
    render() {
        if(!this.props.activeFood){
            return (<h2>Select a Food</h2>);
        }
        return (
            <div>
                <img src={this.props.activeFood.imageUrl} height="200" width="200"/>
                <p>Name: {this.props.activeFood.name}</p>
                <p>Description: {this.props.activeFood.description}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        activeFood: state.fooddetail
    };
}


let FoodDetailContainer=connect(mapStateToProps)(FoodDetail);
export default FoodDetailContainer;