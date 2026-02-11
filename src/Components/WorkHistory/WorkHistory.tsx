import WorkHistoryItem from "./WorkHistoryItem.tsx";
import "./workhistory.css";
import useMediaQuery from "../../hooks/useMediaQuery.tsx";
const WorkHistory = () => {
    const isMobile = useMediaQuery("(max-width: 991px)");

    return (
        <div id='experience'>
            {isMobile && (
                <h2>Experience</h2>
            )}
            <WorkHistoryItem 
                time="JANUARY 2022 - PRESENT"
                title="HHSterling, Remote — Senior Software Engineer"
                description="Full-stack engineer on a two-person consulting team supporting and modernizing a large suite of enterprise applications. Led cross-platform initiatives including unifying legacy and rewritten navigation systems and standardizing UI themes across more than twenty products.
                    Migrated navigation configuration from database-driven logic to YAML to improve flexibility and maintainability. Built geospatial features using the Google Maps API and contributed to complex integrations such as WEX COBRA. Optimized backend services and SQL queries using New Relic, reducing critical response times by over ninety percent, and refactored core services to align with CQRS and MediatR patterns. Supported production deployments and participated in technical hiring."
                skills={["Type Script", "React", "C#", ".NET", "NewRelic", "Figma", "CQRS", "BFF", "Azure Devops", "Micro-Services", "HTML & CSS", "Storybook"]}
            />
            <WorkHistoryItem
                time="JULY  2021 - JANUARY  2022"
                title="Tealium, Remote — Software Engineer ll"
                description="Frontend engineer on the core architecture team supporting an enterprise machine learning data platform. Helped evolve the company’s internal component library, reduce technical debt, and improve dependency management. Partnered with design and engineering teams to establish scalable technical approaches and documentation standards, and increased Jest unit test coverage to strengthen application reliability."
                skills={["React", "javaScript", "Jest", "HTML & CSS"]}
            />
            <WorkHistoryItem
                time="DECEMBER 2020 - JULY 2021"
                title="Netchex, Remote— Software Engineer"
                description="Full-stack engineer on an agile team building and maintaining workforce management products, with a focus on scheduling and timecard systems. Contributed to responsive, production-ready features using React, .NET, and SQL, while consistently meeting delivery commitments. Participated in event storming with domain experts and DevOps to guide modernization efforts, and improved domain test coverage to strengthen system reliability."
                skills={["React", "javascript", "C#", ".NET", "HTML & CSS", "Google Maps Api"]}
            />
            <WorkHistoryItem
                time="MAY 2019 - DECEMBER 2020"
                title="Kikoda, Remote— Software Engineer"
                description="Full-stack engineer on a microservices-based platform for an insurance auditing client. Contributed to the development of distributed services and web interfaces using React, .NET Core, and SQL, with a focus on data accuracy, system reliability, and regulatory compliance. Supported API development, service integration, and reporting workflows to enable efficient auditing and investigation processes."
                skills={["React", "javascript", "C#", ".NET", "HTML & CSS", "Microservices", "Jira", "Storybook"]}
            />
        </div>
    )
}

export default WorkHistory;