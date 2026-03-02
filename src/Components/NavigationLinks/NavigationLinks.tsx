import { useActiveSection } from "../../hooks/useActiveSection.tsx";
import NavLink from "./NavLink.tsx";
import "./index.css";

const SECTIONS = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const NavigationLinks: React.FunctionComponent = () => {
    const activeId = useActiveSection(SECTIONS.map((s) => s.id), 140)
    return (
        <div className='navigation-links'>
            <NavLink href="#about" label="About" active={activeId === SECTIONS[0].id} />
            <NavLink href="#experience" label="Experience" active={activeId === SECTIONS[1].id}></NavLink>
            <NavLink href='#projects' label="Projects" active={activeId === SECTIONS[2].id}></NavLink>
            <NavLink href='#contact' label="Contact" active={activeId === SECTIONS[3].id}></NavLink>
        </div>
    )
}

export default NavigationLinks;