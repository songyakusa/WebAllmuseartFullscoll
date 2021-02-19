import React from "react";
import "../ranbow.scss";
import "./style.scss";

import { useTranslation } from "react-i18next";

export default function Customer() {
  const { t } = useTranslation();

  return (
    <div id="Customer">
      <div className="Customer-text">
        <h1>{t("Customer.1")}</h1>
        <img
          src="Picture/Customer/customer.jpg"
          height="auto"
          width="100%"
          alt="customer"
        ></img>
      </div>
      <hr class="rainbow"></hr>
    </div>
  );
}
