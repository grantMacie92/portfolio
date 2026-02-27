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
                time="JANUARY 2023 - FEBRUARY 2026"
                title="HHSterling, Remote — Senior Software Engineer"
                description="I worked as a Full Stack Engineer on a small, high-impact consulting team responsible for maintaining and modernizing a suite of enterprise applications used across 20+ products. I led large-scale frontend initiatives, including unifying global navigation, standardizing UI systems, and implementing dynamic role-based authorization to enforce least-privilege access at the interface layer. I migrated configuration systems from relational schemas to structured YAML contracts, enabling more flexible routing and hierarchical permissions. I also optimized backend performance, improving response times by over 90%, and refactored services toward CQRS to strengthen system clarity, reliability, and long-term maintainability."
                skills={["Type Script", "React", "C#", ".NET", "NewRelic", "Figma", "CQRS", "BFF", "Azure Devops", "Micro-Services", "HTML & CSS", "Storybook"]}
            />
            <WorkHistoryItem
                time="JULY  2022 - JANUARY  2023"
                title="Tealium, Remote — Software Engineer ll"
                description="I worked on the core architecture team for an enterprise machine learning data platform. I helped maintain and evolve a shared React component library used across the organization, partnering closely with design to translate system-level UX decisions into reusable, scalable components. I contributed to improving frontend standards by increasing Jest test coverage and introducing structured design documentation practices to support clearer planning and long-term maintainability."
                skills={["React", "javaScript", "Jest", "HTML & CSS"]}
            />
            <WorkHistoryItem
                time="DECEMBER 2020 - JULY 2022"
                title="Netchex, Remote— Software Engineer"
                description="I contributed to building workforce management tools, as a Full Stack Engineer, from the ground up, including a complex Scheduler and Timecard system built with React and .NET. The platform required careful handling of time zones, intricate date logic, and payroll-sensitive edge cases for enterprise clients. We encapsulated that complexity behind a refined, drag-and-drop interface that delivered a smooth user experience without sacrificing accuracy or compliance. I also participated in architectural discussions and helped increase unit test coverage to improve long-term reliability."
                skills={["React", "javascript", "C#", ".NET", "HTML & CSS", "Google Maps Api"]}
            />
            <WorkHistoryItem
                time="MAY 2019 - DECEMBER 2020"
                title="Kikoda, Remote— Software Engineer"
                description="I worked as a Full Stack Engineer on a microservices-based application built with React, .NET Core, and SQL Server. I developed RESTful APIs and frontend features across distributed services, contributing to scalable application workflows and modernizing core system components."
                skills={["React", "javascript", "C#", ".NET", "HTML & CSS", "Microservices", "Jira", "Storybook"]}
            />
        </div>
    )
}

export default WorkHistory;