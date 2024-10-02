import Image from "next/image";

const MainWeather = ({ current }) => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full md:w-1/2 justify-center md:justify-start">
      <figure className="w-32 h-32 md:w-40 md:h-40">
        <Image
          width={200}
          height={200}
          src={current.weather_icon}
          alt="Clima actual"
          priority
          loading="eager"
          className="w-full h-auto"
        />
      </figure>
      <div className="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-bold">{current.temp}°</h2>
        <p className="opacity-75 font-sans text-lg md:text-xl">
          {current.weather_text}
        </p>
      </div>
    </div>
  );
};

export default MainWeather;
