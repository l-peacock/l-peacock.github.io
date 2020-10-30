import "./navigation.css";
import NavItem from "./navItem";

function Navigation() {
  // list items are placeholders. Replace with menu-item components once built
  return (
    <div className="Navigation">
      <div className="Message">
        <h1>Hi!</h1>
        <h2>I'm Lachie</h2>
      </div>

      <ul>
        <NavItem title="Home" />
        <NavItem title="About Me" />
        <NavItem title="Socials" />
        <NavItem title="Portfolio" />
        <NavItem title="Get In Touch" />
      </ul>
    </div>
  );
}

export default Navigation;
