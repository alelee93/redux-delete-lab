import React, { Component } from 'react';
import Band from './Band'
class Bands extends Component {
    render(){
        //debugger
        return(
            
            <div>
                
                {this.props.bands.map((band) => <Band band={band} id={band.id} dispatch={this.props.dispatch}/>)}
            </div>
        )
    }
}

export default Bands