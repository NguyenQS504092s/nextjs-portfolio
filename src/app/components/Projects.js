import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="title-badge">🚀 Projects</div>
          <h2>My Work</h2>
          <p>A selection of my projects in AI, Machine Learning, and Data Science.</p>
        </div>
        <div className="project-list">
          {/* Project 1 */}
          <div className="project-item">
            <h3>1. Real-time Object Detection</h3>
            <p>Deployed YOLOv5 on edge devices like Raspberry Pi to detect and classify objects in real-time. Optimized model for low-latency inference using TensorRT.</p>
            <Image src="/project-1.png" alt="Real-time Object Detection" width={800} height={450} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '15px' }} />
            <Link href="#" className="project-link">🔗 GitHub Repo</Link>
          </div>

          {/* Project 2 */}
          <div className="project-item">
            <h3>2. Predictive Maintenance with IoT</h3>
            <p>Built ML models using time-series data from industrial sensors to predict potential failures. Integrated with MQTT for real-time alerts and dashboard visualization.</p>
            <Image src="/project-2.png" alt="Predictive Maintenance" width={800} height={450} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '15px' }} />
            <Link href="#" className="project-link">🔗 GitHub Repo</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
