
import { faAddressCard, faCloudArrowDown, faFolder,  faCode, faCircleCheck, } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardComponent from './components/CardComponent';
import HeroSection from './components/HeroSection';
import NavbarComponents from './components/NavbarComponents';
import { Container } from 'react-bootstrap';

const cardData = [
  {
    id:1,
    icon: <FontAwesomeIcon icon={faFolder} />,
    title: "Fresh new layout",
    content: "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
      id:2,
      icon: <FontAwesomeIcon icon={faCloudArrowDown} />,
      title: "Free to download",
      content: "As always, Start Bootstrap has a powerful collectin of free templates.",
      },
      {
        id:3,
        icon: <FontAwesomeIcon icon={faAddressCard} />,
        title: "Jumbotron hero header",
        content: "The heroic part of this template is the jumbotron hero header!",
        },
        {
          id:4,
          icon: <FontAwesomeIcon icon={faCircleCheck} />,
          title: "Feature boxes",
          content: "We've created some custom feature boxes using Bootstrap icons!",
          },
          {
            id:5,
            icon: <FontAwesomeIcon icon={faCode} />,
            title: "Simple clean code",
            content: "We keep our dependencies up to date and squash bugs as they come!",
            },
            {
              id:6,
              icon: <FontAwesomeIcon icon={faCircleCheck} />,
              title: "A name you trust",
              content: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
              },
]

function App() {
  return (
    <>
    <NavbarComponents />
    <HeroSection />
    <Container className='px-lg-5'>
    <div className='row gx-lg-5'>
    {cardData.map((card) => (
      <CardComponent
      key={card.id}
        icon={card.icon}
        title={card.title}
        content={card.content}
      />
    ))}
    </div>
    </Container>
    </>
  );
}

export default App;
