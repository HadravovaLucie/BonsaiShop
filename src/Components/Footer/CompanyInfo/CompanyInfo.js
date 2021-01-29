import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./CompanyInfo.css"

class CompanyInfo extends Component {
    render() {
        return (
            <div class="InfoMargin">
                <h1>Company Info</h1>
            </div>
        );
    }
}

//const Delivery = withRouter(connect()(DeliveryInfo));

export default CompanyInfo;