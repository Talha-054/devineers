import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_02.svg",
    bgColor: "rgba(100, 219, 226, 0.18)",
    title: "Proffesional Support by expert.",
    description:
      "Experience unmatched excellence with our elite experts, delivering solutions that redefine success and inspire confidence.",
    delay: 0,
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_156.svg",
    bgColor: "rgba(255, 171, 51, 0.18)",
    title: "Web & Graphics Design.",
    description:
      "Redefine creativity with jaw-dropping designs that command attention, spark emotion, and elevate your brand to greatness.",
    delay: 200,
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_157.svg",
    bgColor: "rgba(255, 160, 194, 0.18)",
    title: "Marketing & Affiliate Services.",
    description:
      "Dominate your market with bold, game-changing strategies and high-impact affiliate partnerships built for victory.",
    delay: 300,
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_158.svg",
    bgColor: "rgba(56, 232, 255, 0.1)",
    title: "Web Development & Design",
    description:
      "Empower your digital presence with cutting-edge websites that exude brilliance, precision, and unstoppable performance.",
    delay: 0,
  },
  {
    id: 5,
    iconSrc: "/images/icon/icon_159.svg",
    bgColor: "rgba(108, 55, 221, 0.1)",
    title: "Mobile Application Development.",
    description:
      "Revolutionize the future with immersive, world-class mobile apps designed to captivate, engage, and lead the market.",
    delay: 200,
  },
  {
    id: 6,
    iconSrc: "/images/icon/icon_160.svg",
    bgColor: "rgba(68, 255, 0, 0.18)",
    title: "Content & Article Writing.",
    description:
      "Ignite your audience with powerful, dynamic content that commands attention and positions your brand as unstoppable.",
    delay: 300,
  },
];

const Block2 = () => {
  return (
    <>
      {cardData.map((card) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={card.delay}
          key={card.id}
        >
          <div className="card-style-one pe-xxl-5 position-relative mb-90 md-mb-70">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: card.bgColor }}
            >
              <img width={32} height={40} src={card.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h5 className="fw-500 mt-35 mb-25">
              <Link href="/pages-menu/service-details" className="tran3s tx-dark">
                {card.title}
              </Link>
            </h5>
            <p className="mb-25">{card.description}</p>
            <Link href="/pages-menu/service-details">
              <img
                width={41}
                height={14}
                src="/images/icon/icon_05.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link>
          </div>
          {/* /.card-style-one */}
        </div>
      ))}
    </>
  );
};

export default Block2;
