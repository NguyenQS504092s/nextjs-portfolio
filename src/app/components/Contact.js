import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <div className="title-badge">Let's Connect</div>
          <h2>Let's Grow Together</h2>
          <div className="contact-services">
            <div className="service-item">
              <div className="service-info">
                <h5>AI Showcase</h5>
                <p></p>
              </div>
              <div className="price-badge">Starting from $100</div>
            </div>
            <div className="service-item">
              <div className="service-info">
                <h5>Data Scientist</h5>
                <p></p>
              </div>
              <div className="price-badge">Hire me</div>
            </div>
          </div>
          <div className="hero-buttons">
            <Link href="#projects" className="btn btn-primary">See All Projects</Link>
            <Link href="#contact" className="btn btn-secondary">Get Started Now</Link>
          </div>
        </div>
        <div className="contact-right">
          <Image src="/project-4.png" alt="Contact Image" width={552} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
