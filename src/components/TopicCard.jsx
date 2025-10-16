export default function TopicCard({ title, description, link, image }) {
    const cardStlye = {
        width: "32%",
        minWidth: "250px",
        display:"flex",
        alignItems:"center",
        padding: "40px"
    }

    const logoStlye = {
        height: "128px"
        ,width:"128px"
    }

    return (
        <div className="card" style={cardStlye}>
        <img style={logoStlye} src={image} alt={title} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={link} className="btn btn-primary">
            Learn More
            </a>
        </div>
        </div>
    )
}
