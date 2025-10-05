import Image from 'next/image';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="title-badge">Recent Projects</div>
          <h2>Recent AI Projects</h2>
          <p>Showcase of some of my recent AI realcase solutions</p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <Image src="/project-1.png" alt="Project 1" layout="fill" objectFit="cover" />
            <div className="project-icon"></div>
          </div>
          <div className="project-card">
            <Image src="/project-2.png" alt="Project 2" layout="fill" objectFit="cover" />
            <div className="project-icon"></div>
          </div>
          <div className="project-card">
            <Image src="/project-3.png" alt="Project 3" layout="fill" objectFit="cover" />
            <div className="project-icon"></div>
          </div>
          <div className="project-card">
            <Image src="/project-4.png" alt="Project 4" layout="fill" objectFit="cover" />
            <div className="project-icon"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
