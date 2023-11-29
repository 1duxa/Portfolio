import "./Hero.css";

function Hero() {
  return (
    <div className="HERO w-full flex p-3 h-[320px] border-b-4 border-sky-500
    overflow-hidden rounded-b-2xl shadow-lg shadow-cyan-500/80">
      <div className="flex-1 flex flex-col items-center text-center justify-center">
        <h1 className="text-white text-[42px] leading-[50px] z-10
         font-bold font-sans ">
          Hi i`m
          <span className="text-blueNav-400 "> RecipeMaster</span>
        </h1>
        <p className="text-[18px] text-gray-200 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
          suscipit!
        </p>
      </div>

      <div className="flex-1">
        <img
          className="sm:translate-x-[30%] translate-y-10 scale-[1.5] max-w-[400px]"
          src="./Floating-burger-PNG.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
