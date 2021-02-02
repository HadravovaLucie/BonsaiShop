import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./PaymentInfo.css"

class PaymentInfo extends Component {
    render() {
        return (
            <div class='PaymentMargin'>
                <h1>Obchodní podmínky</h1>

<ul>
<li> Tyto všeobecné obchodní podmínky (dále jen „obchodní podmínky“) upravují vzájemná práva a povinnosti smluvních stran vzniklé v souvislosti nebo na základě kupní smlouvy uzavírané mezi prodávajícím a kupujícím prostřednictvím internetového obchodu (dále jen „kupní smlouva“).</li>
<li> Obchodní podmínky jsou nedílnou součástí kupní smlouvy. Pokud není v kupní smlouvě nebo v jejích přílohách výslovně uvedeno odchylné ujednání nebo platnost některých ustanovení těchto obchodních podmínek není kupní smlouvou nebo jiným výslovným ujednáním mezi prodávajícím a kupujícím vyloučena nebo jinak modifikována, platí v ostatním pro vzájemné vztahy smluvních stran tyto obchodní podmínky.</li>
<li> Právní vztahy prodávajícího s kupujícím výslovně neupravené těmito všeobecnými obchodními podmínkami se řídí příslušnými ustanoveními zákona č. 89/2012 Sb., občanský zákoník. Právní vztahy prodávajícího se spotřebitelem se současně řídí zákonem č. 634/1992 Sb., o ochraně spotřebitele, ve znění pozdějších předpisů.</li>
</ul>

            </div>


        );
    }
}

//const Payment = withRouter(connect()(PaymentInfo));

export default PaymentInfo;