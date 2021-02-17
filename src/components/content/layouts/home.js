import "./layouts.css";

function Home(props) {

  return (
    <div className="Home">
      <h2>{props.message}</h2>
    </div>
  );
}

export default Home;