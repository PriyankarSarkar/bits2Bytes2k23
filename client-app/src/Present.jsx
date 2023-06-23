import bits2BytesLogo from "./assets/bits2Bytes2k23Logo.png";
import { Timer } from "./Timer";

export const Present = ({ duration }) => {
  return (
    <div className="relative flex flex-col space-y-5 mt-10 mb-5">
      <h1 className="text-5xl font-semibold tracking-wide text-pink-800">
        BENGAL INSTITUTE OF TECHNOLOGY
      </h1>
      <h1 className="text-4xl text-sky-600">PRESENTS</h1>
      <div className="flex justify-center">
        <img src={bits2BytesLogo} alt="bits2Bytes2k23 Logo" className="w-1/4" />
      </div>
      <Timer duration={duration} />
    </div>
  );
};
