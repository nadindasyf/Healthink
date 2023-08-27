import React from 'react';
import WeightLossImage from './Asset/weightloss.png';
import WeightMaintenanceImage from './Asset/maintenance.png';
import WeightGainImage from './Asset/weightgain.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Meal() {
  return (
    <section id="Meal" >
      <b>Rekomendasi Makanan Indonesia untuk Diet</b> <br />
      <br />
      <center>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '1000px' }}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner rounded-pill">
            <div className="carousel-item active">
              {/* <img src="Asset/weightloss.png" className="d-block w-100" alt="Slide 1" /> */}
              <img src={WeightLossImage} className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Weight Loss Diet</h5>
                <p>Rekomendasi makanan Indonesia untuk <i>Weight Loss</i></p>
              </div>
            </div>
            <div className="carousel-item">
            <img src={WeightMaintenanceImage} className="d-block w-100" alt="Slide 2" />
              
              <div className="carousel-caption d-none d-md-block">
                <h5>Weight Maintenance Diet</h5>
                <p>Rekomendasi makanan Indonesia untuk <i>Weight Maintenance</i></p>
              </div>
            </div>
            <div className="carousel-item">
            <img src={WeightGainImage} className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Weight Gain Diet</h5>
                <p>Rekomendasi makanan Indonesia untuk <i>Weight Gain</i></p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </center>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </section>
  );
}

export default Meal;
