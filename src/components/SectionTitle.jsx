export default function SectionTitle({ number, eyebrow, children, description }) {
  return <header className="section-heading"><p className="eyebrow"><span>{number} /</span> {eyebrow}</p><h2>{children}</h2>{description&&<p className="section-description">{description}</p>}</header>;
}
