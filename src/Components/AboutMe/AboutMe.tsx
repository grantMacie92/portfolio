import useMediaQuery from "../../hooks/useMediaQuery.tsx";
import './aboutme.css';

const AboutMe = () => {
    const isMobile = useMediaQuery("(max-width: 991px)");

    return (
        <div id="about">
            {isMobile && (
                <h2>About</h2>
            )}
            <span>
                I am a Senior Full Stack Software Engineer with over six years of experience building and modernizing enterprise applications in fast-moving, high-responsibility environments. I focus on designing reliable, maintainable systems that balance strong architecture with practical business needs.
            </span>
            <span>
                At HHSterling, I work on a small consulting team where I take end-to-end ownership of complex platforms spanning more than twenty applications. I’ve led large-scale initiatives including unifying global navigation, standardizing UI systems for consistency and accessibility, and implementing dynamic role-based authorization to enforce least-privilege access directly in the interface. I also migrated navigation configuration from a relational schema to a structured YAML contract, enabling hierarchical permissions, multiple routes per menu item, and a centralized source of truth that significantly improved flexibility and maintainability.
            </span>
            <span>
                Performance and reliability are central to my approach. Using New Relic, I identified and resolved bottlenecks that improved critical response times by over ninety percent. I refactored backend and frontend services toward clearer architectural patterns, expanded automated test coverage around domain logic, and partnered closely with DevOps to ensure stable cross-environment releases. I’ve also integrated geospatial features using the Google Maps API to support data visualization needs.
            </span>
            <span>
                My background spans React and TypeScript on the frontend and .NET-based services with SQL data systems on the backend. I am particularly drawn to system modernization, clean architecture, and building scalable tools that grow alongside both users and engineering teams.
            </span>
        </div>
    )
}

export default AboutMe;