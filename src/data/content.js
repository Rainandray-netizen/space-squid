import webDesignImg from '../assets/icons/web-design.png'
import webDevImg from '../assets/icons/web-development.png'
import webHostingImg from '../assets/icons/web-hosting.png'
import webMaintenanceImg from '../assets/icons/web-maintenance.png'
import orangeSquareImg from '../assets/images/orange-square.jpeg'

const data = {
  about: {
    header: "What We Do",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  services: [
    { id: 1, image: webDevImg, alt: 'code in web browser', subtitle: 'Development', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 2, image: webDesignImg, alt: 'a crossed ruler and pencil', subtitle: 'Design', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 3, image: webHostingImg, alt: 'server stack', subtitle: 'Hosting', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, image: webMaintenanceImg, alt: 'cog', subtitle: 'Maintenance', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  ],
  portfolio: [
    { id: 1, image: orangeSquareImg, alt: 'a completely orange square' }
  ],
  testimonials: [
    { id: 1, body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", }
  ]

}

export default data