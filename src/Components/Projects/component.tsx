const Component = ({ image, href, title, description, skills } : { image: string, href: string, title: string, description: string, skills: string[] }) => {
    return (
        <div className="project-list-item">
            <a className="title" href={href}>{title}</a>
            <p className="description">{description}</p>
            <div className="skills">
                {skills?.map((skill: string) => (<span className="skill">{skill}</span>))}
            </div>
            <img src={image} alt={title} />
        </div>
    )
}

export default Component;