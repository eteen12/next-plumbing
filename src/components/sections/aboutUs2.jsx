import Image from "next/image";
import PlumberStanding from "/public/aboutUsLarge.jpg";

export default function AboutUs2() {
    return(
        <div className="relative w-[300px]  h-[500px] ">
        {/* Background Image */}
        <div className="blueColorBg w-full h-full rounded-3xl">

        </div>

        {/* Foreground Image */}
        <Image
          src={PlumberStanding}
          alt="Background"
          className="absolute top-[45px] left-10 w-full opacity-100 rounded-3xl"
        />
      </div>
    );
}