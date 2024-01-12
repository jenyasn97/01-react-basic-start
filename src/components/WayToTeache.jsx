function WayToTeache(props) {
  //можно заменить на ({title, description})
  return (
    <li>
      <p>
        <strong>{props.title}</strong> {props.description}
      </p>
    </li>
  );
}
export default WayToTeache;

