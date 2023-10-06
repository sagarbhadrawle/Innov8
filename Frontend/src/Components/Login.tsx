import React from "react";
import { GoogleCredentialResponse, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const responseMessage = (response: GoogleCredentialResponse) => {
    console.log(response);
  };

  const errorMessage = (error: Error) => {
    console.log(error);
  };

  return <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />;
};

export default Login;
