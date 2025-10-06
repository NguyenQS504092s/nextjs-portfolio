import Image from 'next/image';
import Link from 'next/link';

const Research = () => {
  return (
    <section id="research" className="new-section">
      <div className="section-container">
        <div className="section-header">
          <div className="title-badge">📚 Research & Publications</div>
          <h2>My Publications</h2>
        </div>
        <div className="item-list">
          {/* Publication 1 */}
          <div className="list-item">
            <h3>1. A Lightweight Deep Learning Framework for Real-Time Defect Detection</h3>
            <p>Published at IEEE ICMLC 2023. Proposed a compact CNN for detecting surface anomalies in manufacturing using low-power devices.</p>
            {/* Placeholder image */}
            <Image src="/project-1.png" alt="Publication 1" width={800} height={450} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '15px' }} />
            <Link href="#" className="item-link" target="_blank">🔗 Publication Link</Link>
          </div>

          {/* Publication 2 */}
          <div className="list-item">
            <h3>2. Blog: Predicting Stock Prices using LSTM & Attention</h3>
            <p>Technical blog post explaining how to combine LSTM and attention mechanisms for forecasting financial time series.</p>
            {/* Placeholder image */}
            <Image src="/project-2.png" alt="Publication 2" width={800} height={450} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '15px' }} />
            <Link href="#" className="item-link" target="_blank">🔗 Read Blog</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
