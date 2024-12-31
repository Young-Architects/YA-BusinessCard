import "./Flipcard.css";
import { useState } from "react";
function Flipcard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div
        className={`flip-card ${isFlipped ? "" : "flipped"}`}
        onClick={handleFlip}
      >
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front">
            <div className="circle-content"></div>
            <div className="phone-section">
              <div className="phone-label">Phone No:</div>
              <div className="phone-numbers">
                <div>+91 9883952010</div>
                <div>+91 9804569051</div>
              </div>
            </div>
            <div className="email-section">
              <div className="email-label">Email Id:</div>
              <div className="email-address">yafoundations@gmail.com</div>
            </div>
            <div className="qr-code"></div>
            <div className="address">VIRTUAL, INDIA</div>
          </div>
          {/* Back Side */}
          <div className="flip-card-back"></div>
        </div>
      </div>
    </>
  );
}
export default Flipcard;
