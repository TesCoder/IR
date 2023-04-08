import Image from "next/image";

export default function formSubmitted() {
    return (
        <div className="flex flex-row w-5/5">
            <div className="w-1/5"></div>
            <Image
            className="w-3/5 justify-center"
            src={"/images/formsubmission.jpg"}
            width={750}
            height={993}
            alt="form submission"
            />
        </div>
    );

}