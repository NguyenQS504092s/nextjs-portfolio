import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="title-badge">Computer Science, AI major</div>
          <h1>Nguyen Quang Sang</h1>
          <p>Computer Science, Artificial Intelligence. Let’s build something great!</p>
          <div className="hero-buttons">
            <Link href="#projects" className="btn btn-primary">See All Projects</Link>
            <Link href="#contact" className="btn btn-secondary">Contact Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
