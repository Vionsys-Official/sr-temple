/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import Link from 'next/link';
import { IoHomeOutline } from 'react-icons/io5';
import { PiInfoLight } from 'react-icons/pi';
import { MdOutlineContactPage, MdOutlineMiscellaneousServices } from 'react-icons/md';
import { RiContactsLine, RiTeamLine } from 'react-icons/ri';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Language, useLanguage } from '@/lib/languageContext';

interface Props {
    showMenu: boolean;
    closeMenu: () => void;
}

const ResponsiveMenu: React.FC<Props> = ({ showMenu, closeMenu }) => {
    const handleClick = () => {
        closeMenu();
    };

    const { language, setLanguage } = useLanguage() || { language: 'english', setLanguage: () => {} };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (setLanguage) {
          setLanguage(event.target.value as Language);
        }
      };

    return (
        <div className={`${showMenu ? 'top-14 md:hidden' : 'hidden'} fixed w-full overflow-hidden z-50 bg-white h-auto flex md:items-center items-start md:justify-center justify-start md:pl-0 pl-4 py-8 border-b shadow-md`}>

            <NavigationMenu>
                <NavigationMenuList className="flex flex-col gap-2">
                    {/* Home section */}
                    <NavigationMenuItem className="w-full flex ">
                        <Link href="/" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                <IoHomeOutline className="mr-1 w-4 h-4 " />
                                {language === 'english' ? 'Home' : language === 'marathi' ? 'होम' : 'होम'}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* About page */}
                    <NavigationMenuItem className="w-full flex">
                        <Link href="/about" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                <PiInfoLight className="mr-1 w-4 h-4" />
                                {language === 'english' ? 'About Us' : language === 'marathi' ? 'आमच्याबद्दल' : 'हमारे बारे में'}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Services */}
                    <NavigationMenuItem className="w-full flex">
                        <Link href="/services" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                <MdOutlineMiscellaneousServices className="mr-1 w-4 h-4" />
                                {language === 'english' ? 'Services' : language === 'marathi' ? 'सेवा' : 'सेवाएँ'}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Portfolio */}
                    <NavigationMenuItem className="w-full">
                        <Link href="/portfolio" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                <MdOutlineContactPage className="mr-1 w-4 h-4" />
                                {language === 'english' ? 'Portfolio' : language === 'marathi' ? 'पोर्टफोलिओ' : 'पोर्टफोलिओ'}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Team */}
                    <NavigationMenuItem className="w-full flex">
                        <Link href="/team" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                <RiTeamLine className="mr-1 w-4 h-4" />
                                {language === 'english' ? 'Team' : language === 'marathi' ? 'टीम' : 'टीम'}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Contact page */}
                    <NavigationMenuItem className="w-full flex">
                        <Link href="/contact" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                {' '}
                                <RiContactsLine className="mr-1" />
                                {language === 'english' ? 'Contact Us' : language === 'marathi' ? 'संपर्क साधा' : 'संपर्क करे'}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Language */}
                    <NavigationMenuItem className="w-full flex">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-Paragraph text-Paragraph_sm  hover:bg-slate-100 block w-full p-2 bg-slate-100 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}>
                  <select
                    id="language"
                    name="language"
                    value={language} // Use value instead of defaultValue
                    onChange={handleLanguageChange}
                  >
                    <option value="english">{language === 'english' ? 'English' : 'इंग्लिश'}</option>
                    <option value="marathi">{language === 'english' ? 'Marathi' : 'मराठी'}</option>
                    <option value="hindi">{language === 'english' ? 'Hindi' : 'हिंदी'}</option>
                  </select>
                </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default ResponsiveMenu;
