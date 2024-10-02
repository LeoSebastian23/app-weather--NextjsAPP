import { Cloud, DropIcon, SunriseIcon, SunsetIcon, ThermometerIcon, WindIcon } from "@/Icons/Icons";

const CurrentStats = ({ current, time }) => {;
  return (
    <div className="w-full flex justify-center ">
      <div className="md:w-full w-full  ">
        <div className="grid md:grid-cols-6 grid-cols-2 gap-y-10 py-2">
          <div className="flex justify-center items-center gap-4 bg-cyan-700 rounded-xl m-1">
            <span className="mt-[-8px]">
              <DropIcon />
            </span>
            <div className="flex flex-col">
              <span className="font-sans opacity-95">Humedad</span>
              <span className="text-base">{current.humidity}%</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 bg-cyan-700 rounded-xl m-1">
            <span className="mt-[-8px]">
              <ThermometerIcon />
            </span>
            <div className="flex flex-col">
              <span className="font-sans opacity-95">Sens. Térm.</span>
              <span className="text-base">{current.feelslike}°</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 bg-cyan-700 rounded-xl m-1">
            <span className="mt-[-8px]">
              <Cloud />
            </span>
            <div className="flex flex-col">
              <span className="font-sans opacity-95">Nubosidad</span>
              <span className="text-base">{current.cloud}%</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 bg-cyan-700 rounded-xl m-1 p-1">
            <span className="mt-[-8px]">
              <SunriseIcon />
            </span>
            <div className="flex flex-col">
              <span className="font-sans opacity-95">Amanecer</span>
              <span className="text-base">{time.sunrise}</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 bg-cyan-700 rounded-xl m-1">
            <span className="mt-[-8px]">
              <SunsetIcon />
            </span>
            <div className="flex flex-col">
              <span className="font-sans opacity-95">Anochecer</span>
              <span className="text-base">{time.sunset}</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 bg-cyan-700 rounded-xl m-1">
            <span className="mt-[-8px]">
              <WindIcon />
            </span>
            <div className="flex flex-col">
              <span className="font-sans opacity-95">Viento</span>
              <span className="text-base">{current.wind} Km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStats;