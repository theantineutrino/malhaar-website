export default function Title(props) {
  if (props.vale === "1") {
    return (
      <div className="flex flex-col">
        <img src={props.img} alt="sponsor" className="w-36 md:w-60" />;
        <h1 className="text-yellow-400 flex justify-center md:text-2xl font-medium">
          {props.title}
        </h1>
        {/* <img src={props.img2} alt="sponsor" className="w-24" />;
        <img src={props.img3} alt="sponsor" className="w-10" />; */}
      </div>
    );
  } else if (props.vale === "2") {
    return (
      <div className="flex flex-col">
        {/* <img src={props.img} alt="sponsor" className="w-36" />; */}
        <img src={props.img} alt="sponsor" className="w-24 md:w-56" />;
        <h1 className="text-yellow-400 flex justify-center md:text-2xl font-medium">
          {props.title}
        </h1>
        {/* <img src={props.img} alt="sponsor" className="w-10" />; */}
      </div>
    );
  } else if (props.vale === "3") {
    return (
      <div className="flex flex-col">
        {/* <img src={props.img} alt="sponsor" className="w-36" />; */}
        {/* <img src={props.img} alt="sponsor" className="w-24" />; */}
        <img src={props.img} alt="sponsor" className="w-10 md:w-36" />;
        <h1 className="text-yellow-400 flex justify-center md:text-2xl font-medium">
          {props.title}
        </h1>
      </div>
    );
  }
}
