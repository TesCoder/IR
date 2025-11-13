

//components/Section.js

export default function Section({ title, darkBg, redBg, children, centerContent, ...others }) {
  return (
    <div className={`section ${darkBg ? 'section--dark' : ''} ${redBg ? 'section--red' : ''}`} {...others} > 
      <div className={`section_content ${centerContent && 'items-center'}`}>
        {title && <h1 className="section_title">{title}</h1>}
        {children}
      </div>
    </div>
  );
}
