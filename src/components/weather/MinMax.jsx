import { ArrowDown, ArrowUp } from '@/icons/icons';

const MinMax = ({ min, max, city, country }) => {
  return (
    <div className="w-full md:w-1/2 mt-12 mb-8 flex flex-col justify-center items-center gap-y-5">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        {city}, {country}
      </h2>
      <div className="flex md:gap-[100px] gap-10 justify-center">
        {/* Sección para mostrar la temperatura mínima */}
        <div className="flex items-center gap-3">
          <span className="bg-[#ffffff14] p-2 md:p-3 rounded-full">
            <ArrowDown />
          </span>
          <div className="flex flex-col items-center">
            <span className="opacity-75 font-sans text-xs md:text-sm">Min.</span>
            <span className="text-xl md:text-2xl">{min}°</span>
          </div>
        </div>

        {/* Sección para mostrar la temperatura máxima */}
        <div className="flex items-center gap-3">
          <span className="bg-[#ffffff14] p-2 md:p-3 rounded-full">
            <ArrowUp />
          </span>
          <div className="flex flex-col items-center">
            <span className="opacity-75 font-sans text-xs md:text-sm">Max.</span>
            <span className="text-xl md:text-2xl">{max}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinMax;
