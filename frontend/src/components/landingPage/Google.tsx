import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleData } from "../../interface/userInterface";
import axios from "axios";

export default function Google() {
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const credentialResponseDecoded = jwtDecode(
        credentialResponse.credential,
      ) as googleData;
      const { email, given_name, picture } = credentialResponseDecoded;
      await axios
        .post("http://localhost:3000/auth/google", { email, given_name, picture })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
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
