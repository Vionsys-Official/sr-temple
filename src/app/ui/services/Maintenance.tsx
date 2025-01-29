'use client';

import { useLanguage } from '@/lib/languageContext';
import React from 'react';
import { FaTools, FaHammer, FaWrench } from 'react-icons/fa';

function Maintenance() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <div className="py-4">
      <div className="p-3 mx-auto text-center">
        <h2 className="text-MainHeading_sm md:text-MainHeading font-bold text-center mb-4">
          {language === 'english' ? 'Maintenance & Renovation' : language === 'marathi' ? 'देखभाल आणि नूतनीकरण' : 'देखभाल आणि नूतनीकरण'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          <div className="flex flex-col items-center md:p-3 transition-transform transform hover:scale-105">
            <FaTools className="md:h-12 h-8 md:w-12 w-8 text-yellow mb-2" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              {language === 'english' ? 'General Maintenance' : language === 'marathi' ? 'सामान्य देखभाल' : 'सामान्य देखभाल'}
            </h3>
            <p className="text-Paragraph text-center">
              {language === 'english' ? 'Our team offers regular maintenance services to ensure your property remains in top condition with minimal disruptions.' : language === 'marathi' ? 'तुमची मालमत्ता कमीत कमी खर्च आणि अव्वल स्थितीत राहील याची खात्री करण्यासाठी आमचा कार्यसंघ नियमित देखभाल सेवा देतो.' : 'सामान्य देखभाल हमारी टीम यह सुनिश्चित करने के लिए नियमित रखरखाव सेवाएँ प्रदान करती है कि आपकी संपत्ति न्यूनतम लागत पर और सर्वोत्तम स्थिति में बनी रहे।'}
            </p>
            <hr className="border-t-0 border-dotted border-amber-500 my-4 w-10 border-4" />
          </div>

          <div className="flex flex-col items-center md:p-3 transition-transform transform hover:scale-105">
            <FaHammer className="md:h-12 h-8 md:w-12 w-8 text-yellow mb-2" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              {language === 'english' ? 'Renovation Services' : language === 'marathi' ? 'नूतनीकरण सेवा' : 'नूतनीकरण सेवाएँ'}
            </h3>
            <p className="text-Paragraph text-center">
              {language === 'english' ? 'We provide expert renovation services to update and enhance your property, combining aesthetics and functionality.' : language === 'marathi' ? 'आम्ही सौंदर्यशास्त्र आणि कार्यक्षमता एकत्रित करून, तुमची मालमत्ता सुधारणा करण्यासाठी तज्ञ नूतनीकरण सेवा प्रदान करतो.' : 'हम आपकी संपत्ति को सौंदर्यशास्त्र और कार्यक्षमता के संयोजन से बेहतर बनाने के लिए विशेषज्ञ नवीकरण सेवाएं प्रदान करते हैं।'}
            </p>
            <hr className="border-t-0 border-dotted border-amber-500 my-4 w-10 border-4" />
          </div>
          
          <div className="flex flex-col items-center md:p-3 transition-transform transform hover:scale-105">
            <FaWrench className="md:h-12 h-8 md:w-12 w-8 text-yellow mb-2" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              {language === 'english' ? 'Repairs & Fixes' : language === 'marathi' ? 'दुरुस्ती आणि निराकरणे' : 'मरम्मत और सुधार'}
            </h3>
            <p className="text-Paragraph text-center">
              {language === 'english' ? 'Our skilled professionals handle all types of repairs and fixes ensuring every aspect of your property is in perfect working order.' : language === 'marathi' ? 'आमचे कुशल कामगार सर्व प्रकारच्या दुरुस्ती आणि निराकरणे हाताळतात, तुमच्या मालमत्तेचे प्रत्येक पैलू अचूक कार्य क्रमाने असल्याचे सुनिश्चित करते.' : 'हमारे कुशल कामगार सभी प्रकार की मरम्मत और सुधारों को संभालते हैं, यह सुनिश्चित करते हुए कि आपकी संपत्ति का हर पहलू सही कार्य क्रम में है।'}
            </p>
            <hr className="border-t-0 border-dotted border-amber-500 my-4 w-10 border-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
