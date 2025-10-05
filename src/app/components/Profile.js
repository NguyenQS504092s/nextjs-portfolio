import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  return (
    <section id="profile">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-picture-container">
            <Image src="/profile-picture.jpg" alt="Nguyen Quang Sang" width={404} height={575} className="profile-picture" />
            <div className="status-badge">Available for work</div>
          </div>
          <h2>Hello I am Nguyen Quang Sang</h2>
          <p className="profile-subtitle">Computer Science, AI Major Based in Vietnam.</p>
          <div className="social-media">
            <Link href="#"><Image src="/social-icon-1.svg" alt="Social Media 1" width={24} height={24} /></Link>
            <Link href="#"><Image src="/social-icon-2.svg" alt="Social Media 2" width={24} height={24} /></Link>
            <Link href="#"><Image src="/social-icon-3.svg" alt="Social Media 3" width={24} height={24} /></Link>
          </div>
          <Link href="#contact" className="btn btn-primary connect-btn">Connect with me</Link>
        </div>
        <div className="profile-details">
          <div className="about-section">
            <h3>About</h3>
            <p>Aspiring AI Engineer and Computer Science student. Skilled in Python, C++, and exploring Machine Learning frameworks. Passionate about merging technology and creativity. Eager learner always seeking new challenges in tech and digital art.</p>
          </div>
          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skills-grid">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>TensorFlow</span>
              <span>PyTorch</span>
              <span>Data Analysis</span>
            </div>
          </div>
          <div className="experience-section">
            <h3>Experience</h3>
            <ul>
              <li><span>AI Research Intern</span><span>Tech Company</span><span>2024</span></li>
              <li><span>Software Developer Intern</span><span>Software Firm</span><span>2023</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
