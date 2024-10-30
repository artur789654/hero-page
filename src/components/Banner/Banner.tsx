import "./Banner.css";
import bannder from "../../assets/images/banner.png";
import { useState } from "react";
const Banner: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(true);
  };
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-wrap flex">
          <div className="banner-text">
            <h1 className="banner-title">The Design Thinking superpowers</h1>
            <p className="banner-par">
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div className="banner-buttons flex">
              <button
                onClick={handleShowInfo}
                className="flex btn btn-default btn-banner-left">
                Click me
              </button>
            </div>
          </div>
          <div className="banner-image">
            <img src={bannder} alt="The Design Thinking superpowers - logo" />
            {showInfo && (
              <>
                <p className="extra-info info-1">We need more</p>
                <p className="extra-info info-2">I know how do it better</p>
                <p className="extra-info info-3">Of course you knonw. Just do it.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
