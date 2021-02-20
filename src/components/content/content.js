import "./content.css";
import Home from "./layouts/home.js";
import AboutMe from "./layouts/about-me.js";
import Socials from "./layouts/socials";
import Portfolio from "./layouts/portfolio";
import GetInTouch from "./layouts/get-in-touch";

function Content(props) {
  
  let key = props.page.toLowerCase();
  console.log(key)

  return (
    <div className="Content">
      {content[key]}
    </div>
  );
}

/**
 * Content is currently a placeholder. This switching mechanism can be used to pass a unique react component for each page type.
 */
const content = {
  /*home: `This is the content for the HOME page.
  This is just some basic text. Will experiment with other layouts later.`,*/
  home: <Home />,
  'about me': <AboutMe />,
  socials: <Socials />,
  portfolio: <Portfolio />,
  'get in touch': <GetInTouch />
}

export default Content;
