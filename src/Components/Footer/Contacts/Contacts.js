import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Contacts.css"

class ContactsInfo extends Component {
    render() {
        return (
            <div class='ContactsMargin'>
                <h1>Kontakty</h1>

            </div>


        );
    }
}

//const Payment = withRouter(connect()(PaymentInfo));

export default ContactsInfo;