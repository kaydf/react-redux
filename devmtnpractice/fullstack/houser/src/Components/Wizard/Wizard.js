import React from "react";
import {Link, Route} from "react-router-dom";
// import axios from "axios";
import StepOne from "../StepOne/StepOne"
import StepTwo from "../StepTwo/StepTwo"
import StepThree from "../StepThree/StepThree"






const Wizard = () => {
    return (
        <div>
            <button><Link to="/">Cancel</Link></button>
            <Route path="/wizard/step1" component={StepOne} />
            <Route path="/wizard/step2" component={StepTwo} />
            <Route path="/wizard/step3" component={StepThree} />
        </div>
    )
}

export default Wizard;