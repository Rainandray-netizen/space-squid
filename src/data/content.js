import webDesignImg from '../assets/icons/web-design.png'
import webDevImg from '../assets/icons/web-development.png'
import webHostingImg from '../assets/icons/web-hosting.png'
import webMaintenanceImg from '../assets/icons/web-maintenance.png'
import orangeSquareImg from '../assets/images/orange-square.jpeg'
import spaceBubble from '../assets/images/space-bubble.png'
import spaceSquidImage from '../assets/images/space-squid-image-transparent.png'

const data = {
 hero:{
  body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  backgroundImage: spaceBubble,
  logoImage: spaceSquidImage,
  backgroundAlt: 'Stars in deep space',
  logoAlt: 'A squid blasting off with a rocket engine',
 },
 about:{
  header: "What We Do",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
 },
 services:[
  {id: 1, image: webDevImg, alt: 'code in web browser', subtitle: 'Web Development', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {id: 2, image: webDesignImg, alt: 'a crossed ruler and pencil', subtitle: 'Design', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {id: 3, image: webHostingImg, alt: 'server stack', subtitle: 'Hosting', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {id: 4, image: webMaintenanceImg, alt: 'cog', subtitle: 'Maintenance', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
 ],
 chooseUs:{
  header:'Why Choose Us',
  body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Mollis nunc sed id semper risus in. Praesent semper feugiat nibh sed pulvinar proin. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Odio ut enim blandit volutpat maecenas. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum.',
  cta:'GET IN TOUCH',
 },
 portfolio:[
  {id:1, image: orangeSquareImg, alt: 'a completely orange square'}
 ],
 testimonials:[
  {id:1, body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", person: "Name S.",}
 ],
 contactUs:{
  header:'Work With Us',
  body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
 }
}

export default data