'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';
import ConstructionImage from '../../../../public/assets/team/ConstructionImage.jpeg';
import ArtImage from '../../../../public/assets/team/ArtImage.jpeg';

function Section4() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <section className="overflow-hidden">
      <div className="text-center p-2">
        <h2 className="font-bold text-MainHeading text-yellow p-2">
          {language === 'english' ? 'Why Choose Our Team?' : language === 'marathi' ? 'आमची टीम का निवडावी?' : 'हमारी टीम क्यों चुनें?'}
        </h2>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div className="flex justify-center items-center">
              <Image
                className="object-cover  rounded shadow-lg"
                src={ArtImage}
                alt="services"
                height={500}
                width={500}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }} // X:100
              whileInView={{ opacity: 1, x: 0 }} // y:100
              transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="md:px-10 p-2 mb-6 flex flex-col justify-center items-center"
            >
              <h2 className="max-w-full mb-4 font-bold tracking-tight text-gray-900 md:text-SubHeading text-SubHeading_sm sm:leading-none">
                {language === 'english' ? 'Expertise and Experience' : language === 'marathi' ? 'विशेषज्ञता आणि अनुभव' : 'विशेषज्ञता और अनुभव'}
              </h2>
              <p className="text-Paragraph_sm md:text-Paragraph">

                Our team of master artisans and craftsmen with skills perfected over generations
                ensures temples that are artistically and structurally exceptional.
                Complementing this,
                our experienced architects blend traditional styles with modern engineering to
                create timeless structures guaranteeing a harmonious blend of aesthetic
                beauty and architectural integrity. It give the spiritual as well as modern vibe.
                {language === 'english' ? 'Our team of master artisans and craftsmen with skills perfected over generations ensures temples that are artistically and structurally exceptional. Complementing this, our experienced architects blend traditional styles with modern engineering to create timeless structures guaranteeing a harmonious blend of aesthetic beauty and architectural integrity. It give the spiritual as well as modern wibe.' : language === 'marathi' ? 'आमच्या टीममध्ये कुशल कारागीर आणि शिल्पकार पिढ्यानपिढ्या असलेले कुशलतेने त्यांची योग्यता आणि दक्षता सुनिश्चित करतात की आपल्याला कलात्मक आणि संरचनात्मक अद्वितीय मंदिरे बांधतात. ह्याच्याशिवाय, आमच्या अनुभवी वास्तुकलावेधांनी पारंपारिक शैलींस आधारित आणि समकालीन ईंजिनीअरिंगसह वेगवेगळ्या संरचना बनविण्यासाठी वापरतात, ज्याच्यामुळे आध्यात्मिक सौंदर्य आणि वास्तुशिल्पाच्या सामंजस्याची खास जोड सुनिश्चित केली जाते. त्यानिमित्ताने ह्या मंदिरांना आध्यात्मिक सोड व समकालीन माहिती मिळते.' : 'हमारी टीम में कुशल कारीगर और कलाकारी पीढ़ियों द्वारा उनकी क्षमता और कुशलता सुनिश्चित की जाती है, ताकि आपको कलात्मक और संरचनात्मक अद्वितीय मंदिर बनाए जा सकें। इसके अलावा, हमारे अनुभवी वास्तुकलावेध द्वारा पारंपारिक शैलियों और समकालीन इंजीनियरिंग के साथ विभिन्न संरचनाओं का निर्माण किया जाता है, जिससे आध्यात्मिक सौंदर्य और वास्तुकला का विशेष सम्मिलन सुनिश्चित होता है। इसके फलस्वरूप, ये मंदिर आध्यात्मिक और समकालीन ज्ञान का संयोजन करते हैं।'}
              </p>
            </motion.div>

          </div>
        </div>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: 100 }} // X:100
              whileInView={{ opacity: 1, x: 0 }} // y:100
              transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="md:px-10 p-2 mb-6 flex flex-col justify-center items-center"
            >
              <h2 className="max-w-full mb-4 font-bold tracking-tight text-gray-900 md:text-SubHeading text-SubHeading_sm sm:leading-none">
                {language === 'english' ? 'Proven Track Record' : language === 'marathi' ? 'दाखवलेले रेकॉर्ड' : 'दिखाए गए रिकॉर्ड'}
              </h2>
              <p className="text-Paragraph_sm md:text-Paragraph">
                {language === 'english' ? 'Our team has successfully completed numerous temple projects across India, each one a testament to our skill, dedication, and artistic vision. Positive feedback from clients highlights the exceptional work and professional approach of our team, reinforcing our reputation for excellence and ensuring client satisfaction.' : language === 'marathi' ? 'आमच्या कार्यसंघाने संपूर्ण भारतात अनेक मंदिर प्रकल्प यशस्वीरित्या पूर्ण केले आहेत, त्यातील प्रत्येक आमच्या कौशल्य, समर्पण आणि कलात्मक दृष्टीचा दाखला आहे. ग्राहकांकडून मिळालेला सकारात्मक अभिप्राय आमच्या कार्यसंघाचे कार्य आणि व्यावसायिक दृष्टिकोन दर्शवतो, उत्कृष्टतेसाठी आमची प्रतिष्ठा मजबूत करतो आणि ग्राहकांचे समाधान सुनिश्चित करतो.' : 'हमारे संगठन ने पूरे भारत में कई मंदिर परियोजनाओं को सफलतापूर्वक पूरा किया है, जिसमें हर एक के कौशल, समर्पण और कलात्मक दृष्टिकोण का योगदान है। हमारे कार्य और व्यावसायिक दृष्टिकोण ग्राहकों से प्राप्त सकारात्मक प्रतिक्रिया हमारे संगठन की प्रतिष्ठा को मजबूत बनाती है और ग्राहकों के समाधान को सुनिश्चित करती है।'}
              </p>
            </motion.div>

            <div className="flex justify-center items-center">
              <Image
                className="object-cover  rounded shadow-lg"
                src={ConstructionImage}
                alt="services"
                height={500}
                width={500}
                quality={100}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Section4;
