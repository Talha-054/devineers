import FancyBlock from "@/components/home-page/home-10/FancyBlock";
import Header from "@/components/home-page/home-10/Header";
import Hero from "@/components/home-page/home-10/Hero";
import Testimonial from "@/components/home-page/home-10/Testimonial";
import FancyBanner from "@/components/home-page/home-10/FancyBanner";
import Footer from "@/components/home-page/home-10/Footer";
import Services2 from "@/components/home-page/home-11/Services2";
import PortfolioTopTitle from "@/components/portfolio/PortfolioTopTitle";
import PortfolioGallery2 from "@/components/portfolio/PortfolioGallery2";
export const metadata = {
  title: "Agency Modern || Jano - Creative Multipurpose React NextJS Template",
};
const AgencyModern = () => {
  return (
    <>
      {/*
        =============================================
        Navbar
        ============================================== 	
      */}
      <Header />

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
      */}
      <div className="hero-banner-one p-30">
        <div className="bg-wrapper" data-aos="fade">
          <Hero />
          <img
            src="/images/shape/shape_08.svg"
            alt="illustration"
            className="lazy-img shapes shape-eight"
          />
        </div>
      </div>

      {/* 
        =============================================
        Services 
        ============================================== 
        */}
      <div className="container fancy-feature-one  lg-pt-140">
        <div className=" inner-content pt-110 lg-pt-60 md-pt-30">
          <div className="row gx-xxl-5">
            <Services2 />
          </div>
        </div>
      </div>

      <div className="container mt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12" data-aos="fade-right">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-bold tx-dark m0">
                  Our Best <span>Sellers</span>.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="fancy-feature-two position-relative pt-100">
          <div className="container">
            <FancyBlock />
          </div>
        </div>
      </div>

      {/* <div>
        <PortfolioTopTitle />
        <PortfolioGallery2 />
      </div> */}
      {/* /.fancy-feature-one */}

      {/*
			=====================================================
				Clients Feedback
			=====================================================
			*/}
      <div
        className="feedback-section-one position-relative mt-100 p-30  lg-mt-130 "
        data-aos="fade-up"
      >
        <div className="bg-wrapper position-relative pt-150 pb-180 lg-pt-100 lg-pb-120">
          <img src="/images/shape/shape_14.svg" alt="img" className="lazy-img shapes shape-one" />
          <div className="shapes shape-two" />
          <div className="shapes shape-three" />
          <Testimonial />
        </div>
      </div>

      {/* 
			=============================================
				Portfolio
			============================================== 
			*/}
      <div>
        <PortfolioTopTitle />
        <PortfolioGallery2 />
      </div>

      {/* 
			=============================================
				Take out plan
			============================================== 
			*/}
      <FancyBanner />
      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-one theme-basic-footer position-relative">
        <div className="shapes shape-one" />
        <div className="container">
          <div className="inner-wrapper">
            <Footer />
            <div className="bottom-footer">
              <p className="copyright text-center m0">
                © {new Date().getFullYear()}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://themeforest.net/user/ib-themes"
                >
                  ib-themes
                </a>
              </p>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
      {/* /.footer-style-one */}
    </>
  );
};

export default AgencyModern;
