import "./Footer.css";

const Footer = () => {
  return (
    <div className="card w-100 text-center texts">
      <div className="card-body d-flex justify-content-center align-items-center flex-column">
        <h5 className="card-title ">MoveCar </h5>
        
        <p className="card-text">
          Como foi a sua experiência com o nosso site?
        </p>
        <a href="#" className="btn btn-primary">
          Enviar
        </a>
        <div className="rating ">
          <input type="radio" id="star5" name="rate" value="5" />
          <label htmlFor="star5" title="text"></label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label htmlFor="star4" title="text"></label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label htmlFor="star3" title="text"></label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label htmlFor="star2" title="text"></label>
          <input
            defaultChecked=""
            type="radio"
            id="star1"
            name="rate"
            value="1"
          />
          <label htmlFor="star1" title="text"></label>
        </div>
      </div>
    </div>
  );
};

export default Footer;
