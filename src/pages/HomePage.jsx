import HomeCarousel from "../components/HomeCarousel";
import TopicCard from "../components/TopicCard";

export default function HomePage() {
    // Data for TopicCard
    const topicList = [
        {
            title: "Air Quality",
            description: "Track air pollution levels and compare AQI trends between cities across Vietnam.",
            link: "/air",
            image: "/assets/logos/air-pollution.png"
        },
        {
            title: "Waste Collection",
            description: "View waste collection centers and report illegal dumping verified on blockchain.",
            link: "/waste",
            image: "/assets/logos/trash.png"
        },
        {
            title: "Renewable Energy",
            description: "Explore solar and wind projects with blockchain-verified capacity data.",
            link: "/renew",
            image: "/assets/logos/renewable-energy.png"
        },
        {
            title: "Tree Planting Zones",
            description: "Monitor reforestation progress, trees planted, and CO₂ absorbed.",
            link: "/tree",
            image: "/assets/logos/tree.png"
        },
        {
            title: "Carbon Data",
            description: "Analyze carbon emissions by sector and get AI policy suggestions.",
            link: "/carbon",
            image: "/assets/logos/carbon-dioxide.png"
        }
    ]

    const cardContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
        width: "100%",
        marginTop: "2rem"
    }

    return (
        <>
            <div className="pageBody">
                <HomeCarousel></HomeCarousel>

                <div className="card-container" style={cardContainerStyle}>
                    {topicList.map((topic, index) => (
                        <TopicCard
                        key={index}
                        title={topic.title}
                        description={topic.description}
                        link={topic.link}
                        image={topic.image}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}       