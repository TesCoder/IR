export default function Section({ title, darkBg, children, centerContent, ...others }) {
  return (
    <div className={`flex flex-col items-center py-14 ${darkBg ? 'bg-gray-100' : ''}`} {...others}>
      <div className={`w-10/12 md:w-3/5 flex flex-col ${centerContent && 'items-center'}`}>
        <h1 className='font-medium md:font-light text-2xl md:text-4xl text-ivy-blue mb-3'>
          {title}
        </h1>
        {children}
      </div>
    </div>
  )
}