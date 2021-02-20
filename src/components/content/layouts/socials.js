import "./layouts.css";
import github from "./social-icons/github.svg"
import salesforce from "./social-icons/salesforce.svg"
import linkedin from "./social-icons/linkedin.svg"
import spotify from "./social-icons/spotify.svg"

function Socials(props) {

  return (
    <div className="Socials">
      <ul className="SocialList">
        <SocialItem name="l-peacock on GitHub" url="https://github.com/l-peacock" img={github} />
        <SocialItem name= "Lachlan Peacock on Trailblazer" url="https://trailblazer.me/id/lachlan-peacock" img={salesforce} />
        <SocialItem name="Lachlan Peacock on LinkedIn" url="https://www.linkedin.com/in/lachlan-peacock/" img={linkedin} />
        <SocialItem name="lachie_peacock on Spotify" url="https://open.spotify.com/user/lachie_peacock" img={spotify} />
      </ul>
    </div>
  );
}

function SocialItem(props) {

    return (
      <div className="SocialItem">
        <img src={props.img} className="SocialImage" alt="Social Media Platform Logo"/>
        <a href={props.url} target="blank" className="SocialLink">{props.name}</a>
      </div>
    );
  }
  

export default Socials;