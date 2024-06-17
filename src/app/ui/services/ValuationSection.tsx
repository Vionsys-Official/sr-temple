import React from 'react';

function ValuationSection() {
  return (
    <section>
      <div className="px-4 py-8 md:max-w-full md:px-10">
        <div className="md:p-8 flex flex-col text-center md:flex-row gap-8 rounded shadow-md shadow-blue-100">

          <div className="flex flex-col md:w-1/2 p-4 shadow-inner shadow-blue-900">
            <div className="mb-4">
              <h2 className=" text-MainHeading_sm sm:text-MainHeading">
                Valuation Services
              </h2>
            </div>
            <div className="">
              <p className="mb-4 text-Paragraph_sm font-sans md:text-Paragraph">
                We offer comprehensive valuation services to assess the financial
                aspects of your temple construction project. Our valuation experts
                provide detailed cost analysis, helping you understand the investment
                required for your project. This service ensures transparency and aids
                in effective budget management, allowing you to make informed decisions
                throughout the construction process.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:w-1/2 p-4 shadow-inner shadow-blue-900">
            <div className="mb-4">
              <h2 className=" text-MainHeading_sm  sm:text-MainHeading">
                Estimation Services
              </h2>
            </div>
            <div className="">
              <p className="mb-4 text-Paragraph_sm md:text-Paragraph">
                Our estimation services provide precise cost projections for your
                temple construction project. We take into account all factors, including
                materials, labor, and timelines, to give you a clear and accurate
                estimate. This enables you to plan your finances effectively and
                avoid any unexpected expenses, ensuring a smooth and hassle-free
                construction experience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ValuationSection;
