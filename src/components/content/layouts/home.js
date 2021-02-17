import "./layouts.css";
import lachlan_peacock_head from './lachlan_peacock_head.jpeg';

function Home(props) {

  return (
    <div className="Home">
        <div className="Text">
            <h2>Hi, I'm Lachie</h2>
            <h3>Software Developer based in Melbourne, Australia</h3>
        </div>

        <div className="Photo">
            <img src={lachlan_peacock_head} alt="A photo of me, Lachie" class="PhotoImg"/>
        </div>
    </div>
    
  );
}

export default Home;