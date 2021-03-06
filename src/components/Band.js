import React, { Component } from 'react';

class Band extends Component {

  render() {
    //debugger
    return(
      <div>
        <li key={this.props.id}>
        {this.props.band.name}
        </li>

        <button onClick={() => this.props.delete(this.props.id)}>
          DELETE
        </button>
      </div>
    );
  }
};

export default Band;
