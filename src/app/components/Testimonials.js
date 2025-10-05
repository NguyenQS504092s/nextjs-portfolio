import Image from 'next/image';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-left">
          <div className="title-badge">Happy Clients</div>
          <h2>Clients Love me</h2>
          <p>Trusted by 100+ happy clients, adding $250M+ in revenue.</p>
          <div className="stats">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Happy clients</p>
            </div>
            <div className="stat-item">
              <h3>$250m</h3>
              <p>revenue added</p>
            </div>
            <div className="stat-item">
              <h3>4.8</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
        {/* <div className="testimonials-right">
          <div className="review-card">
            <div className="review-header">
              <Image src="/project-1.png" alt="Will Smith" width={76} height={76} />
              <div className="reviewer-info">
                <h4>Will smith</h4>
                <p>Harper education</p>
              </div>
              <div className="rating">5.0 ★★★★★</div>
            </div>
            <p className="review-text">"The designs exceeded our expectations! Every element felt purposeful, creating a seamless and visually stunning brand identity"</p>
          </div>
          <div className="review-card">
            <div className="review-header">
              <Image src="/project-2.png" alt="Ikta Sollork" width={76} height={76} />
              <div className="reviewer-info">
                <h4>Ikta Sollork</h4>
                <p>PARAL CEO</p>
              </div>
              <div className="rating">4.7 ★★★★☆</div>
            </div>
            <p className="review-text">"Working with this process was effortless. The vision was understood perfectly, and the designs truly represent my brand"</p>
          </div>
          <div className="review-card">
            <div className="review-header">
              <Image src="/project-3.png" alt="Liloch" width={76} height={76} />
              <div className="reviewer-info">
                <h4>Liloch</h4>
                <p>AIO Founder</p>
              </div>
              <div className="rating">5.0 ★★★★★</div>
            </div>
            <p className="review-text">"Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement"</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
