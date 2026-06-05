import hydroforceGallery from '../assets/hydroforce/gallery.png'
import hydroforceHome from '../assets/hydroforce/home.png'
import hydroforceServices from '../assets/hydroforce/services.png'

export const projectCards = [
  {
    title: 'Hydroforce Washing',
    description: 'Landing page for a pressure washing business.',
    details: 'Worked with business owner to design and develop a clean, modern website that highlights their services and makes it easy for customers to book appointments. Updated with accurate information and a photo gallery of their work.',
    href: 'https://www.hydroforcewashing.com',
    screenshot: '',
    gallery: [
      {
        src: hydroforceHome,
        alt: 'Hydroforce Washing home page screenshot',
        label: 'Home',
      },
      {
        src: hydroforceServices,
        alt: 'Hydroforce Washing services screenshot',
        label: 'Services',
      },
      {
        src: hydroforceGallery,
        alt: 'Hydroforce Washing gallery screenshot',
        label: 'Gallery',
      },
    ],
    testimonial: {
      quote: 'Love it!',
      name: 'Joseph Valenzisi',
      title: 'Owner, Hydroforce Washing',
    },
  },
]
