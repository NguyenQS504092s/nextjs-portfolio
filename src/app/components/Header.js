import Link from 'next/link';

const Header = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <Link href="/" className="logo">Snapshot</Link>
        <ul className="nav-links">
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#testimonials">Testimonials</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <Link href="#" className="cta-button">Get for Free</Link>
      </nav>
    </header>
  );
};

export default Header;
