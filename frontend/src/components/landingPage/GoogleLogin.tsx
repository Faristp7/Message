import { useGoogleLogin} from "@react-oauth/google";

export default function GoogleLogin() {
  const a = useGoogleLogin({
    onSuccess: (credentialResponse ) => {
      console.log(credentialResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <>
      <button onClick={() => a()}>Google</button>
    </>
  );
}
