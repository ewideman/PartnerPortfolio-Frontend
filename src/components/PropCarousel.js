import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const PropCarousel = ({ slides }) => {
  console.log('slides', slides)
  return (
    <Carousel fade>
      {slides.map(({ url, title, label, text }) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={url}
            alt=""
          />
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>{label}</p>
            <p>{text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default PropCarousel;
