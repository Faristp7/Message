import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleData } from "../../interface/userInterface";
import authApi from "../../api/authApi";

export default function Google() {
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const credentialResponseDecoded = jwtDecode(
        credentialResponse.credential,
      ) as googleData;
      const { email, given_name, picture } = credentialResponseDecoded;
      const response = await authApi.login({email, given_name , picture})
      console.log(response);
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap={true}
      />
    </>
  );
}
