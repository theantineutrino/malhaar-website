export default function HackCard(props) {
  return (
    <div className="bg-white border-4 m-1 md:border-8 border-red-400 w-1/3 md:m-3 items-center flex flex-col md:h-72 justify-evenly">
      <h1 className="text-4xl md:text-8xl font-bold text-green-800">
        {props.title}
      </h1>
      <p className="text-xs text-center p-2 md:text-lg text-red-600">
        {props.sub}
      </p>
    </div>
  );
}
