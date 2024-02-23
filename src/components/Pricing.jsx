import { useState } from "react";
import { FcInfo } from "react-icons/fc";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Growth",
      monthlyPrice: "100$/Year",
      yearlyPrice: "100$/Year",
      description: "",
      green: "/src/assets/green-dot.png",
    },
    {
      name: "Scale",
      monthlyPrice: " Let’s Talk",
      yearlyPrice: "Let’s Talk",
      description: "",
      green: "/src/assets/green-dot.png",
    },
  ];

  return (
    <div className="py-10 md:px-14 p-4 max-w-screen-2xl mx-auto" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-2xl font-extrabold text-gray-900 mb-2">
          Here are all our plans
        </h2>
        <p className="text-tertiary md:w-1/3 mx-auto">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            {/* <span className="mr-8 text-2xl font-semibold">Monthly</span> */}
            {/* <div className="w-14 h-6 transition duration-200 bg-gray-300 ease-in-out rounded-full">
							<div
								className={`w-6 h-6 transition duration-200 ease-in-out rounded-full ${
									isYearly ? "bg-primary ml-8" : "bg-gray-500"
								}`}
							></div>
						</div> */}
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          {/* <input
						type="checkbox"
						id="toggle"
						className="hidden"
						checked={isYearly}
						onChange={() => setIsYearly(!isYearly)}
					/> */}
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-20 md:w-11/12 mx-auto"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h3 className="text-3xl  font-bold text-center text-[#010851]">
              {pkg.name}
            </h3>
            <p className="text-tertiary text-center my-6">{pkg.description}</p>
            <p className="mt-5 text-center text-secondary text-4xl font-bold">
              {isYearly ? `${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
            </p>
            <ul
              className="mt-4 space-y-2 px-4"
              style={{ display: pkg.name === "Growth" ? "block" : "none" }}
            >
              {" "}
              <li className="flex items-center">
                <FcInfo className="mr-2 text-xl" />
                Medical Record{" "}
              </li>
              <li className="flex items-center">
                <FcInfo className="mr-2 text-xl" />
                Face Recgonation & Facial Expression{" "}
              </li>
              <li className="flex items-center">
                <FcInfo className="mr-2 text-xl" />
                Bus Location{" "}
              </li>
              <li className="flex items-center">
                <FcInfo className="mr-2 text-xl" />
                AI chat for customer support{" "}
              </li>
            </ul>

			<ul
              className="mt-4 space-y-2 px-4"
              style={{ display: pkg.name === "Growth" ? "none" : "block" }}
            >
              {" "}
              <li className="flex items-center">
                <FcInfo className="mr-2 text-xl" />
                Medical Record{" "}
              </li>
              <li className="flex items-center">
                <FcInfo className="mr-2 text-xl" />
                Face Recgonation & Facial Expression{" "}
              </li>
              <li className="flex items-center">
                <FcInfo className="mr-2 text-xl" />
                Bus Location{" "}
              </li>
              <li className="flex items-center">
                <FcInfo className="mr-2 text-xl" />
                AI chat for customer support{" "}
              </li>
			  <li className="flex items-center">
                <FcInfo className="mr-2 text-xl" />
				Custom Features      
				 </li>
            </ul>

            {/* button */}
            <div className="w-full mx-auto flex items-center justify-center mt-5">
              <button className="mt-6 px-10 text-secondary py-2 border border-secondary hover:bg-secondary hover:text-white font-semibold py-2 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
