import "./Home.css";

export const Home = () => {
  return (
    <div className="Home">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >

          <span className="visually-hidden">Previous</span>
        </button>

      </div>

      <div className="services">
        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/hb20.png"></img>
          <div className="texts">
            <h2>JEEP RENEGADE</h2>
            <p>2.0 16V TURBO DIESEL TRAILHAWK 4P 4X4 AUTOMÁTICO</p>
          </div>
        </div>

        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/JETTA-removebg-preview.png"></img>
          <div className="texts">
            <h2>JEEP RENEGADE</h2>
            <p>2.0 16V TURBO DIESEL TRAILHAWK 4P 4X4 AUTOMÁTICO</p>
          </div>
        </div>

        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/golf-removebg-preview.png"></img>
          <div className="texts">
            <h2>JEEP RENEGADE</h2>
            <p>2.0 16V TURBO DIESEL TRAILHAWK 4P 4X4 AUTOMÁTICO</p>
          </div>
        </div>

        <div className="card">
          <div className="ionicon">
            <img src="src/assets/images-removebg-preview.png"></img>
          </div>
          <div className="texts">
            <h2>FIAT STRADA</h2>
            <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/van verde.png"></img>
          <div className="texts">
            <h2>FIAT STRADA</h2>
            <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/van preta.png"></img>
          <div className="texts">
            <h2>FIAT STRADA</h2>
            <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/van branca.png"></img>
          <div className="texts">
            <h2>FIAT STRADA</h2>
            <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/van azul.png"></img>
          <div className="texts">
            <h2>FIAT STRADA</h2>
            <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>


          <div className="texts">
            <h2>FIAT STRADA</h2>
            <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>


          <div className="texts">
            <h2>FIAT STRADA</h2>
            <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>


          <div className="texts">
            <h2>FIAT STRADA</h2>
            <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
          </div>
        </div>

        <div className="card">
          <div className="ionicon">


            <div className="texts">
              <h2>FIAT STRADA</h2>
              <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-12 col-md-2 d-flex flex-column flex-md-row align-items-center justify-content-center"> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
