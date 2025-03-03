
import './Homepage.css';
import homePic from '../assets/home_pic.jpg';

function Homepage() {

  console.debug("Homepage");

  const HEADER = (
    <>
      Hi, I am <span>Mehmet Toprak</span>.<br />
      A Full-stack Software Engineer.
    </>
  );
  
  const TEXT = 
    <>
      I recently completed the <strong>Software Engineering Career Track</strong> at Springboard, and am currently looking for a junior level <strong>Back-end</strong>, <strong>Front-end</strong> or <strong>Full-stack Web Developer</strong> position.
    </>;

  return (
    <div className="Homepage">
      <div className="Homepage-content">

        <div className="Homepage-content-left">
          <div className="h-shape"></div>
          <div className="image">
            <img src={homePic} alt="" />
          </div>
        </div>

        <div className="Homepage-content-right">
          <p>{HEADER}</p>
          <p>{TEXT}</p>
        </div>

      </div>
    </div>
  )
}

export default Homepage;