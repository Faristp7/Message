import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleData } from "../../interface/userInterface";
import authApi from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserAuth } from "../../redux/user/userAuth";

export default function Google() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const credentialResponseDecoded = jwtDecode(
        credentialResponse.credential,
      ) as googleData;
      const { email, given_name, picture } = credentialResponseDecoded;
      const response = await authApi.login({email, given_name , picture})
      localStorage.setItem("token" , response.data.token)
      dispatch(getUserAuth(true))
      navigate('/home')
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
