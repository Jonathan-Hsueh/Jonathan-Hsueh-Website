import './Card.css';

function Card({ content, image1, image2 = null, isDark, link }) {
  return (
    <div className={`card ${image2 ? 'card-large' : 'card-small'}`}>
      {/* Image 1 */}
      <div className={`cardImageContainer ${isDark ? 'darkImage' : 'lightImage'}`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image1} alt="First" className="cardImage" />
        </a>
      </div>

      {/* Conditionally render Image 2 */}
      {image2 && (
        <div className={`cardImageContainer ${isDark ? 'darkImage' : 'lightImage'}`}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image2} alt="Second" className="cardImage" />
          </a>
        </div>
      )}

      {/* Text Content */}
      <span className="content">{content}</span>
    </div>
  );
}

export default Card;
