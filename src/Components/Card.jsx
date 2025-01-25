
import './Card.css';

function Card({ content, image1, image2, image3, image4, isDark , link}) {
  // The same link for all images (replace "#" with your actual link)

  return (
    <div className="card">
      {/* Box1: first two images */}
      <div className={`cardBox1 ${isDark ? 'darkbox1' : 'lightbox1'}`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image1} alt="First" className="image1" />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image2} alt="Second" className="image2" />
        </a>
      </div>

      {/* Box2: second two images */}
      <div className={`cardBox2 ${isDark ? 'darkbox2' : 'lightbox2'}`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image3} alt="Third" className="image3" />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image4} alt="Fourth" className="image4" />
        </a>
      </div>

      {/* Text content */}
      <span className="content">{content}</span>
    </div>
  );
}

export default Card;
