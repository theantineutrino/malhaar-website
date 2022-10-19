export default function HackCard(props) {
  return (
    <div className="bg-white border-8 border-red-400 w-1/3 m-3 items-center flex flex-col h-72 justify-evenly">
      <h1 className="text-8xl font-bold text-green-800">{props.title}</h1>
      <p className="text-lg text-red-600">{props.sub}</p>
    </div>
  );
}
