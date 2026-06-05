import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { projectCards } from '../data/projectCards'

const galleryRotationMs = 4500

function ProjectCard({ project, index }) {
  const fallbackGallery = [
    {
      src: project.screenshot,
      alt: `${project.title} screenshot`,
      label: 'Preview',
    },
  ]
  const gallery = project.gallery?.length ? project.gallery : fallbackGallery
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const activeImage = gallery[activeImageIndex] ?? gallery[0]
  const hasRotatingGallery = gallery.length > 1

  useEffect(() => {
    if (!hasRotatingGallery) {
      return undefined
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (motionQuery.matches) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % gallery.length)
    }, galleryRotationMs)

    return () => window.clearInterval(intervalId)
  }, [gallery.length, hasRotatingGallery])

  return (
    <article className="project-card">
      <div className="project-media">
        <div className="project-thumbnail">
          <div
            className="project-gallery-track"
            style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
          >
            {gallery.map((image, galleryIndex) => (
              <div
                className="project-gallery-slide"
                key={`${project.title}-${image.label}-${galleryIndex}`}
              >
                {image.src ? (
                  <img src={image.src} alt={image.alt} />
                ) : (
                  <span className="project-placeholder-label">Screenshot</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="project-image-status" aria-live="polite">
          <span>{activeImage.label || `Image ${activeImageIndex + 1}`}</span>
          {hasRotatingGallery && (
            <div
              className="gallery-dots"
              aria-label={`${project.title} gallery controls`}
            >
              {gallery.map((image, galleryIndex) => (
                <button
                  aria-label={`Show ${image.label || `image ${galleryIndex + 1}`}`}
                  aria-pressed={galleryIndex === activeImageIndex}
                  className={
                    galleryIndex === activeImageIndex
                      ? 'gallery-dot is-active'
                      : 'gallery-dot'
                  }
                  key={`${project.title}-${image.label}-${galleryIndex}`}
                  onClick={() => setActiveImageIndex(galleryIndex)}
                  type="button"
                ></button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="project-card-copy">
        <p className="project-count">Project {index + 1}</p>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p className="project-details">{project.details}</p>
        <blockquote className="project-testimonial">
          <p>{project.testimonial.quote}</p>
          <footer>
            <strong>{project.testimonial.name}</strong>
            <span>{project.testimonial.title}</span>
          </footer>
        </blockquote>
        <a
          className="profile-link"
          href={project.href}
          rel="noreferrer"
          target={project.href === '#' ? undefined : '_blank'}
        >
          View project
        </a>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <main>
      <section className="section projects-section">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h1>Completed projects.</h1>
        </div>
        <div className="project-grid">
          {projectCards.map((project, index) => (
            <ProjectCard
              index={index}
              key={`${project.title}-${index}`}
              project={project}
            />
          ))}
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
