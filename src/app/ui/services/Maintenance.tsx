'use client';

import { useLanguage } from '@/lib/languageContext';
import React from 'react';
import { FaTools, FaHammer, FaWrench } from 'react-icons/fa';

function Maintenance() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <div className="bg-amber-50 py-4">
      <div className="container mx-auto text-center">
        <h2 className="text-MainHeading_sm md:text-MainHeading font-bold text-center mb-4">
          {language === 'english' ? 'Maintenance & Renovation' : 'देखभाल आणि नूतनीकरण'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          <div className="flex flex-col items-center p-3 transition-transform transform hover:scale-105">
            <FaTools className="h-12 w-12 text-yellow mb-2" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              {language === 'english' ? 'General Maintenance' : 'सामान्य देखभाल'}
            </h3>
            <p className="text-Paragraph text-center">
              {language === 'english' ? 'Our team offers regular maintenance services to ensure your property remains in top condition with minimal disruptions.' : 'तुमची मालमत्ता कमीत कमी खर्च आणि अव्वल स्थितीत राहील याची खात्री करण्यासाठी आमचा कार्यसंघ नियमित देखभाल सेवा देतो.'}
            </p>
            <hr className="border-t-0 border-dotted border-amber-500 my-4 w-10 border-4" />
          </div>
          <div className="flex flex-col items-center p-3 transition-transform transform hover:scale-105">
            <FaHammer className="h-12 w-12 text-yellow mb-2" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              {language === 'english' ? 'Renovation Services' : 'नूतनीकरण सेवा'}
            </h3>
            <p className="text-Paragraph text-center">
              {language === 'english' ? 'We provide expert renovation services to update and enhance your property, combining aesthetics and functionality.' : 'आम्ही सौंदर्यशास्त्र आणि कार्यक्षमता एकत्रित करून, तुमची मालमत्ता सुधारणा करण्यासाठी तज्ञ नूतनीकरण सेवा प्रदान करतो.'}
            </p>
            <hr className="border-t-0 border-dotted border-amber-500 my-4 w-10 border-4" />
          </div>
          <div className="flex flex-col items-center p-3 transition-transform transform hover:scale-105">
            <FaWrench className="h-12 w-12 text-yellow mb-2" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              {language === 'english' ? 'Repairs & Fixes' : 'दुरुस्ती आणि निराकरणे'}
            </h3>
            <p className="text-Paragraph text-center">
              {language === 'english' ? 'Our skilled professionals handle all types of repairs and fixes ensuring every aspect of your property is in perfect working order.' : 'आमचे कुशल व्यावसायिक सर्व प्रकारच्या दुरुस्ती आणि निराकरणे हाताळतात, तुमच्या मालमत्तेचे प्रत्येक पैलू अचूक कार्य क्रमाने असल्याचे सुनिश्चित करते.'}
            </p>
            <hr className="border-t-0 border-dotted border-amber-500 my-4 w-10 border-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
