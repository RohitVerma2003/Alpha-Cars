const car_overview = [
  {
    label: "Make Year",
    data: "Aug 2021",
  },
  {
    label: "Registration Year",
    data: "Dec 2021",
  },
  {
    label: "Fuel Type",
    data: "Diesel",
  },
  {
    label: "Km driven",
    data: "13K km",
  },
  {
    label: "Tranmission",
    data: "Manual",
  },
  {
    label: "No. of Owner",
    data: "1st Owner",
  },
  {
    label: "Insurance Validity",
    data: "Nov 2025",
  },
  {
    label: "Insurance Type",
    data: "3rd Party",
  },
  {
    label: "RTO",
    data: "DL3C",
  },
  {
    label: "Car Location",
    data: "Sector-29, Gurgaon",
  },
];

const Overview = () => {
  return (
    <div>
      <p className="text-[#2e054e] text-xl font-bold mb-4">Car Overview</p>
      <div className="border rounded-lg border-gray-300 p-5 flex justify-center items-center">
        <div className="w-full grid grid-cols-3 gap-2">
          {car_overview.map((item, index) => (
            <div className="p-3" key={index}>
              <p className="text-sm text-gray-500 font-semibold">
                {item.label}
              </p>
              <p className="text-[#2e054e] text-lg font-semibold">
                {item.data}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
