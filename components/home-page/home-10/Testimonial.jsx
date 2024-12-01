"use client";

import Slider from "react-slick";
import React, { useRef } from "react";
import Image from "next/image";

const Testimonial = () => {
  const data = [
    {
      imgSrc: "/images/media/img_02.png",
      backgroundColor: "#825EFF",
      rating: "Very solid, 8.3 out 10",
      text: "Next-level customer service! Faster orders, happier patrons, a smoother workflow, improved efficiency—it’s a win-win for everyone.",
      author: "Capri Pizzaservice",
      country: "Germany",
    },
    {
      imgSrc: "/images/media/img_02.png",
      backgroundColor: "#FF8A3A",
      rating: "Very solid, 9.1 out 10",
      text: "Devineers Tech revolutionized our business! Skyrocketed sales, seamless engagement, and unmatched dedication—it’s a total game-changer!",
      author: "ASIA Wok HH",
      country: "Germany",
    },
    {
      imgSrc: "/images/media/img_03.png",
      backgroundColor: "#08CE97",
      rating: "Very solid, 8.7 out 10",
      text: "Managing our restaurant is a breeze now! Streamlined orders, happier staff, and delighted customers—it’s truly an absolutely essential must-have tool!",
      author: "Palermo Pizza Service",
      country: "Germany",
    },
    {
      imgSrc: "/images/media/img_03.png",
      backgroundColor: "#08CE97",
      rating: "Very solid, 10 out 10",
      text: "Impressed by unmatched professionalism! Brilliant team, seamless communication, exceptional results—an overall outstanding experience!",
      author: "Hope Hydration",
      country: "USA",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7">
            <div className="title-style-one text-center text-md-start">
              <h2 className="main-title fw-bold tx-dark m0">
              <span>Our Clients</span> Our Best Advocates
              </h2>
            </div>
            {/* /.title-style-one */}
          </div>
          <div className="col-lg-6 col-md-5 ms-auto d-flex justify-content-center justify-content-sm-end">
            <ul className="slider-arrows slick-arrow-one d-flex justify-content-center style-none mb-30">
              <li
                className="prev_f1 slick-arrow rounded-circle text-center fs-20 tran3s"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <i className="bi bi-chevron-left text-white" />
              </li>
              <li
                className="next_f1 slick-arrow rounded-circle text-center fs-20 tran3s"
                onClick={() => sliderRef.current.slickNext()}
              >
                <i className="bi bi-chevron-right text-white" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /.container */}

      <div className="inner-content mt-100 lg-mt-60">
        <div className="feedback_slider_one custom">
          <Slider {...settings} ref={sliderRef} arrows={false}>
            {data.map((item, index) => (
              <div className="item" key={index}>
                <div className="feedback-block-one pt-45 align-items-end d-sm-flex">
                  <div className="img-meta position-relative">
                    <Image
                      width={297}
                      height={397}
                      src={item.imgSrc}
                      alt="img"
                      className="m-auto"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div
                      className="icon d-flex align-items-center justify-content-center rounded-circle mb-15"
                      style={{ backgroundColor: item.backgroundColor }}
                    >
                      <Image width={28} height={25} src="/images/icon/icon_07.svg" alt="img" />
                    </div>
                    <div className="rating h3 fw-bold tx-dark">{item.rating}</div>
                    <p className="text-lg pt-35 pb-20">{item.text}</p>
                    <h6>
                      {item.author}, <span className="opacity-25">{item.country}</span>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* /.feedback_slider_one */}
      </div>
      {/* /.inner-content */}
    </>
  );
};

export default Testimonial;
