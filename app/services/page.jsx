import Image from "next/image";

import Footer from "@/components/home-page/home-10/Footer";
import Header from "@/components/home-page/home-10/Header";
import Block2 from "@/components/services/Block2";
import Faq4 from "@/components/faqs/Faq4";
import Testimonial from "@/components/services/Testimonial";
import CallToActions from "@/components/services/CallToActions";
import FancyBanner from "@/components/home-page/home-10/FancyBanner";
export const metadata = {
  title: "Service V4 || Jano - Creative Multipurpose React NextJS Template",
};
const ServiceV4 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header />
      {/* 
      =============================================
      Theme Inner Banner
      ============================================== 
      */}
      <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"
          style={{ backgroundImage: "url(/images/assets/bg-17.svg)" }}
        >
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">Services</h2>
            </div>
            <p className="fs-20 mt-30 lg-mt-20">
           Discover expert services that drive innovation, deliver results, and fuel businesses' growth.
            </p>
          </div>
          {/* End container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.inner-banner-three */}
      {/* 
			=============================================
				Feature Section One
			============================================== 
			*/}
      <div className="fancy-feature-one pt-120 lg-pt-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 aos fadeInLeft">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-bold tx-dark m0">
                  Provide <span>Quality</span> Services.
                </h2>
              </div>{" "}
              {/* /.title-style-one */}
            </div>
            <div className="col-lg-5 ms-auto aos fadeInRight">
              <p className="text-lg text-center text-lg-start md-pt-30 m0">
              Devineers Tech offers global asset management with expert solutions, driving impactful results.
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-120 lg-pt-80 md-pt-60">
          <div className="row gx-xxl-5">
            <Block2 />
          </div>
        </div>{" "}
        {/* /.container */}
      </div>
      {/* /.fancy-feature-one */}
      {/* 
			=============================================
				Feature Section Fifty Four
			============================================== 
			*/}
      <div className="fancy-feature-fiftyFour p-30 mt-50 lg-mt-40">
        <div className="bg-wrapper position-relative zn2 pt-110 lg-pt-80 pb-110 lg-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <div className="title-style-one">
                  <div className="sc-title text-uppercase">Why us?</div>
                  <h2 className="main-title fw-bold tx-dark">
                    Why <span>choose</span> Devineers.
                  </h2>
                </div>{" "}
                {/* /.title-style-one */}
                <p className="text-lg mt-40 lg-mt-20">
                  {/* We helping our client to fullfill their needs with our expert. */}
                  We deliver expert solutions that ignite growth and lead to success.
                </p>
                <img
                  src="/images/shape/shape_179.svg"
                  alt="shape"
                  className="lazy-img d-none d-lg-block mt-40"
                />
              </div>
              {/* End .col-4 */}

              <div className="col-lg-7 ms-auto" data-aos="fade-left">
                <div className="bg-white pe-3 ps-3 pe-lg-5 ps-lg-5 pt-15 pb-15 ms-xxl-4 rounded-3 md-mt-40">
                  <Faq4 />
                  {/* /.accordion-style-two */}
                </div>
              </div>
            </div>
          </div>
          {/* End container */}

          <img
            width={8}
            height={8}
            src="/images/shape/shape_11.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <img
            width={18}
            height={16}
            src="/images/shape/shape_13.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          />
          <img
            width={8}
            height={8}
            src="/images/shape/shape_10.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <img
            width={10}
            height={10}
            src="/images/shape/shape_12.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
        </div>{" "}
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-fiftyFour */}

      {/* 
			=============================================
				Take out plan
			============================================== 
			*/}
      <FancyBanner />

      {/* 
        =============================================
        Footer
        ============================================== 
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

export default ServiceV4;
