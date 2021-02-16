import "./content.css";

function Content(props) {
  //console.log(props)
  return (
    <div className="Content">
      <p>Current page is: {props.page}</p>
    </div>
  );
}

export default Content;
