const WorkHistoryItem = ({ time, title, description, skills }) => {
    return (
        <div className="work-history-item">
            <div className="time">
                {time}
            </div>
            <div className="info">
                <div className="title">
                    {title}
                </div>
                <div className="description">
                    {description}
                </div>
                <div className="skills">
                    {skills.map((skill:string) => (
                        <div className="skill" id={skill}>{skill}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default WorkHistoryItem;