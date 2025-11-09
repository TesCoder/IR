import Image from "next/image";
import { Button, ButtonRow } from "@/components/Button";
import { OrbitGlowButton } from "./OrbitGlowButton";


{/* Displays CoachInfo inside AboutUs */}
export default function CoachInfo({ setCoach, imgSrc, fname, past, description }) {
    return (
        <div>
            <div className="" id={JSON.stringify({fname}).split(":")[1].replace("\"", "").replace("\"\}", "").toLowerCase()}></div>
            <div className="flex flex-col md:flex-row text-lg shadow-xl shadow-gray-400/60 rounded-xl  p-10 md:p-20 transition-transform hover:scale-[1.02]">
                  {/* anchor to jump to each members' section from home page */}
                  <div className="w-full md:w-1/5 flex flex-col items-center">
                    <Image
                      className="coachProfilePic"
                      src={imgSrc}
                      width={400}
                      height={400}
                      alt={`Profile photo of ${fname}, Ivy Ready college admissions coach`}
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full md:w-4/5">
                    <h2 className="pCentered text-start"> {fname} </h2>
                    <p className="pCentered text-start" > College Counseling Professional </p>
                    {past.map((p, i) => ( <p className="pCentered text-start" key={i}> {p} </p> ))}
                    <p className="pCentered text-start !leading-[1.6] mt-4">{description}</p>
        
                    <div className="flex items-start mt-4">
                      <OrbitGlowButton
                        onClick={() => { setCoach(fname); }}
                        data-bs-toggle="modal"
                        data-bs-target="#coachModal"
                      >
                        Request an introductory session with {fname}
                      </OrbitGlowButton>
                    </div>
        
                  </div>
                </div>
          </div>
      );
    }