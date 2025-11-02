export default function Section({ title, darkBg, children, centerContent, ...others }) {
  return (
    <div className={`flex flex-col items-center py-14 ${darkBg ? 'bg-[#2D5780] [&_.pCentered]:text-white [&_h1]:text-white [&_.coachProfilePic]:shadow-[0_0_20px_#ffff] ' : ''}`} {...others}>
      <div className={`w-4/5 flex flex-col ${centerContent && 'items-center'}`}>
      <h1>{title}</h1>
      {children}
      </div>
    </div>
  )
}