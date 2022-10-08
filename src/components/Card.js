import "../App.css";
export default function Card(props) {
  return (
    <div className="card--container">
      <div className="card--title">{props.title}</div>
      <div className="card--content">{props.content}</div>
    </div>
  );
}
