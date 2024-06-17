import React from 'react';
import {
  FaMoneyBillAlt,
  FaUserFriends,
  FaPaintRoller,
  FaCheckCircle,
} from 'react-icons/fa';

function Commitment() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-MainHeading text-center mb-8">Our Commitment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow text-center transition-transform transform hover:scale-105 hover:bg-amber-50">
            <FaCheckCircle className="h-6 w-6 text-SubHeading mx-auto mb-3" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              Reliability
            </h3>

            <p className="text-Paragraph">
              We are committed to delivering trustworthy services with
              consistent quality, dependable service, and timely delivery.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center transition-transform transform hover:scale-105 hover:bg-amber-50">
            <FaMoneyBillAlt className="h-6 w-6 text-SubHeading mx-auto mb-3" />

            <h3 className="text-SubHeading font-CardHeading mb-2">
              Cost-Effectiveness
            </h3>
            <p className="text-Paragraph">
              Our solutions prioritize affordability without compromising on
              quality, offering transparent pricing and exceptional value.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center transition-transform transform hover:scale-105 hover:bg-amber-50">
            <FaUserFriends className="h-6 w-6 text-SubHeading mx-auto mb-3" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              Customer Focus
            </h3>
            <p className="text-Paragraph">
              Putting you first, we provide personalized service, dedicated
              support, and responsive communication to meet your needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center transition-transform transform hover:scale-105 hover:bg-amber-50">
            <FaPaintRoller className="h-6 w-6 text-SubHeading mx-auto mb-3" />
            <h3 className="text-SubHeading mb-2 font-CardHeading">
              Excellent Finishing
            </h3>
            <p className="text-Paragraph">
              Our focus on detail, high-quality materials, and superior
              craftsmanship ensures outstanding finishing in every construction
              aspect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commitment;
