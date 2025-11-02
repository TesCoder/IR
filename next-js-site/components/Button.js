// Button.js

// Button component with lightweight structure — styling controlled at call site
export function Button({ className = "", children, ...others }) {
  return (
    <button
      className={` ${className}`}
      {...others}
    >
      {children}
    </button>
  );
}

// className="mt-6 mb-6 bg-ivy-red text-white hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold text-lg shadow-lg"

// ButtonRow: three action-oriented CTAs
export const ButtonRow = ({ setModalType, lightBg }) => (
  <div className={`flex justify-center ${lightBg ? "" : "bg-gray-100"}`}>
    <div className="my-5 flex flex-col gap-x-10 gap-y-4 items-center md:flex-row">

      <Button
        onClick={() => setModalType("INFO")}
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        Start Your Application Plan
      </Button>

      <Button
        onClick={() => setModalType("CALL")}
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        Request Free Intro Call
      </Button>


      {/* <Button href="tel:650-383-0352">
        Talk to an Admissions Expert
      </Button> */}
      
    </div>
  </div>
);

// Button function below corresponds to Get in Touch, Get a Quick, Call now
// export function Button({ className, children, ...others }) {
//   return (
//     <button 
//      className={` ${className ? className : ""}`} {...others}>
//       {children}
//     </button>
//   )
// }

// // ButtonRow function creates rows of 'Get in Touch', 'Get a Quick', 'Call now' buttons
// export const ButtonRow = ({ setModalType, lightBg }) => (
//   <div className={`flex justify-center ${lightBg ? "" : "bg-gray-100"}`}>
//     {/* Button Row */}
//     <div className='my-5 flex flex-col gap-x-32 gap-y-4 items-center md:flex-row'>
//       <Button onClick={() => setModalType("INFO")} data-bs-toggle="modal" data-bs-target="#contactModal">Get in Touch</Button>
//       <Button onClick={() => setModalType("CALL")} data-bs-toggle="modal" data-bs-target="#contactModal">Get a Quick Call</Button>
//       <Button onClick={() => window.open("tel:650-383-0352", "_self")}>Call now</Button>
//     </div>
//   </div>

// )
