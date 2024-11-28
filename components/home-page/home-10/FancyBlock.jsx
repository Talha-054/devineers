import Link from "next/link";

const FancyBlock = () => {
  const images = [
    {
      src: "/images/media/img_04.jpg",
      alt: "media",
      className: "lazy-img rounded-3",
    },
    {
      src: "/images/shape/shape_15.svg",
      alt: "media",
      className: "lazy-img shapes shape-one",
    },
    {
      src: "/images/shape/shape_16.svg",
      alt: "media",
      className: "lazy-img shapes shape-two",
    },
    {
      src: "/images/shape/shape_17.svg",
      alt: "media",
      className: "lazy-img shapes shape-three",
    },
    {
      src: "/images/shape/shape_18.svg",
      alt: "media",
      className: "lazy-img shapes shape-four",
    },
    {
      src: "/images/shape/shape_19.svg",
      alt: "media",
      className: "lazy-img shapes shape-five",
    },
  ];

  const AllData = [
    {
      title: <>React Pizza App</>,
      img: {
        src: "/images/media/img_04.jpg",
        alt: "media",
        className: "lazy-img rounded-3",
      },
      subtitle:
        "Our Pizza App boosts restaurant efficiency and growth with an intuitive admin panel, real-time tracking, and powerful analytics. It empowers data-driven decisions, streamlines workflows, and scales effortlessly. Trusted by top restaurants, keeps them ahead in the evolving food industry.",
      author: "Rashed Kabir",
      authorTitle: "CEO Janu",
    },
    {
      title: <>Mobile Repair Shop</>,
      img: {
        src: "/images/media/img_04.jpg",
        alt: "media",
        className: "lazy-img rounded-3",
      },
      subtitle:
        "Auis nostrud exercitation ullamco labors nis slit alquip Duis aute irure dolor in reprehen erio isu voluptate velit sed.",
      author: "Rashed Kabir",
      authorTitle: "CEO Janu",
    },
  ];

  return (
    <>
      {AllData.map((data, index) => {
        if (index % 2 === 0) {
          return (
            <div className="row" key={index}>
              <div className="col-xl-5 col-lg-6 ms-auto order-lg-last">
                <div className="block-style-one md-mb-60" data-aos="fade-left">
                  <div className="title-style-one">
                    <h2 className="main-title fw-bold tx-dark m0">{data.title}</h2>
                  </div>
                  <p className="text-lg pt-60 pb-60 lg-pt-30 lg-pb-30">{data.subtitle}</p>
                  <div className="name fs-20 tx-dark fw-500">
                    {/* - {data.author}, <span className="opacity-25">{data.authorTitle}</span> */}
                    <Link
                        href="https://demo.reactors.dev/"
                        target="_blank"
                      >
                        <button type="button" className="btn-three">Live Preview</button>
                    </Link>
                    
                  </div>
                </div>
              </div>
              {/* End .col-xl-5 */}

              <div
                className="col-xl-6 col-lg-5 col-md-8 col-sm-10 order-lg-first"
                data-aos="fade-right"
              >
                <div className="img-meta-two d-inline-block position-relative pb-50">
                  <img src={data.img.src} alt={data.img.alt} className={data.img.className} />
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="row" key={index}>
              <div className="col-xl-5 col-lg-6 ms-auto order-lg-first">
                <div className="block-style-one md-mb-60" data-aos="fade-left">
                  <div className="title-style-one">
                    <h2 className="main-title fw-bold tx-dark m0">{data.title}</h2>
                  </div>
                  <p className="text-lg pt-60 pb-60 lg-pt-30 lg-pb-30">{data.subtitle}</p>
                  <div className="name fs-20 tx-dark fw-500">
                    {/* - {data.author}, <span className="opacity-25">{data.authorTitle}</span> */}
                    <Link
                        href="#"
                      >
                        <button type="button" className="btn-three">Live Preview</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-5 col-md-8 col-sm-10 order-lg-last"
                data-aos="fade-left"
              >
                <div className="img-meta-two d-inline-block position-relative pb-50">
                  <img src={data.img.src} alt={data.img.alt} className={data.img.className} />
                </div>
              </div>
              {/* End .col-xl-5 */}
            </div>
          );
        }
      })}
    </>
  );
};

export default FancyBlock;
