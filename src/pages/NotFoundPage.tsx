import "../styles/NotFound.scss"
import notFoundImage from "../images/something-lost.webp"




import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <img className="notFoundImage" src={notFoundImage} alt="Shimite's photo" />
      <h1 className="text-light">404 - Page Not Found</h1>
      <p className="text-light">Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <span className="back-home">Go Back Home</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
