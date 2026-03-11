import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Building things that work</h1>
          <p>
            Software developer with a background in industrial automation. I
            design and build web applications with the same attention to logic
            and reliability I've applied to production systems for years.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
