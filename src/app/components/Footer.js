import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-left">
            <Link href="/" className="logo">Snapshot</Link>
            <ul className="nav-links">
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#profile">Profile</Link></li>
              <li><Link href="#testimonials">Reviews</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-right social-media">
            <Link href="#"><Image src="/social-icon-1.svg" alt="Social Media 1" width={24} height={24} /></Link>
            <Link href="#"><Image src="/social-icon-2.svg" alt="Social Media 2" width={24} height={24} /></Link>
            <Link href="#"><Image src="/social-icon-3.svg" alt="Social Media 3" width={24} height={24} /></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Snapshot</p>
          <p>Made by Snapshot</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
