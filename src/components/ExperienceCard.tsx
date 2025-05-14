import AppDeveloperCard from "./AppDevExp";
import FrontendEngineerCard from "./FrontendEngExp";


export default function ExperimentSection() {
  return (
    <div className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex justify-center items-center bg-white">
        <AppDeveloperCard />
      </div>

      <div className="sticky top-0 h-screen flex justify-center items-center text-white bg-[#7c0aee]">
        <FrontendEngineerCard />
      </div>
    </div>
  );
}
