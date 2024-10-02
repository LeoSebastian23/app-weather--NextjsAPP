import Image from "next/image";

const Predictions = ({ data, city }) => {
  if (!data) return "";

  return (
    <div className="pt-5">
      <h2 className="text-2xl text-center my-7 font-sans">Proximos 3 días - Ciudad: {city}</h2>
      {/* Grilla adaptable según tamaño de pantalla */}
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {data.map((weather, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-[var(--transparent-bg)] hover:bg-[var(--transparent-bg-hover)] rounded-lg transition-all duration-300 ease-in-out cursor-pointer"
          >
            <figure className="w-[40%] flex justify-center">
              <Image
                src={weather.icon}
                height={80}
                width={80}
                alt={weather.text}
                className="h-16 w-16 md:h-20 md:w-20"
              />
            </figure>
            <div className="w-[60%] flex flex-col">
              <h3 className="text-lg font-sans opacity-75">{weather.day}</h3>
              <div className="flex justify-between mt-2">
                <div className="flex flex-col items-start">
                  <span className="text-2xl md:text-3xl font-semibold">{weather.min}º</span>
                  <span className="text-sm md:text-base font-sans opacity-65">min</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-2xl md:text-3xl font-semibold">{weather.max}º</span>
                  <span className="text-sm md:text-base font-sans opacity-65">max</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Predictions;
