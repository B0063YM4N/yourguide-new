import Carousel from "react-bootstrap/Carousel";

export const DestinationItem = ({
  childnumber,
  imagesrc,
  imagesrc2,
  imagesrc3,
  desname,
  desdescription,
}) => {
  return (
    <div className={`des-container-item ${childnumber}`} >
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <img src={imagesrc} alt="" />
          <div className="overlay"></div>
          <h1>{desname}</h1>
          <p>{desdescription}</p>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagesrc2} alt="" />
          <div className="overlay"></div>
          <h1>{desname}</h1>
          <p>{desdescription}</p>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagesrc3} alt="" />
          <div className="overlay"></div>
          <h1>{desname}</h1>
          <p>{desdescription}</p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
