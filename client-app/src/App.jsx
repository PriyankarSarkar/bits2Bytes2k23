import { useEffect, useState } from "react";
import NET from "vanta/src/vanta.net";
import Aos from "aos";
import Particle from "./Homepage/Particle";
import { Nav } from "./Nav";
import { Present } from "./Homepage";
import { About } from "./Homepage";
import { Carousel } from "./Homepage/Carousel";
import { Gallery } from "./Homepage/Gallery";
import { Convenors } from "./Homepage/Convenors";
import { Secretary } from "./Homepage/Secretary";
import { Contact } from "./Homepage/Contact";
import ViewGalleryImage from "./Homepage/ViewGalleryImage";
import MainProfile from "./Profile/MainProfile";
import { Principal } from "./Principal";
import AdminLogin from "./Register/AdminLogin";
import ParticipantsForm from "./Register/ParticipantsForm";
import { Crew } from "./Crew";

import "./App.css";
import "aos/dist/aos.css";

export default function App() {
  const [childVisible, setChildVisible] = useState(false);
  const [img, setImg] = useState();
  const [tag, setTag] = useState(null);
  const data = "";

  useEffect(() => {
    Aos.init({ duration: 1300 });
    NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xe708e,
      backgroundColor: 0x0,
      maxDistance: 1.0,
      spacing: 12.0,
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <div
        className=" absolute top-0 left-0 h-screen w-auto -z-20"
        id="vanta"
      ></div>
      <Particle />
      <Nav />
      {/* <Present /> */}
      {/* <Principal /> */}
      {/* <Crew /> */}
      {/* <About /> */}
      {/* <Carousel /> */}
      {/* <Gallery
        setChildVisible={setChildVisible}
        setImg={setImg}
        setTag={setTag}
      /> */}
      {/* <Convenors /> */}
      {/* <Secretary /> */}
      {/* <Contact /> */}
      {/* {childVisible && (
        <ViewGalleryImage
          img={img}
          tag={tag}
          setChildVisible={setChildVisible}
        />
      )} */}
      {/* <MainProfile type="admin" /> */}
    </div>
  );
}
