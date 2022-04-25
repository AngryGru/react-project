import React, { useState } from "react";
import "./Authorization.css";
import Header from "./Header";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Authorization = (props: any) => {
  const [tabName, setTabName] = useState("login");

  const onHeaderButtonClick = (name: string) => {
    setTabName(name);
  };

  return (
    <div className="authotizationContainer">
      <div className="authorizationContent">
        <Header onClick={onHeaderButtonClick} activeTab={tabName} />
        {tabName === "login" ? <LoginForm /> : <RegistrationForm />}
      </div>
    </div>
  );
};

export default Authorization;
