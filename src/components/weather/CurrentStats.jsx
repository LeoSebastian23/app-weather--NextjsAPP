import { Cloud, DropIcon, SunriseIcon, SunsetIcon, ThermometerIcon, WindIcon } from "@/Icons/Icons";

const CurrentStats = ({ current, time }) => {
  const stats = [
    { label: "Humedad", value: `${current.humidity}%`, Icon: DropIcon },
    { label: "Sens. Térm.", value: `${current.feelslike}°`, Icon: ThermometerIcon },
    { label: "Nubosidad", value: `${current.cloud}%`, Icon: Cloud },
    { label: "Amanecer", value: time.sunrise, Icon: SunriseIcon },
    { label: "Anochecer", value: time.sunset, Icon: SunsetIcon },
    { label: "Viento", value: `${current.wind} Km/h`, Icon: WindIcon },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-6 py-4">
          {stats.map(({ label, value, Icon }) => (
            <div
              key={label}
              className="flex justify-center items-center gap-3 bg-cyan-700 rounded-xl m-1 p-2"
            >
              <span className="mt-[-8px] w-8 h-8">
                <Icon />
              </span>
              <div className="flex flex-col text-center">
                <span className="font-sans text-sm opacity-95">{label}</span>
                <span className="text-base font-semibold">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentStats;
