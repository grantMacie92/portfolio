import './aboutme.css';
import useMediaQuery from "../../hooks/useMediaQuery.tsx";

const AboutMe = () => {
    const isMobile = useMediaQuery("(max-width: 991px)");

    return (
        <div id="about">
            {isMobile && (
                <h2>About</h2>
            )}
            <span>
                I am a Senior Full Stack Software Engineer with over six years of experience building and modernizing enterprise applications in fast-moving, high-responsibility environments. My work focuses on creating reliable, maintainable systems that balance strong architecture with real-world business needs.
            </span>
            <span>
                Currently at HHSterling, I work on a small consulting team where I take ownership of complex platforms end to end. I have led major initiatives including unifying global navigation across more than twenty applications, modernizing UI themes for consistency and accessibility, integrating geospatial tools using the Google Maps API, and migrating configuration systems to improve transparency and maintainability.
            </span>
            <span>
                I regularly collaborate with product owners, designers, DevOps, and stakeholders to clarify requirements, audit existing systems, and deliver features that improve usability and performance. Using tools like New Relic and disciplined refactoring practices, I have helped reduce critical response times by over ninety percent and strengthen long-term system reliability.
            </span>
            <span>
                My technical background spans React and TypeScript on the frontend, .NET and Node.js services on the backend, and SQL-based data systems. I am especially interested in system modernization, clean architecture, and building tools that scale with both users and teams.
            </span>
        </div>
    )
}

export default AboutMe;