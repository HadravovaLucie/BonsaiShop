import React, { Component } from 'react';

export default class cellRenderDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  get_image(value) {
    switch(value) {
        case 1:
            return (
                <div>
                    <img style={{height: "37px", width: "37px"}} src="./images/osobni_odber.png" />
                </div>
            );
        case 2:
            return (
                <div>
                    <img style={{height: "37px", width: "37px"}} src="./images/dovoz.svg" />
                </div>  
            );
    }
  }

  render() {
    return ( 
        <div>
            {this.get_image(this.state.value)}
        </div>
    );
  }
}
