import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./DeliveryInfo.css";

class DeliveryInfo extends Component {
    render() {
        return (
            <div class="DeliveryMargin">
                <h1 class="Heading Heading--big notMoveH1">Přehled možností dopravy</h1>
			<p class="Text mt10">Doručíme vám zboží kamkoli a&nbsp;kdykoli budete chtít. Bezpečně, rychle a&nbsp;levně.</p>

			<ul class="CheckCircleList mt30">
				<li class="CheckCircleList-item">Doprava zdarma nebo od 45 Kč</li>
				<li class="CheckCircleList-item">Ve vybraných městech dovoz do 90 minut</li>
				<li class="CheckCircleList-item">Transport těžkého a objemného zboží</li>
				<li class="CheckCircleList-item">Sledování stavu objednávky online</li>
				<li class="CheckCircleList-item">Víkendové a večerní doručení</li>
            </ul>
            </div>
        );
    }
}

//const Delivery = withRouter(connect()(DeliveryInfo));

export default DeliveryInfo;