import { IoSpeedometerOutline } from "react-icons/io5";
import { GiTyre } from "react-icons/gi";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { PiEngineBold } from "react-icons/pi";

const car_specifications = [
  {
    label: "Mileage",
    data: "15 kmpl",
    icon: <IoSpeedometerOutline color="#2e054e" />,
  },
  {
    label: "Ground clearance",
    data: "226 mm",
    icon: <GiTyre color="#2e054e" />,
  },
  {
    label: "Seating capacity",
    data: "4 units",
    icon: <MdOutlineAirlineSeatReclineExtra color="#2e054e" />,
  },
  {
    label: "Fuel tank capacity",
    data: "57 litres",
    icon: <BsFuelPump color="#2e054e" />,
  },
  {
    label: "Displacement",
    data: "2184 cc",
    icon: <PiEngineBold color="#2e054e" />,
  },
];

const Specifications = () => {
  return (
    <div>
      <p className="text-[#2e054e] text-xl font-bold mb-4">
        Car Specifications
      </p>
      <div className="border rounded-lg border-gray-300 p-5 flex justify-center items-center">
        <div className="w-full grid grid-cols-3 gap-2">
          {car_specifications.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div>{item.icon}</div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">
                  {item.label}
                </p>
                <p className="text-base text-[#2e054e] font-semibold">
                  {item.data}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specifications;
