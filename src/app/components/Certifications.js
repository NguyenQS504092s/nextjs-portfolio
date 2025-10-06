import Image from 'next/image';
import Link from 'next/link';

const Certifications = () => {
  return (
    <section id="certifications" className="new-section">
      <div className="section-container">
        <div className="section-header">
          <div className="title-badge">📜 Certifications</div>
          <h2>My Certifications</h2>
        </div>
        <div className="item-list">
          {/* Certification 1 */}
          <div className="list-item">
            <h3>Deep Learning Specialization - Coursera</h3>
            {/* Placeholder image */}
            <Image src="/project-1.png" alt="Deep Learning Specialization" width={800} height={450} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '15px' }} />
            <Link href="#" className="item-link" target="_blank">🔗 Verify Certificate</Link>
          </div>

          {/* Certification 2 */}
          <div className="list-item">
            <h3>TensorFlow Developer Certificate</h3>
            {/* Placeholder image */}
            <Image src="/project-2.png" alt="TensorFlow Developer Certificate" width={800} height={450} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '15px' }} />
            <Link href="#" className="item-link" target="_blank">🔗 Verify Certificate</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
