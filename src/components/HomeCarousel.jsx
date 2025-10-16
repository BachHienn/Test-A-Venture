export default function HomeCarousel() {
  const imageStyle = {
    height: "600px",
    objectFit: "cover",
  };

  const captionStyle = {
    bottom: "20px",
    left: "20px",
    right: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img style={imageStyle} src="/assets/images/airq.webp" className="d-block w-100" alt="..." />
          <div className="carousel-caption" style={captionStyle}>
            <h5>Cleaner Air for a Healthier Future</h5>
            <button className="btn btn-light">Learn More</button>
          </div>
        </div>

        <div className="carousel-item">
          <img style={imageStyle} src="/assets/images/carbon.webp" className="d-block w-100" alt="..." />
          <div className="carousel-caption" style={captionStyle}>
            <h5>Tracking Carbon for a Greener Tomorrow</h5>
            <button className="btn btn-light">Learn More</button>
          </div>
        </div>

        <div className="carousel-item">
          <img style={imageStyle} src="/assets/images/solar.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption" style={captionStyle}>
            <h5>Empowering Vietnam with Solar Energy</h5>
            <button className="btn btn-light">Learn More</button>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
