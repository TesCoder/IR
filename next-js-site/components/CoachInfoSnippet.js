import Image from "next/image";
import { Button, ButtonRow } from "@/components/Button";
import { OrbitGlowButton } from "./OrbitGlowButton";

{/* Displays CoachInfoSnippet inside Index */}
export default function CoachInfoSnippet({ fname, name, imgSrc, admCollege, description }) {
    return (
      <div className="w-1/3 md:w-1/6 flex flex-col items-center mt-4">
            <Image
              className="coachProfilePic"
              src={imgSrc}
              width={400}
              height={400}
              alt="profile picture"
              loading="lazy"
            />
            <span className="pCentered mt-2">{fname} </span>
            <span className="pCentered !text-[110%] truncate w-20 text-centert">{admCollege}</span>
      
            <OrbitGlowButton
              className="px-1"
              onClick={() => {
                setCoach(name);
              }}
              data-bs-toggle="modal"
              data-bs-target="#coachModal"
            >
              Learn More
            </OrbitGlowButton>
          </div>
      );
    }

    