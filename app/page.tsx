import ThumbnailSlider from "@/components/ThumbnailSlider";
import EMICalculator from "@/components/EMICalculator";
import Overview from "@/components/Overview";
import Report from "@/components/Report";
import Specifications from "@/components/Specifications";

const Home = () => {
  return (
    <div className="w-full md:flex justify-around gap-6 p-2">
      <div className="w-full md:w-3/5">
        <div className="mb-5">
          <ThumbnailSlider />
        </div>
        <div className="w-full">
          <div className="mb-6">
            <Overview />
          </div>
          <div className="mb-6">
            <Report />
          </div>
          <div className="mb-6">
            <Specifications />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 py-4">
        <div className="sticky top-2">
          <div className="w-full border rounded-lg border-gray-300 shadow-sm">
            <div className="border-b border-gray-300 p-4">
              <p className="font-semibold text-[#2e054e] text-lg">
                2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD
              </p>
              <p className="text-[#2e054e] mt-2">13K km · Diesel · Manual</p>
            </div>
            <div className="border-b border-gray-300 p-4">
              <p className="font-semibold text-[#2e054e] text-sm">
                Fixed on road price
              </p>
              <p className="text-[#2e054e] font-bold text-xl mt-2">
                ₹13.26 Lakh{" "}
                <span className="text-sm font-normal">+ 1% TCS</span>
              </p>
              <p className="text-sm text-gray-500 mt-3">
                Includes RC transfer, insurance & more
              </p>
            </div>
            <div>
              <EMICalculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
