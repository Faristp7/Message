import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleData } from "../../interface/userInterface";

export default function Google() {
  const handleSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const credentialResponseDecoded = jwtDecode(
        credentialResponse.credential,
      ) as googleData;
      const { email, given_name, picture } = credentialResponseDecoded;
      console.log(email, given_name, picture);
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
