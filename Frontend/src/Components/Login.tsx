import { GoogleCredentialResponse, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const responseMessage = (response: GoogleCredentialResponse) => {
    console.log(response);
  };

  const errorMessage = (error: void) => {
    console.log(error);
  };

  return <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />;
};

export default Login;
