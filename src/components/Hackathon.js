import logo from "../images/logomal.png";
import jondoe from "../images/jondoe.png";
import ins from "../images/insta.png";
import csilogo from "../images/csilogo.png";
import Footer from "../ux/Footer";
import { useRef } from "react";
import Glitch from "./Glitch";
import college from "../images/college.png";
import {
  Cvent,
  Hack2Skill,
  Samsung,
  JohnJacobs,
  Team,
  Pizza,
  Time,
  Chair,
  Visor,
  Prizes,
  Person,
  Podium,
} from "../images/partners";
import mark from "../images/mark.png";
import { Link } from "react-router-dom";

// import hackathonutil from "./hackathon-util";

// import React from "react";
export default function Hackathon({ overlayOpen, setOverlayOpen }) {
  // const [formData, setFormData] = React.useState({
  //   Name: "",
  //   EmailAddress: "",
  //   TeamSize: "",
  // });
  // const getData = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://sheet.best/api/sheets/548bd2d0-d36d-48c9-a8d9-e6181acaf871"
  //     );
  //     const data = formData;
  //     setFormData(data);
  //   } catch (error) {}
  // };
  // React.useEffect(() => {
  //   getData();
  // }, []);
  // function handleChange(event) {
  //   const { name, value, type, checked } = event.target;
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // }

  const data = [
    {
      id: 1,
      image: Team,
      subTitle: "You can join as a team of 4",
    },
    {
      id: 2,
      image: Pizza,
      subTitle: "Free food and Snacks",
    },
    {
      id: 3,
      image: Time,
      subTitle: "24 hours Full of coding",
    },
    {
      id: 4,
      image: Chair,
      subTitle: "Free registrations but limited seats",
    },
    {
      id: 5,
      image: Visor,
      subTitle: "Latest Technologies to test",
    },
    {
      id: 6,
      image: Prizes,
      subTitle: "Exciting Prizes",
    },
    {
      id: 7,
      image: Person,
      subTitle: "Job Opportunities",
    },
    {
      id: 8,
      image: Podium,
      subTitle: "Industry Professional as judges",
    },
  ];

  const mentors = [
    {
      id: 1,
      name: "John Doe",
      image: jondoe,
      position: "CEO, Mustacho Inc.",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue justo, porttitor vitae felis nec, molestie sodale",
    },
    {
      id: 2,
      name: "John Doe",
      image: jondoe,
      position: "CEO, Mustacho Inc.",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue justo, porttitor vitae felis nec, molestie sodale",
    },
    {
      id: 3,
      name: "John Doe",
      image: jondoe,
      position: "CEO, Mustacho Inc.",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue justo, porttitor vitae felis nec, molestie sodale",
    },
    {
      id: 4,
      name: "John Doe",
      image: jondoe,
      position: "CEO, Mustacho Inc.",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue justo, porttitor vitae felis nec, molestie sodale",
    },
  ];

  let hackPath = useRef();

  function animateOnScroll(value) {
    let pathLength = hackPath.current.getTotalLength();
    hackPath.current.style.strokeDasharray = pathLength + " " + pathLength;
    hackPath.current.style.strokeDashoffset = pathLength;

    let draw = pathLength * value;
    hackPath.current.style.strokeDashoffset = pathLength - draw;
  }

  const handleScroll = (e) => {
    const value =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    animateOnScroll(value);
    if (value >= 0.99) {
      hackPath.current.style.strokeDasharray = "none";
    } else {
      hackPath.current.style.strokeDasharray =
        hackPath.current.getTotalLength() +
        " " +
        hackPath.current.getTotalLength();
    }
  };

  window.addEventListener("scroll", handleScroll);

  // useEffect(() => {
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <section className="bg-hack relative">
        {/* Navbar */}
        <div
          className="border-b-2 py-2 px-4"
          style={{ borderColor: "#2c343f" }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img src={logo} alt="malhaar" className="w-16 md:w-24" />
              </Link>

              <img src={csilogo} alt="csiLogo" className="w-16 md:w-24" />
            </div>

            <div className="flex flex-col items-center justify-center gap-3">
              <div className="z-20 relative w-10 h-10 text-white focus:outline-none ">
                <button onClick={() => setOverlayOpen(!overlayOpen)}>
                  <div className="absolute w-8 transform -translate-x-1/2 -translate-y-1/2 left-1 top-1/2">
                    <span
                      className={`absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
                        overlayOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                      }`}
                    ></span>
                    <span
                      className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                        overlayOpen
                          ? "w-0 opacity-50"
                          : "w-8 delay-200 opacity-100"
                      }`}
                    ></span>
                    <span
                      className={`absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
                        overlayOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                      }`}
                    ></span>
                  </div>
                </button>
              </div>
              <div className="">
                <a
                  target="_blank"
                  href="https://www.instagram.com/malhaarbpit/?hl=en"
                  rel="noreferrer"
                >
                  <img src={ins} alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto h-screen md:h-[2000px] lg:h-[3500px] xl:h-[3150px] relative">
          <div className="h-full lg:mt-6 xl:mt-8">
            <h1 className="font-bold font-open text-white md:text-6xl lg:text-4xl xl:text-7xl tracking-tighter">
              <Glitch />
            </h1>
            <span className="text-red-600 font-open font-medium text-xs lg:text-sm xl:text-xl align-middle">
              learn | teach | explore
            </span>
            <p className="font-open lg:text-xs xl:text-base text-gray-600 w-2/3 lg:w-1/3 lg:py-3 xl:py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              augue justo, porttitor vitae felis nec, molestie sodales mi.
              Suspendisse eget aliquam ex, mollis lacinia nunc.JAKFNMDSKNLorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis augue
              justo
            </p>
            <button className="z-40 font-open text-white font-semibold bg-red-600 hover:bg-red-800 p-1 lg:px-4 xl:px-6 lg:py-1 xl:py-2 rounded-md">
              Register
            </button>

            {/* Details Section */}
            <div className="md:mt-5 lg:mt-2 md:ml-20 lg:ml-20 xl:mt-3 flex justify-around items-center">
              <span>
                <img
                  src={college}
                  alt=""
                  className="md:h-[120px] md:w-[120px] lg:h-[148px] lg:w-[148px] xl:h-[235px] xl:w-[235px] "
                />
              </span>
              <span className="">
                <h4 className="text-red-600 font-medium font-open">When?</h4>
                <h2 className="text-white font-semibold font-open md:w-28 lg:w-28 xl:w-20">
                  23rd - 24th November 2022
                </h2>
              </span>
              <span>
                <h4 className="text-red-600 font-medium font-open">Where?</h4>
                <h2 className="text-white font-semibold font-open md:w-52 lg:w-48 xl:w-40">
                  Bhagwan Parshuram Institute of Technology, Delhi
                </h2>
              </span>
            </div>

            {/* Sponsor Section */}
            <div
              className="md:mt-10 lg:mt-2 xl:mt-6 w-full grid grid-cols-4 gap-10 lg:px-10 lg:py-11 xl:p-20"
              style={{ background: "#21262f" }}
            >
              <div
                className="border-l-4 border-r-4 flex items-center justify-center"
                style={{ borderColor: "#2c343f" }}
              >
                <img src={Cvent} alt="cvent-logo" className="lg:w-32" />
              </div>
              <div
                className="border-r-4 flex items-center justify-center"
                style={{ borderColor: "#2c343f" }}
              >
                <img className="lg:w-32" src={Hack2Skill} alt="cvent-logo" />
              </div>
              <div
                className="border-r-4 flex items-center justify-center"
                style={{ borderColor: "#2c343f" }}
              >
                <img className="lg:w-32" src={JohnJacobs} alt="cvent-logo" />
              </div>
              <div
                className="border-r-4 flex items-center justify-center"
                style={{ borderColor: "#2c343f" }}
              >
                <img className="lg:w-32" src={Samsung} alt="cvent-logo" />
              </div>
              {/* <span className="w-full h-1 bg-white"></span> */}
              <div
                className="border-l-4 border-r-4 flex items-center justify-center"
                style={{ borderColor: "#2c343f" }}
              >
                <img className="lg:w-32" src={Samsung} alt="cvent-logo" />
              </div>
              <div
                className="border-r-4 flex items-center justify-center"
                style={{ borderColor: "#2c343f" }}
              >
                <img className="lg:w-32" src={JohnJacobs} alt="cvent-logo" />
              </div>
              <div
                className="border-r-4 flex items-center justify-center"
                style={{ borderColor: "#2c343f" }}
              >
                <img className="lg:w-32" src={Cvent} alt="cvent-logo" />
              </div>
              <div
                className="border-r-4 flex items-center justify-center"
                style={{ borderColor: "#2c343f" }}
              >
                <img className="lg:w-32" src={Hack2Skill} alt="cvent-logo" />
              </div>
            </div>

            {/* Prize Section */}
            <h4 className="text-white text-center font-open lg:ml-12 md:mt-6 lg:mt-3 xl:mt-20 font-medium lg:text-lg xl:text-xl">
              Details
            </h4>

            <div className="flex justify-between font-open tracking-tighter lg:mt-0 xl:mt-8">
              <div className="flex-1">
                <h1 className="text-white font-bold lg:text-5xl xl:text-8xl">
                  1 Lakh
                </h1>
                <h3 className="text-red-600 font-medium lg:text-xl xl:text-3xl">
                  Worth of Cash Prizes
                </h3>
              </div>
              <div className="font-open  lg:w-96 xl:w-1/2">
                <h2 className="text-white font-bold lg:text-sm xl:text-base">
                  Tell me, I will forget. Show me, I might remember, Involve me
                  and I will understand.
                </h2>
                <p className="text-red-600 font-medium">Sun Tzu</p>
                <p className="text-base text-white opacity-70 lg:text-sm xl:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  augue justo, porttitor vitae felis nec, molestie sodales mi.
                  Suspendisse eget aliquam ex, mollis lacinia
                  nunc.JAKFNMDSKNLorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis augue justo, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>

            {/* More Gyaan Section */}
            <div
              className="w-full flex justify-between font-open lg:mt-14 xl:mt-40 px-6 lg:py-8 xl:py-12 rounded-xl"
              style={{ background: "#21262f" }}
            >
              <div className="w-1/2">
                <h2 className="text-white font-bold lg:text-base xl:text-xl">
                  If you cannot explain it simply, you don’t understand it well
                  enough.
                </h2>
                <h4 className="text-red-600 font-medium lg:text-sm xl:text-lg">
                  Einstein
                </h4>
                <p className="text-gray-400 lg:my-1 xl:my-5 lg:text-xs xl:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  augue justo, porttitor vitae felis nec, molestie sodales mi.
                  Suspendisse eget aliquam ex, mollis lacinia
                  nunc.JAKFNMDSKNLorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis augue justo, Lorem ipsum <br /> <br />{" "}
                  dolor sit amet, consectetur adipiscing elit. Duis augue justo,
                  porttitor vitae felis nec, molestie sodales mi. Suspendisse
                  eget aliquam ex, mollis lacinia nunc.JAKFNMDSKNLorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Duis augue justo,{" "}
                </p>
              </div>
              <div className="w-1/2 bg-yellsow-500">
                <div className="flex items-center justify-center lg:gap-4 xl:gap-6">
                  <img
                    src={mark}
                    alt="mark-icon"
                    className="lg:h-16 lg:w-16 xl:h-24 xl:w-24"
                  />
                  <h2 className="text-white font-bold lg:text-lg xl:text-xl">
                    The Hackathon Goal
                  </h2>
                </div>
                <div className="lg:w-80 lg:mr-5 xl:w-3/4 mx-auto flex justify-between bg-blue-400s lg:mt-4 xl:mt-5">
                  <div>
                    <span className="relative">
                      <p className="font-bold text-gray-500 lg:text-5xl xl:text-6xl">
                        01
                      </p>
                      <p className="text-white font-bold absolute lg:left-6 lg:-bottom-1 xl:left-10 lg:text-xl xl:text-2xl">
                        Idea
                      </p>
                    </span>
                    <p className="text-gray-400 lg:text-xs xl:text-sm font-open">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis augue justo, porttitor vitae felis nec, molestie
                      sodales augue justo, por.
                    </p>
                  </div>
                  <div>
                    <span className="relative">
                      <p className="font-bold text-gray-500 lg:text-5xl xl:text-6xl">
                        02
                      </p>
                      <p className="text-white font-bold absolute lg:left-6 lg:-bottom-1 xl:left-10 lg:text-xl xl:text-2xl">
                        Project
                      </p>
                    </span>
                    <p className="text-gray-400 lg:text-xs xl:text-sm font-open">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis augue justo, porttitor vitae felis nec, molestie
                      sodales augue justo, por.
                    </p>
                  </div>
                </div>
                <p className="text-red-600 lg:w-10/12 lg:mr-5 text-right xl:w-3/4 mx-auto lg:text-xs xl:text-base lg:mt-2 xl:mt-4 font-medium">
                  Note: The Submissions will be judged by our esteemed judges
                </p>
              </div>
            </div>

            {/* icon grid */}
            <div className="flex flex-wrap gap-5 xl:gap-20 bg-yellow-3s00 lg:mt-16 xl:mt-28 w-3/4 mx-auto px-14">
              {data.map((item) => (
                <span
                  key={item.id}
                  className="flex flex-col items-center w-32 text-center gap-2"
                >
                  <img
                    src={item.image}
                    alt="team-icon"
                    className="h-14 w-14 xl:h-20 xl:w-20"
                  />
                  <p className="text-white font-semibold font-open text-xs xl:text-sm">
                    {item.subTitle}
                  </p>
                </span>
              ))}
            </div>

            {/* Mentors section */}
            <h4 className="text-white text-center font-open lg:mt-24 xl:mt-36 xl:mb-6 font-bold lg:text-base xl:text-xl">
              Mentors and Judges
            </h4>

            <div className="grid grid-cols-2 gap-4 lg:w-4/6 xl:w-3/4 lg:ml-72 xl:ml-auto">
              {mentors.map((item) => (
                <div key={item.id} className="flex justify-center w-full gap-3">
                  <img
                    src={item.image}
                    alt=""
                    className="lg:h-32 lg:w-36 xl:h-60 xl:w-56"
                  />
                  <div className="font-open">
                    <h2 className="text-white font-bold lg:text-base xl:text-xl">
                      {item.name}
                    </h2>
                    <p className="font-semibold text-xs xl:text-sm text-red-600">
                      {item.position}
                    </p>
                    <p className="text-gray-400 text-xs">{item.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hackerama Sign */}
            <div className="bg-red-600 text-white font-open font-semibold px-4 py-2 rounded-md lg:mt-12 xl:-mt-1 lg:ml-[480px] xl:ml-[600px] w-max">
              Hackerama Awaits You!
            </div>

            {/* Gyaan */}
            <div
              className="w-full xl:hidden flex flex-col gap-6 p-10 rounded-lg mt-10 items-center justify-center"
              style={{ background: "#21262f" }}
            >
              <h1 className="font-open font-bold text-white text-xl">
                "You miss 100% of the shots you don't take" - Wayne Gretzky
              </h1>
              <h3 className="font-open font-semibold text-red-600 text-base">
                Michael Scott
              </h3>
            </div>
          </div>

          <svg
            width="1629"
            height="4443"
            className="md:hidden lg:block bg-ysellow-500 w-5/6 lg:w-3/4 xl:w-5/6 h-full absolute top-0 md:-top-[230px] lg:-top-[906px] xl:-top-[210px] right-0 mt-20"
            viewBox="0 0 1629 4443"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1628.07 461.053L1477.93 440.729C1459.05 437.058 1453.45 437.014 1453.02 437.451L1411.71 438.762C1390.21 438.762 1386.14 432.206 1386.8 428.928C1386.8 419.487 1390.73 412.756 1392.7 410.571L1399.26 402.048C1402.4 397.852 1404.94 399.425 1405.81 400.736L1429.41 415.16C1434.66 418.832 1432.47 424.557 1430.72 426.961C1424.43 437.976 1449.52 442.915 1462.85 444.007L1526.45 451.875C1541.66 453.973 1546.33 449.689 1546.77 447.285C1550.97 438.893 1553.76 425.868 1554.64 420.405C1560.41 381.592 1560.97 334.738 1560.54 316.162C1559.49 285.741 1533.44 269.831 1520.54 265.679C1509.01 262.008 1500.88 263.275 1498.25 264.368C1494.06 266.99 1501.75 288.626 1506.12 299.116C1509.79 308.032 1498.04 308.076 1491.7 306.983C1483.83 305.934 1487.11 310.043 1489.73 312.228C1500.74 324.291 1503.06 329.056 1502.84 329.93C1505.47 336.748 1483.83 376.916 1472.68 396.147C1470.06 399.819 1482.96 304.142 1489.73 255.845C1491.3 246.404 1506.56 261.09 1513.99 269.613C1516.09 272.235 1515.3 285.566 1514.64 291.904C1513.07 301.869 1518.36 333.645 1521.2 348.287C1523.3 353.532 1522.07 382.379 1521.2 396.147C1526.97 404.539 1537.15 406.2 1541.52 405.981C1540.48 396.54 1522.73 395.929 1513.99 396.803L1427.45 409.259V390.902C1427.45 375.167 1409.53 343.698 1400.57 329.93C1394.27 321.013 1399.26 306.546 1402.53 300.427L1411.71 281.414C1413.29 275.644 1406.25 283.381 1402.53 287.97C1393.09 301.082 1400.78 309.606 1405.81 312.228C1425.74 322.193 1432.04 329.93 1432.69 332.552C1434.27 340.944 1428.98 345.665 1426.14 346.976C1420.89 349.598 1426.57 368.611 1430.07 377.79L1438.33 399.396M1438.59 400.081L1438.33 399.396M1438.33 399.396C1442.74 410.434 1446.46 398.333 1447.77 390.902C1450.92 362.579 1435.53 313.102 1427.45 291.904C1424.3 283.512 1429.63 284.911 1432.69 286.659L1451.05 300.427C1460.49 307.77 1469.84 302.175 1473.34 298.46C1480.68 291.117 1481.21 252.567 1480.55 234.209C1480.03 226.342 1473.78 245.792 1470.72 256.5C1463.37 280.103 1456.29 285.566 1453.67 285.348C1440.03 285.872 1421.76 272.454 1414.33 265.679C1388.63 237.356 1396.2 200.117 1403.19 185.038C1406.86 176.646 1412.15 183.727 1414.33 188.316C1425.87 207.722 1494.76 244.481 1527.76 260.434C1536.15 263.581 1533.88 258.686 1531.69 255.845C1509.14 225.424 1494.32 189.846 1489.73 175.859C1485.53 162.222 1465.25 150.946 1455.64 147.012C1439.9 141.243 1422.42 144.608 1415.65 147.012C1400.44 152.782 1397.07 168.648 1397.29 175.859C1388.37 175.859 1385.27 186.349 1384.83 191.594C1382.73 225.686 1401.88 250.818 1411.71 259.123C1414.86 261.221 1408.65 265.242 1405.16 266.99C1400.44 270.137 1398.82 270.05 1398.6 269.613C1395.45 265.417 1378.49 308.076 1370.41 329.93C1367.79 199.855 1339.59 138.926 1325.83 124.721C1311.14 106.888 1299.6 133.026 1295.67 148.323C1292.52 161.96 1310.97 213.885 1320.58 238.143C1324.78 245.486 1331.95 242.514 1335 240.11C1338.68 236.963 1336.53 237.487 1335 238.143C1319.27 245.486 1330.63 302.394 1338.28 329.93L1287.14 335.175C1287.14 240.241 1280.59 212.574 1277.31 210.607M1277.31 210.607L1291.08 137.833L1282.56 127.999L1295.67 112.264L1277.31 93.2514C1313.5 104.79 1316.87 116.854 1314.02 121.443C1309.83 130.359 1301.35 134.774 1297.63 135.867C1294.49 135.867 1282.77 185.694 1277.31 210.607ZM1277.31 210.607C1266.82 192.774 1266.38 123.628 1267.48 91.2846C1266.43 150.028 1260.05 162.091 1256.99 160.78L1242.56 153.568C1235.22 149.372 1233.82 160.999 1234.04 167.336C1230.37 168.91 1229.89 167.118 1230.11 166.025C1230.11 159.731 1221.58 159.469 1221.58 166.681L1228.14 259.123C1228.66 268.564 1237.1 273.984 1241.25 275.513C1246.5 277.087 1249.12 269.613 1249.77 265.679C1252.4 254.14 1238.19 197.932 1230.76 171.27C1230.24 168.648 1223.99 168.866 1220.93 169.303C1216.73 169.828 1216.99 163.84 1217.65 160.78C1218.7 156.06 1211.09 161.436 1207.16 164.714C1201.91 168.385 1197.54 139.582 1196.01 124.721C1194.96 113.182 1213.06 134.774 1222.24 147.012C1225.39 150.159 1228.36 148.323 1229.45 147.012C1257.25 123.41 1265.07 108.768 1265.51 104.397C1271.28 87.6131 1269.22 62.8744 1267.48 52.6031C1262.76 41.5887 1237.54 35.7755 1225.52 34.2458C1211.88 32.6723 1205.41 27.9081 1203.88 25.7227C1206.5 36.7371 1202.79 41.6761 1200.6 42.7688C1184.87 50.6362 1183.12 62.2188 1184.21 67.0267C1174.77 49.7184 1175.91 33.5901 1177.66 27.6896C1180.8 10.3812 1188.58 6.92831 1192.08 7.36539C1198.9 8.93886 1201.91 11.5176 1202.57 12.6103C1203.62 14.7083 1199.29 14.5772 1199.95 11.9547C1203.09 0.940314 1222.24 1.24627 1231.42 2.77605C1250.82 6.97199 1262.23 22.4446 1265.51 29.6564C1271.47 42.7688 1268.35 60.9075 1267.48 72.2716C1264.85 92.7269 1255.89 112.264 1251.74 119.476C1240.73 134.162 1222.68 133.463 1215.03 131.277C1200.05 123.934 1189.99 97.6222 1186.83 85.384C1186.63 82.8884 1186.26 80.4719 1185.79 78.1721M1185.79 78.1721C1183.88 68.8719 1180.24 61.4822 1178.31 58.5036C1175.69 54.8321 1175.03 60.9075 1175.03 64.4042C1175.03 75.943 1179.4 81.8873 1181.59 83.4171C1186.07 86.0396 1186.25 81.0132 1185.79 78.1721ZM1185.79 78.1721C1184.53 85.5151 1196.01 175.204 1214.37 209.296L1171.1 140.456L1184.21 132.588L1169.79 127.999L1184.21 93.2514L1159.95 112.264C1152.09 116.985 1157.55 136.959 1161.27 146.356C1165.46 157.895 1197.11 193.998 1212.4 210.607C1216.6 215.852 1222.46 244.262 1224.86 257.812C1226.43 266.728 1214.59 263.275 1208.47 260.434C1200.6 256.763 1196.89 260.216 1196.01 262.401C1193.92 266.072 1204.76 266.99 1210.44 266.99C1216.21 266.99 1212.84 275.295 1210.44 279.447L1179.62 320.751C1173.85 327.045 1175.03 319.44 1176.34 314.85C1186.31 288.626 1179.62 233.554 1167.17 207.985C1164.54 202.74 1162.58 214.541 1161.92 221.097C1161.92 236.832 1148.81 270.268 1155.37 288.626C1157.46 293.346 1164.11 247.322 1167.17 223.719C1172.94 200.642 1168.7 189.627 1165.85 187.005C1153.79 171.27 1149.03 136.741 1148.15 121.443C1148.15 112.002 1142.91 117.072 1140.29 120.787C1124.55 144.914 1117.12 212.137 1115.37 242.732C1114.32 256.894 1105.76 262.619 1101.6 263.712C1079.58 272.104 1065.33 267.209 1060.96 263.712C1050.47 256.894 1047.41 243.825 1047.19 238.143C1047.19 229.751 1052.43 238.143 1055.06 243.388C1061.87 255.451 1076.25 261.09 1082.59 262.401C1093.08 264.499 1099.64 260.216 1101.6 257.812C1108.42 249.42 1110.13 235.084 1110.13 228.964C1111.51 205.899 1110.97 186.552 1110.37 177.171M1110.37 177.171C1110.29 175.886 1110.21 174.788 1110.13 173.892C1103.31 161.305 1089.8 155.098 1083.9 153.568C1069.22 149.897 1032.76 171.27 1027.52 206.018V219.786C1027.52 224.506 1031.45 227.872 1033.42 228.964C1039.71 231.587 1036.48 226.56 1034.08 223.719C1030.93 218.999 1031.45 213.448 1032.11 211.263C1033.16 207.067 1040.41 212.574 1043.91 215.852C1048.63 189.103 1058.11 183.727 1062.27 184.382C1080.1 185.956 1094.39 170.614 1088.49 164.058L1110.37 177.171ZM1110.37 177.171C1110.18 159.338 1098.98 143.078 1068.17 144.39C1039.32 144.914 1025.99 160.78 1022.93 168.648C1019.68 174.343 1015.95 178.303 1011.69 179.793M1011.69 179.793C1010.45 180.224 1009.17 180.449 1007.85 180.449C997.885 180.449 990.805 160.124 1013.75 140.456C1022.67 129.966 1034.51 141.767 1039.32 148.979C1028.18 154.88 1012.44 166.681 1014.41 173.237C1014.41 178.482 1012.59 179.793 1011.69 179.793ZM1011.69 179.793C1009.82 191.594 1007.85 226.342 1032.76 238.143C1039.58 241.815 1036.92 249.726 1034.73 253.222C1024.77 266.335 1004.35 267.427 995.394 266.335C1011.13 257.418 1029.05 253.878 1036.04 253.222C1039.71 294.657 1092.43 324.685 1101.6 268.957C1102.65 262.663 1108.16 281.195 1110.78 291.248C1112.88 299.116 1106.85 301.082 1103.57 301.082C1097.8 301.082 1100.73 305.016 1102.92 306.983C1110.26 311.179 1109.91 315.288 1108.82 316.817L1076.04 403.359C1073.41 409.128 1071.01 405.763 1070.13 403.359L1016.37 327.307C1011.78 320.751 1018.12 308.95 1022.93 305.672C1028.7 300.951 1025.33 298.46 1022.93 297.804C1010.34 294.133 1011.78 291.904 1015.06 284.692L1030.14 254.534C1033.81 305.934 1050.47 360.744 1068.82 394.18C1071.45 398.901 1071.45 398.77 1072.76 394.18C1090.07 327.045 1097.02 286.659 1093.74 260.434L1122.58 265.679C1125.73 273.547 1121.27 282.944 1118.65 286.659C1116.03 274.595 1120.18 266.335 1122.58 263.712C1152.48 293.608 1169.79 322.718 1169.79 338.453C1168.74 352.614 1161.05 350.472 1157.33 347.631C1152.61 342.386 1187.27 321.407 1205.19 311.572C1222.5 299.509 1222.24 288.626 1216.99 294.526C1216.99 305.541 1230.98 315.725 1237.97 319.44C1242.17 321.538 1239.94 327.307 1237.97 324.685C1233.25 320.489 1251.3 308.076 1260.92 302.394C1270.36 296.1 1276.22 277.48 1277.97 268.957C1279.01 257.943 1268.79 265.679 1263.54 270.924C1250.43 288.757 1245.4 287.096 1244.53 284.036C1242.96 278.791 1243.87 273.984 1244.53 272.235C1246.1 265.417 1240.81 268.52 1237.97 270.924C1223.29 285.085 1210 302.175 1205.19 308.95C1228.27 326.783 1230.76 331.241 1225.52 337.141C1192.47 380.15 1175.69 394.836 1161.92 394.18C1143.04 393.131 1120.62 350.254 1120.62 311.572C1120.62 303.18 1127.83 303.705 1126.52 311.572C1126.52 350.909 1117.78 383.035 1113.41 394.18C1107.11 407.293 1118.21 421.498 1124.55 426.961C1140.29 439.025 1146.19 437.451 1205.19 432.862L1199.29 444.007L1126.52 457.775L1196.01 472.854L1247.15 341.075L1414.33 332.552L1373.03 449.252L1194.7 474.166L1093.74 451.875C1079.58 447.154 1113.19 444.663 1131.76 444.007C1145.4 444.007 1131.76 436.14 1086.53 423.683C1075.51 420.012 1078.88 417.783 1081.94 417.127C1104.49 415.553 1119.74 425.65 1124.55 430.895C1134.19 439.811 1131.63 446.848 1129.14 449.252C1124.42 454.497 1113.19 446.63 1108.16 442.04C1101.34 437.32 1089.15 442.259 1083.9 445.319C1076.04 448.465 1032.98 441.385 1012.44 437.451C1002.47 435.353 1001.29 439.636 1001.95 442.04C1008.24 447.81 1043.91 449.252 1060.96 449.252C1067.25 436.14 1067.95 421.061 1067.51 415.16C1021.36 418.832 1013.31 410.571 1015.06 405.981C1006.54 329.93 1016.37 270.924 988.182 272.235C964.056 273.284 962.395 346.976 964.58 383.69C964.58 388.411 904.263 396.584 874.105 400.081C891.413 385.395 889.621 363.803 886.562 354.843C884.464 345.402 881.972 344.353 881.972 354.843V405.981C892.462 400.212 904.7 400.518 909.508 401.392C915.802 405.064 919.561 433.954 920.654 447.941C920.654 455.808 931.799 449.252 931.799 437.451C931.799 397.458 920.654 396.803 893.118 301.082C897.838 306.852 899.455 301.301 899.674 297.804C897.576 274.727 910.164 242.295 916.72 228.964C921.965 213.23 928.521 150.29 868.204 137.833C862.959 136.784 861.211 141.767 860.993 144.39C850.503 131.802 836.079 138.271 830.178 143.078C807.101 163.534 796.961 190.939 794.775 202.084C792.153 213.098 764.617 248.633 744.948 275.513C762.781 263.974 789.967 256.719 801.331 254.534C849.191 241.421 874.105 192.25 872.138 166.681C877.383 175.859 891.807 183.071 899.674 188.972C911.737 196.315 913.879 215.196 913.442 223.719C911.868 244.175 895.303 268.083 887.217 277.48C879.35 286.397 861.648 279.884 853.781 275.513C841.193 268.17 840.668 260.216 841.98 257.156C848.274 257.156 872.575 286.44 883.939 301.082C889.184 307.901 886.125 311.354 883.939 312.228L872.138 320.095L881.972 330.585L845.913 413.193C843.815 418.963 842.854 413.849 842.635 410.571C842.635 388.28 853.781 345.009 860.337 304.361C855.748 324.685 845.913 328.618 830.834 328.618C810.379 327.569 801.331 312.009 799.364 304.361C794.119 287.577 797.179 269.831 799.364 263.057C782.581 270.4 770.08 286.659 765.928 293.871C762.781 302.263 773.795 307.42 779.696 308.95C784.941 309.999 782.318 312.446 780.352 313.539C771.96 316.686 769.862 324.029 769.862 327.307C769.862 341.993 803.954 378.445 824.933 417.127L826.245 400.736C826.245 394.18 807.887 356.154 798.053 320.751C790.186 302.394 792.59 272.891 794.775 260.434L746.915 284.036C734.852 291.904 722.001 319.44 721.346 332.552V350.909C751.504 410.571 771.173 483.344 823.622 476.133C867.68 466.167 904.045 449.252 916.72 442.04C932.979 433.648 956.713 431.988 966.547 432.206V426.961C966.023 435.353 967.858 440.729 972.448 440.074C982.413 438.5 989.275 422.372 991.461 414.504C993.034 408.21 992.553 402.266 992.116 400.081H980.971M980.315 400.081H980.971M980.971 400.081C1005.62 402.179 1015.72 399.207 1017.69 397.458C1019.78 391.164 991.898 389.154 977.693 388.935C965.629 387.886 942.071 399.862 931.799 405.981C922.358 411.226 913.879 409.915 910.82 408.604C915.54 401.785 927.21 400.955 932.455 401.392C938.224 406.113 937.044 421.716 935.733 428.928C934.684 433.124 916.502 439.418 907.541 442.04C898.101 444.663 898.363 451.875 899.674 455.153C914.884 454.104 915.19 442.915 913.442 437.451C910.295 415.422 905.137 407.293 902.952 405.981C889.84 405.981 854.436 419.749 828.212 426.961C815.624 431.157 810.729 425.65 809.854 422.372C790.186 378.445 770.816 322.718 746.915 291.904C740.097 285.085 730.962 290.811 727.246 294.526C710.987 320.751 710.856 346.32 718.068 373.856L751.504 484L763 522C769 541.5 763 556 749 556H459.5C437.1 556 427.5 569.5 427.5 589.5V875.5C427.5 900.5 441 904 460 904H654.5C676.1 904 679.5 916 679.5 926.5V1461C679.5 1475.4 673 1480 660 1480H539C523 1480 515.5 1491 515.5 1506.5V1661.5C515.5 1681.9 548 1682 548 1661.5V1642.5C548 1627.3 570.5 1622 579.5 1639C585.9 1652.2 574.5 1657 569 1661.5C539.8 1687.5 529 1703 537.5 1710L569 1739.5C574 1744.5 567 1749 564 1744.5C536.4 1716.9 535.045 1706.5 552 1689C582 1658.6 596 1655.5 606 1644.5C621.2 1626.1 608 1612.5 589.5 1611C525.1 1608.2 440.5 1607.5 384.5 1616.5C369.7 1618.9 377.333 1636.17 383 1644.5C415.4 1683.3 421 1692 423 1701C425.667 1713 413 1729.17 408 1730.5C395.5 1733.83 396 1747.5 409 1740.5C435.8 1718.9 418.833 1695.83 407 1687C396.6 1679 383.667 1672 378.5 1669.5C365.3 1663.1 350 1645 356 1622.5C362 1603.7 383 1602 393 1613.5C414.6 1638.3 425.334 1678.83 428 1696C431.2 1721.2 428.5 1723.5 447.5 1741.5C455.9 1747.9 492 1755.83 509 1759C521.8 1761.4 522 1767 511.5 1770C495.1 1774.4 472.334 1774.5 463 1774C450.6 1773.2 437.5 1764 447.5 1760C460.7 1757.2 463.5 1759.5 467.5 1768.5C475 1793.5 475 1841 466 1857.5C455.6 1875.9 469 1880.83 477 1881C485 1881.4 507.347 1880.98 517.5 1881.5C537 1882.5 549.5 1898.5 520 1898.5H429C408.5 1898.5 387 1924.5 429 1926H548C569.6 1926 574 1948 573.5 1959C572.75 1975.5 578 1985.5 539.5 1985.5H337C294.5 1985.5 294 2040 337 2040H646C663.6 2040 674 2051.5 674 2077V2742.5C674 2767.7 687.5 2778.5 705.5 2780H1292C1319.2 2780 1334 2791.5 1334 2826V3506C1334 3525.2 1330 3532.5 1301 3532.5H48.5C11 3532.5 2 3538 2 3581.5V4405C2 4428.2 17 4441 46 4441H580"
              stroke="#E5193D"
              ref={hackPath}
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </section>

      {/* <section className="bg-temp text-red-50 font-open pb-6">
        <div
          style={{ backgroundImage: "url(" + bg + ")" }}
          className="bg-cover bg-center bg-no-repeat h-screen"
        >
          <div className="py-4 px-6">
            <h1 className="pt-16 text-center md:text-left text-4xl md:text-7xl uppercase font-semibold p-7 tracking-tighter">
              Hackathon
            </h1>
            <p className="max-w-lg p-7 text-lg text-center md:text-left">
              Malhaar'22 in collaboration with CSI brings to you a 24hr
              Hackathon exclusively sponsored by Cvent <br /> Date: November 23,
              2022 <br /> Time: 10:00 a.m. onwards
              <br /> No. Of team members: 4 <br /> Participation fee: FREE
              <br />
            </p>
            <button className="w-full md:w-max text-lg md:m-7 py-2 px-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center w-full md:flex-row">
          <HackCard title="4" sub="Number of members in a team" />
          <HackCard title="24hrs" sub="Duration of Hackathon" />
          <HackCard title="50+" sub="Number of teams participating" />
        </div>
        <section className="mt-10">
          <div className="flex px-10 flex-col md:flex-row items-center gap-4 justify-center">
            <h1 className="w-full md:w-1/3 text-2xl md:text-7xl font-semibold">
              About Hackathon
            </h1>
            <p className="max-w-3xl ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              augue justo, porttitor vitae felis nec, molestie sodales mi.
              Suspendisse eget aliquam ex, mollis lacinia nunc.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Duis augue justo, porttitor
              vitae felis nec, molestie sodales mi. Suspendisse eget aliquam ex,
              mollis lacinia nunc.
            </p>
          </div>
          <div className="flex px-10 flex-col-reverse md:flex-row items-center gap-4 justify-center mt-10 md:mt-32">
            <div>
              <p className="max-w-3xl ">
                Teams will be provided with a problem statement to rack their
                brains on. WINNERS will be awarded a handsome amount of
                1,00,000/- to compliment their efforts and hardwork! REGISTER
                NOW and get your contemplating minds aboard this
                avant garde quest!
              </p>
              <p className="max-w-3xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                augue justo, porttitor vitae felis nec, molestie sodales mi.
                Suspendisse eget aliquam ex, mollis lacinia nunc.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Duis augue justo,
                porttitor vitae felis nec, molestie sodales mi. Suspendisse eget
                aliquam ex, mollis lacinia nunc.
              </p>
            </div>
            <h1 className="w-full md:w-1/3 text-2xl md:text-7xl font-semibold">
              Problem Statement
            </h1>
          </div>
        </section>
        <section className="flex flex-col md:flex-row px-10 md:px-32 mt-10 md:mt-32 items-center">
          <div className="">
            <h1 className="text-2xl md:text-7xl font-semibold">Participate</h1>
            <p className="max-w-lg pt-10 md:p-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              augue justo, porttitor vitae felis nec, molestie sodales mi.
              Suspendisse eget aliquam ex, mollis lacinia nunc.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Duis augue justo, porttitor
              vitae felis nec, molestie sodales mi. Suspendisse eget aliquam ex,
              mollis lacinia nunc.
            </p>
            <img src={image} alt="laptop" className="hidden md:block" />
          </div>
          <form className="flex flex-col w-full gap-4 mt-6 md:mt-0">
            <div className="flex flex-col">
              <label htmlFor="" className="font-light text-lg font-open pb-1">
                Team Name
              </label>
              <input
                placeholder="Enter your Team Name"
                type="text"
                // onChange={handleChange}
                name="Name"
                // value={formData.Name}
                className="p-2 rounded-sm focus:outline-temp text-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-light text-lg font-open pb-1">
                Email Address
              </label>
              <input
                type="text"
                // onChange={handleChange}
                name="email"
                // value={formData.EmailAddress}
                className="p-2 rounded-sm focus:outline-temp text-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-light text-lg font-open pb-1">
                Team Size
              </label>
              <input
                type="text"
                // onChange={handleChange}
                // value={formData.TeamSize}
                className="p-2 rounded-sm focus:outline-temp text-black"
              />
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4 ">
              Yes, I'm In
            </button>
          </form>
        </section>
      </section> */}
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
}
