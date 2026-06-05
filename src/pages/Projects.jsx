import { Link } from 'react-router-dom'

function Projects() {
  return (
    <main>
      <section className="section projects-section">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h1>Completed projects.</h1>
        </div>
        <div className="page-cta">
          <h2>Ready to build yours?</h2>
          <p>
            Tell us what kind of site you need and what you want visitors to do
            when they land on it.
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

export default Projects
