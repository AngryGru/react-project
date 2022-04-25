import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("This field cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "This field cannot be empty"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandle = (e: any) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setEmailError("Invalid email adress");
    } else {
      setEmailError("");
    }
  };

  const passwordHandle = (e: any) => {
    setPassword(e.target.value);
    const regex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z*]/g;
    if (e.target.value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else if (!regex.test(String(e.target.value))) {
      setPasswordError("Password should contain A-Z, a-z, 0-9");
    } else {
      setPasswordError("");
    }
  };

  const blurHandle = (e: any) => {
    if (e.target.name === "email") {
      setEmailDirty(true);
    }
    if (e.target.name === "password") {
      setPasswordDirty(true);
    }
  };

  //   const onSubmitLoginForm = (e: any) => {
  //     e.preventDefault();
  //   };

  return (
    <form className="Login">
      <label>
        Email:
        {emailDirty && emailError && (
          <span style={{ color: "red" }}>{emailError}</span>
        )}
        <Input
          type={"email"}
          name={"email"}
          value={email}
          placeholder={"Enter your email"}
          onBlur={(e: any) => blurHandle(e)}
          onChange={(e: any) => emailHandle(e)}
        />
      </label>
      <label>
        Password:
        {passwordDirty && passwordError && (
          <span style={{ color: "red" }}>{passwordError}</span>
        )}
        <Input
          type={"password"}
          name={"password"}
          value={password}
          placeholder={"Enter your password"}
          onBlur={(e: any) => blurHandle(e)}
          onChange={(e: any) => passwordHandle(e)}
        />
      </label>
      <Button disabled={!formValid} className={"btn"} value={"Login"} />
      <p>
        Forgot your password?{" "}
        <Button className={"btnLink"} value={"Reset password"} />
      </p>
    </form>
  );
};

export default LoginForm;
