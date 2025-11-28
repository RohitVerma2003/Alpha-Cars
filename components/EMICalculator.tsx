"use client";

import { useState } from "react";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

export default function EMICalculator() {
  const maxLoanAmount = 1326000;
  const minLoanAmount = 100000;

  const maxDownPayment = 1226000;
  const maxMonths = 84;
  const minMonths = 12;

  const [loanAmount, setLoanAmount] = useState(1060800);
  const [downPayment, setDownPayment] = useState(265200);
  const [duration, setDuration] = useState(66);

  const interestRate = 0.1 / 12;
  const emi =
    (loanAmount * interestRate * Math.pow(1 + interestRate, duration)) /
    (Math.pow(1 + interestRate, duration) - 1);

  return (
    <div className="w-full bg-white p-4 rounded-2xl space-y-6">
      <p className="text-lg font-bold text-[#2e054e]">Check Eligibility</p>

      <h2 className="text-base font-semibold text-[#2e054e]">EMI Calculator</h2>

      <div>
        <div className="flex justify-between mb-1">
          <p className="font-medium">Loan Amount</p>
          <p className="font-bold text-purple-700">
            ₹ {loanAmount.toLocaleString("en-IN")}
          </p>
        </div>
        <input
          type="range"
          className="w-full accent-purple-700"
          min={minLoanAmount}
          max={maxLoanAmount}
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />
        <div className="flex justify-between text-sm text-gray-500">
          <p>₹ {minLoanAmount.toLocaleString("en-IN")}</p>
          <p>₹ {maxLoanAmount.toLocaleString("en-IN")}</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <p className="font-medium">Down Payment*</p>
          <p className="font-bold text-purple-700">
            ₹ {downPayment.toLocaleString("en-IN")}
          </p>
        </div>
        <input
          type="range"
          className="w-full accent-purple-700"
          min={0}
          max={maxDownPayment}
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
        />
        <div className="flex justify-between text-sm text-gray-500">
          <p>₹ 0</p>
          <p>₹ {maxDownPayment.toLocaleString("en-IN")}</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <p className="font-medium">Duration of Loan</p>
          <p className="font-bold text-purple-700">{duration} Months</p>
        </div>
        <input
          type="range"
          className="w-full accent-purple-700"
          min={minMonths}
          max={maxMonths}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />
        <div className="flex justify-between text-sm text-gray-500">
          <p>12 Months</p>
          <p>84 Months</p>
        </div>
      </div>

      <div className="pt-3 border-t">
        <p className="text-green-600 text-3xl font-bold">
          ₹ {Math.round(emi).toLocaleString("en-IN")}
          <span className="text-lg font-medium text-gray-500"> per month</span>
        </p>

        <button className="text-purple-700 font-semibold flex items-center mt-2">
          <BsFileEarmarkBarGraph/> View Loan Breakup
        </button>
      </div>

      <button className="w-full bg-purple-700 text-white font-semibold text-lg py-4 rounded-xl shadow hover:bg-purple-800 transition-all flex justify-center items-center gap-2">
        <span className="bg-yellow-400 p-1 rounded-full text-sm"><FaRupeeSign/></span>
        Check eligibility
      </button>

      <p className="text-[11px] text-gray-500 leading-4">
        *Rate of interest can vary subject to credit profile. Loan approval is
        at the sole discretion of the finance partner. <br />
        **Processing fee and other loan charges are not included.
      </p>
    </div>
  );
}
