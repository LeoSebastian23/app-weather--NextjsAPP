import Image from "next/image";

const ByHours = async ({ weatherByHour}) => {
  return (
    <section className="pt-5 pb-5 ">
      <div
        className="flex gap-2 overflow-x-auto flex-nowrap w-full pb-3"
        style={{ scrollbarColor: "#5cdcff #0247be", scrollbarWidth: "thin" }}
      >
        {weatherByHour.map((weather, index) => (
          <div
            key={index}
            className="min-w-[125px] flex gap-y-2 flex-col w-full items-center bg-cyan-900 bg-[var(--transparent-bg)] hover:bg-[var(--transparent-bg-hover)] rounded-2xl py-4 transition-all duration-500 cursor-pointer"
          >
            <h3 className="font-sans text-lg opacity-95">{weather.time}</h3>
            <Image
              src={weather.icon}
              height={60}
              width={60}
              alt={weather.text}
            />
            <p className="font-bold text-xl">{weather.temp}°C</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ByHours;