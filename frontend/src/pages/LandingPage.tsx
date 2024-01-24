import Blob from "../components/landingPage/Blob";
import HRline from "../components/landingPage/HRline";
import TextAnimation from "../components/landingPage/TextAnimation";

export default function LandingPage() {
  return (
    <>
      <div>
        <TextAnimation />
      </div>
      <div>
        <HRline/>
      </div>
      <div>
        <Blob/>
      </div>
    </>
  );
}
