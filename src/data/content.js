import webDesignImg from '../assets/icons/web-design.png';
import webDevImg from '../assets/icons/web-development.png';
import webHostingImg from '../assets/icons/web-hosting.png';
import webMaintenanceImg from '../assets/icons/web-maintenance.png';
import orangeSquareImg from '../assets/images/orange-square.jpeg';
import spaceBubble from '../assets/images/space-bubble.png';
import spaceSquidImage from '../assets/images/space-squid-image-transparent.png';

// Portfolio Images
import reikilightspaceImage from '../assets/images/portfolio-reikilightspace.png';
import twsImage from '../assets/images/portfolio-tws.png';
import pcaImage from '../assets/images/portfolio-puruscounterattack.png';

const data = {
  hero: {
    body: 'We are a small, passionate team of developers and designers committed to delivering quality, custom built websites that suit your needs!  Whether you want a brand new website or just a few tweaks to your current site, we deliver top quality work with the end user in mind.',
    backgroundImage: spaceBubble,
    logoImage: spaceSquidImage,
    backgroundAlt: 'Stars in deep space',
    logoAlt: 'A squid blasting off with a rocket engine',
  },
  services: [
    {
      id: 1,
      image: webDevImg,
      alt: 'code in web browser',
      subtitle: 'Development',
      body: 'We offer a range of traditional static websites, ultra-responsive web apps, custom back-end servers, and a variety of integrations with everything from e-commerce to mailing lists.',
    },
    {
      id: 2,
      image: webDesignImg,
      alt: 'a crossed ruler and pencil',
      subtitle: 'Design',
      body: 'We understand the importance of quality user experience and interface. Our dedicated design team will work closely with you to design a website that your users will love!',
    },
    {
      id: 3,
      image: webHostingImg,
      alt: 'server stack',
      subtitle: 'Hosting',
      body: "Not sure how to host your own website? Don't sweat it! We also offer secure web hosting services.",
    },
    {
      id: 4,
      image: webMaintenanceImg,
      alt: 'cog',
      subtitle: 'Maintenance',
      body: "If you're looking for updates to an existing website, we can help. From new features to bug fixes, our developers and designers will get the job done.",
    },
  ],
  chooseUs: {
    header: 'Why Choose Us',
    body: "When you're running a business, making the right choice for your website can be overwhelming.  At Space Squid Creative, we work closely with you to design and develop personalized websites with a style you love and the functionality you need.  From the first step to the last, we've got you covered.",
    cta: 'GET IN TOUCH',
  },

  portfolio: {
    description:
      "We've created web-apps and websites for small businesses of all types. With client side content management, email marketing integration, and built-in spam protection, we offer great websites with everything you need and nothing you don't.",
    projects: [
      {
        id: 1,
        image: reikilightspaceImage,
        alt: 'Reikilight Space',
        url: 'https://reikilightspace.co.uk/',
      },
      {
        id: 2,
        image: twsImage,
        alt: 'TWS Health & Wellness',
        url: 'https://tws.health/',
      },
      {
        id: 3,
        image: pcaImage,
        alt: "Purus' Counterattack",
        url: '/',
      },
    ],
  },
  testimonials: [
    {
      id: 1,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      person: 'Name A.',
    },
    {
      id: 2,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      person: 'Name B.',
    },
    {
      id: 3,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      person: 'Name C.',
    },
  ],
  contactUs: {
    header: 'Work With Us',
    body: "Time for a new website? Fill out the form below and tell us what you're looking for.  Our team will reach out to schedule a free consultation and discuss what comes next.",
  },
};

export default data;
