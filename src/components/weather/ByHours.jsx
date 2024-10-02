import Image from "next/image";

const ByHours = ({ weatherByHour }) => {
  return (
    <section className="pt-5 pb-5">
      {/* Contenedor que permite scroll horizontal en pantallas pequeñas */}
      <div
        className="flex gap-3 overflow-x-auto flex-nowrap w-full pb-4 scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-blue-900"
      >
        {weatherByHour.map((weather, index) => (
          <div
            key={index}
            className="min-w-[100px] md:min-w-[125px] flex flex-col items-center gap-y-2 bg-cyan-900 bg-opacity-50 hover:bg-opacity-70 rounded-xl py-4 px-3 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <h3 className="font-sans text-sm md:text-lg opacity-90">
              {weather.time}
            </h3>
            <Image
              src={weather.icon}
              height={60}
              width={60}
              alt={weather.text}
              className="h-12 w-12 md:h-14 md:w-14"
            />
            <p className="font-bold text-lg md:text-xl">{weather.temp}°C</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ByHours;
