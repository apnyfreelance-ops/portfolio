import { Link } from 'react-router-dom'
import { demoCards } from '../data/demoCards'

function Demos() {
  return (
    <main>
      <section className="section demos-section">
        <div className="section-heading">
          <p className="eyebrow">Landing page demos</p>
          <h1>Demo websites.</h1>
        </div>
        <div className="demo-grid">
          {demoCards.map((demo, index) => (
            <article className="demo-card" key={`${demo.title}-${index}`}>
              <div className="demo-thumbnail">
                {demo.screenshot ? (
                  <img src={demo.screenshot} alt="" />
                ) : (
                  <span>Screenshot</span>
                )}
              </div>
              <div className="demo-card-copy">
                <h2>{demo.title}</h2>
                <p>{demo.description}</p>
                <a
                  className="profile-link"
                  href={demo.href}
                  rel="noreferrer"
                  target={demo.href === '#' ? undefined : '_blank'}
                >
                  View demo
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="page-cta">
          <h2>Want one customized for your business?</h2>
          <p>
            Use a demo as a starting point, or ask for something built around
            your business from scratch.
          </p>
          <Link
            className="button primary"
            to={{ pathname: '/', hash: '#contact' }}
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Demos
