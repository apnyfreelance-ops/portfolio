import { useState } from 'react'
import { Link } from 'react-router-dom'
import andrewPhoto from '../assets/andrew.png'
import nicholasPhoto from '../assets/nicholas.png'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const WEB3FORMS_PLACEHOLDER = 'replace_with_your_web3forms_access_key'

function Home() {
  const [formStatus, setFormStatus] = useState({
    type: 'idle',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleHeroPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    event.currentTarget.style.setProperty('--cursor-x', `${x}%`)
    event.currentTarget.style.setProperty('--cursor-y', `${y}%`)
  }

  const handleHeroPointerLeave = (event) => {
    event.currentTarget.style.setProperty('--cursor-x', '50%')
    event.currentTarget.style.setProperty('--cursor-y', '48%')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (
      !WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_ACCESS_KEY === WEB3FORMS_PLACEHOLDER
    ) {
      setFormStatus({
        type: 'error',
        message:
          'The contact form is not configured yet. Please try again later.',
      })
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'New APNY Freelance website inquiry')
    formData.append('from_name', 'APNY Freelance Contact Form')

    setIsSubmitting(true)
    setFormStatus({
      type: 'loading',
      message: 'Sending your inquiry...',
    })

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      const result = await response.json().catch(() => null)

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.body?.message ||
            result?.message ||
            'Unable to send your inquiry right now.',
        )
      }

      form.reset()
      setFormStatus({
        type: 'success',
        message: 'Thanks. Your inquiry was sent successfully.',
      })
    } catch (error) {
      setFormStatus({
        type: 'error',
        message:
          error.message || 'Something went wrong. Please try again in a moment.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <section
        className="hero-section"
        id="home"
        onPointerLeave={handleHeroPointerLeave}
        onPointerMove={handleHeroPointerMove}
      >
        <div className="hero-backdrop" aria-hidden="true">
          <span className="ambient-ring ring-one"></span>
          <span className="ambient-ring ring-two"></span>
          <span className="ambient-line line-one"></span>
          <span className="ambient-line line-two"></span>
        </div>
        <div className="hero-content">
          <p className="eyebrow">Web design and development</p>
          <h1>APNY Freelance</h1>
          <p className="hero-lede">
            Premium websites for businesses ready to look sharper online.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#contact">
              Start a project
            </a>
            <a className="button secondary" href="#about">
              Meet the team
            </a>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">About us</p>
          <h2>Meet the team.</h2>
        </div>
        <div className="founder-grid">
          <article className="founder-card">
            <div className="profile-photo-slot">
              <img src={andrewPhoto} alt="Andrew Pereira" />
            </div>
            <div className="founder-copy">
              <h3>Andrew Pereira</h3>
              <p>
                WPI student with web development experience and HTML/CSS
                certification.
              </p>
              <a
                className="profile-link"
                href="https://www.linkedin.com/in/andrew-pereira-7b59012a8/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </article>
          <article className="founder-card">
            <div className="profile-photo-slot">
              <img src={nicholasPhoto} alt="Nicholas Yokaitis" />
            </div>
            <div className="founder-copy">
              <h3>Nicholas Yokaitis</h3>
              <p>
                Northeastern cybersecurity student with HTML/CSS certification
                and systems project work.
              </p>
              <a
                className="profile-link"
                href="https://www.linkedin.com/in/nicholas-yokaitis-647049242/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </article>
        </div>
        <div className="about-actions" aria-label="Explore more work">
          <Link className="button primary" to="/demo">
            View demos
          </Link>
          <Link className="button secondary" to="/projects">
            Completed projects
          </Link>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Tell us what you need.</h2>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            className="botcheck"
            name="botcheck"
            type="checkbox"
            tabIndex="-1"
            autoComplete="off"
          />
          <label>
            <span>Name</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            <span>Phone</span>
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            <span>Business name optional</span>
            <input name="business" type="text" autoComplete="organization" />
          </label>
          <label className="message-field">
            <span>Message</span>
            <textarea name="message" rows="6" required></textarea>
          </label>
          {formStatus.message ? (
            <p
              className={`form-status ${formStatus.type}`}
              role={formStatus.type === 'error' ? 'alert' : 'status'}
            >
              {formStatus.message}
            </p>
          ) : null}
          <button
            className="button primary form-submit"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send inquiry'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default Home
