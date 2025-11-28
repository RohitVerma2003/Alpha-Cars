import { IoCheckmarkCircle } from "react-icons/io5";

const quality_report = {
  car_condition: [
    "Core structure intact",
    "Non-tempered odometer",
    "Non flooded",
    "Engine",
    "Drivetrain",
    "Body structure",
    "Mechanical",
    "Interior",
  ],
  fixes: ["Repaired & repainted"],
};

const Report = () => {
  return (
    <div>
      <p className="text-[#2e054e] text-xl font-bold mb-4">Quality report</p>
      <div className="border rounded-lg border-gray-300 p-5">
        <div>
          <p className="text-[#2e054e] text-normal font-semibold mb-2">
            Car Condition
          </p>
          <div className="flex flex-wrap gap-3">
            {quality_report.car_condition.map((item, index) => (
              <span
                key={index}
                className="text-sm text-[#2e054e] font-semibold p-2 bg-blue-100 rounded-lg flex items-center gap-1"
              >
                <IoCheckmarkCircle color="green" /> {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[#2e054e] text-normal font-semibold mb-2">
            Fixes done
          </p>
          <div className="flex flex-wrap gap-3">
            {quality_report.fixes.map((item, index) => (
              <span
                key={index}
                className="text-sm text-[#2e054e] font-semibold p-2 bg-blue-100 rounded-lg flex items-center gap-1"
              >
                <IoCheckmarkCircle color="green" /> {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
