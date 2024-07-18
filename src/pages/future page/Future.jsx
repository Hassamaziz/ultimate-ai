import React from "react";
import "./future.css";
import Card from "../../components/card/Card";
import generator from "../../assets/AI Generator.png";
import advanced from "../../assets/Advanced.png";
import payment from "../../assets/Payment.png";
import support from "../../assets/Support.png";
import template from "../../assets/Template.png";
import lingual from "../../assets/Lingual.png";


const Future = () => {
  return (
    <div className="container future__section my-5">
      <div className="row future__row">
        <h1 className="future__h1">
          The Future Of <span style={{ color: "#13938D" }}>AI</span>{" "}
        </h1>
      </div>
      <div className="row future__row my-3 d-flex justify-content-center">
        <div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center">
          <Card
            title="AI Generator"
            paragraph="Generate text, image, code,
                   chat and even more with"
            image={generator}
          />
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center">
          <Card
            title="Advanced Dashboard"
            paragraph="Access to valuable user insight,
                       analytics and activity"
            image={advanced}
          />
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center">
          <Card
            title="Payment Gateways"
            paragraph="Securely process credit card,
                        debit card, or other methods"
            image={payment}
          />
        </div>
      </div>

      <div className="row future__row my-3 d-flex justify-content-center">
        <div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center">
          <Card
            title="Multi-Lingual"
            paragraph="Ability to understand and
                        generate content in different
                        languages"
            image={lingual}
          />
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center">
          <Card
            title="Custom Templates"
            paragraph="Add unlimited number of
                      custom prompts for your
                        customers"
            image={template}
          />
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center">
          <Card
            title="Support Platform"
            paragraph="Access and manage your
                        support tickets from your
                        dashboard"
            image={support}
          />
        </div>
      </div>
    </div>
  );
};

export default Future;
