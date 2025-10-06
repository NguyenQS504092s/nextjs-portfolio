import Image from 'next/image';
import Link from 'next/link';

const Datasets = () => {
  return (
    <section id="datasets" className="new-section">
      <div className="section-container">
        <div className="section-header">
          <div className="title-badge">📊 Datasets (Kaggle)</div>
          <h2>Featured Datasets</h2>
        </div>
        <div className="item-list">
          {/* Dataset 1 */}
          <div className="list-item">
            <h3>1. Titanic - Machine Learning from Disaster</h3>
            <p>Classic binary classification dataset. Explored survival prediction using logistic regression, decision trees, and ensemble models.</p>
            {/* Placeholder image */}
            <Image src="/project-3.png" alt="Titanic Dataset" width={800} height={450} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '15px' }} />
            <Link href="https://www.kaggle.com/c/titanic" className="item-link" target="_blank">🔗 Kaggle Dataset</Link>
          </div>

          {/* Dataset 2 */}
          <div className="list-item">
            <h3>2. House Prices - Advanced Regression Techniques</h3>
            <p>Used feature engineering and ensemble regressors (XGBoost, Lasso) to predict house prices from rich tabular data.</p>
            {/* Placeholder image */}
            <Image src="/project-4.png" alt="House Prices Dataset" width={800} height={450} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '15px' }} />
            <Link href="https://www.kaggle.com/c/house-prices-advanced-regression-techniques" className="item-link" target="_blank">🔗 Kaggle Dataset</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Datasets;
