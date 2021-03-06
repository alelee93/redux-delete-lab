import React, { Component } from 'react';
//import { connect } from 'react-redux'


class Band extends Component {

  handleOnClick() {
    //debugger
    //this.props.dispatch({type: "DELETE_BAND", payload: this.props.id})
    this.props.dispatch(this.props.id)
  }

  render() {
    //debugger

    return(
      <div>
        <li key={this.props.id}>
        {this.props.band.name}
        </li>

        <button onClick={() => this.handleOnClick()}>
          DELETE
        </button>
      </div>
    );
  }
};

export default Band;
