import HeroSubscribe from "./HeroSubscribe";
import Illustration from "./Illustration";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-7">
          <h2 className="hero-heading fw-bold tx-dark">
          Dominate Your Market with our Digital &nbsp;
            <span className="position-relative d-inline-block"> Expertise!</span>
          </h2>
          <p className="text-lg mb-60 pt-50 pe-xl-5 lg-pt-30 lg-mb-40">
            <strong>Devineers Tech</strong> helps you scale, lead, and dominate—on time, every time."
          </p>

          {/* <HeroSubscribe /> */}

          <div className="pr-info fw-500 fs-20 tx-dark mt-35">
            Over &nbsp;
            <span className="fw-bold text-decoration-underline">150+ client</span>
            &nbsp; all over the world.
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="card-one shapes bg-white">
        <div className="icon rounded-circle position-absolute fs-18 text-white d-flex justify-content-center align-item-center">
          <img src="/images/icon/icon_08.svg" alt="" className="lazy-img m-2" />
        </div>
        {/* <div className="icon rounded-circle position-absolute fs-18 text-white">
          <i className="bi bi-check-lg" />
        </div> */}
        <h6 className="fw-500 tx-dark mb-15">24/7 Customer Support.</h6>
        <a href="#" className="more-btn tran3s text-uppercase fw-500 fs-13">
          Learn MORe
        </a>
      </div>
      {/* End card-one */}

      <Illustration />
      {/* /.illustration-holder */}
    </div>
  );
};

export default Hero;
