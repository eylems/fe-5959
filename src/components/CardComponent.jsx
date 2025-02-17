
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types"; 


const CardComponent = ({ icon, title, content }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-5">
    <Card className="bg-light border-0 h-100">
      <Card.Body className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
        <div 
          className="d-inline-block bg-primary feature text-white rounded-3 p-2 mb-3 bg-gradient"
          style={{marginTop: "-20px", fontSize: "2rem"}}
        >
          {icon}
        </div>
        <h2>{title}</h2>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);
};

CardComponent.propTypes = {
  icon: PropTypes.element.isRequired,  // `icon` bir React elemanı olmalı
  title: PropTypes.string.isRequired,  // `title` zorunlu bir string olmalı
  content: PropTypes.string.isRequired // `content` zorunlu bir string olmalı
};
export default CardComponent;