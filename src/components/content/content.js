import "./content.css";

function Content(props) {
  
  let key = props.page.toLowerCase();
  console.log(key)

  return (
    <div className="Content">
      <p>{content[key]}</p>
    </div>
  );
}

/**
 * Content is currently a placeholder. This switching mechanism can be used to pass a unique react component for each page type.
 */
const content = {
  home: `This is the content for the HOME page.
  This is just some basic text. Will experiment with other layouts later.`,
  'about me': `This is the content for the ABOUT ME page.
  This is just some basic text. Will experiment with other layouts later.`,
  socials: `This is the content for the SOCIALS page.
  This is just some basic text. Will experiment with other layouts later.`,
  portfolio: `This is the content for the PORTFOLIO page.
  This is just some basic text. Will experiment with other layouts later.`,
  'get in touch': `This is the content for the GET IN TOUCH page.
  This is just some basic text. Will experiment with other layouts later.`
}

export default Content;
