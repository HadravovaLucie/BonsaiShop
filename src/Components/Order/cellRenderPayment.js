import React, { Component } from 'react';

export default class cellRenderPayment extends Component {
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
                    <img style={{height: "37px", width: "37px"}} src="./images/hotovost.png" />
                </div>
            );
        case 2:
            return (
                <div>
                    <img style={{height: "37px", width: "37px"}} src="./images/.png" />
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