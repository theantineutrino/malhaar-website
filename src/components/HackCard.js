export default function HackCard(props) {
  return (
    <div className="bg-white border-4 m-1 md:border-8 border-red-700 w-2/3 md:w-1/3 md:m-3 items-center flex flex-col h-40 md:h-72 justify-evenly">
      <h1 className="text-4xl md:text-8xl font-bold text-green-800">
        {props.title}
      </h1>
      <span className="h-1 bg-red-700 w-full"></span>
      <p className="w-5/6 font-open font-bold text-sm text-center md:text-4xl text-red-700">
        {props.sub}
      </p>
      <span className="h-1 bg-red-700 w-full"></span>
    </div>
  );
}
