import IncidentsMap from "../../assets/incidentsMap.png";
import useMediaQuery from "../../hooks/useMediaQuery.tsx";
import Component from "./component";
import "./index.css";

const Projects = () => {
    const isMobile = useMediaQuery("(max-width: 991px)");

    return (
        <div id="projects">
            {isMobile && (
                <h2>Projects</h2>
            )}
            <Component
                image={IncidentsMap}
                title="Incident Map"
                href="https://salmon-grass-041707b1e.2.azurestaticapps.net/"
                description="Interactive mapping application built with React and the Google Maps JavaScript API that visualizes real-time trucking incidents. Implements marker clustering, dynamic filtering, and map-bound data loading to efficiently render large datasets while maintaining performance and usability."
                skills={["TypeScript", "React", "Tailwind", "C#", ".NET", "SQL", "Azure", "Google Maps API"]}
            />
        </div>
    )
}

export default Projects;