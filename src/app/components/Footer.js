import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-container new-section">
        <div className="section-header">
          <div className="title-badge">📬 Contact Me</div>
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-links">
          <p>Feel free to reach out through any of the platforms below:</p>
          <ul>
            <li><strong>Email:</strong> 1Pixel3Neurons@gmail.com</li>
            <li><strong>LinkedIn:</strong> <Link href="https://linkedin.com/in/1Pixel3Neurons" target="_blank">linkedin.com/in/1Pixel3Neurons</Link></li>
            <li><strong>GitHub:</strong> <Link href="https://github.com/1Pixel3Neurons" target="_blank">github.com/1Pixel3Neurons</Link></li>
            <li><strong>Twitter:</strong> <Link href="https://x.com/1Pixel3Neurons" target="_blank">@1Pixel3Neurons</Link></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Made with ❤️ by Aftab Alam & Cline</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
