const Illustration = () => {
  const shapes = [
    // { src: "/images/shape/shape_02.svg", className: "shapes shape-two" },
    { src: "/images/shape/shape_03.svg", className: "shapes shape-three" },
    { src: "/images/shape/shape_04.svg", className: "shapes shape-four" },
  ];

  return (
    <div className="illustration-holder">
      <img
        src="/images/assets/hero-img.jpg"
        alt="illustration"
        height={"100%"}
        className="lazy-img main-illustration w-100"
      />
      {shapes.map((shape, i) => (
        <img key={i} src={shape.src} alt="illustration" className={`lazy-img ${shape.className}`} />
      ))}
    </div>
  );
};

export default Illustration;
