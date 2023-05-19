import "bulma/css/bulma.css";
import ProfileCard from "./Components/ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App() {
  return (
    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column is-3">
            {" "}
            <ProfileCard
              title="cortana"
              handle="handle the cortana data"
              imgSrc={CortanaImage}
              description="cortana is microsoft product"
            />
          </div>
          <div className="column is-3">
            {" "}
            <ProfileCard
              title="alexa"
              handle="handle the alexa data"
              imgSrc={AlexaImage}
              description="alexa is a amazon  product"
            />
          </div>
          <div className="column is-3">
            {" "}
            <ProfileCard
              title="siri"
              handle="handle the siri data"
              imgSrc={SiriImage}
              description="siri is a Apple  product"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
