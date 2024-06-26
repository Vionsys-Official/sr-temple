/* eslint-disable max-len */
/* eslint-disable arrow-spacing */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { VscClose } from 'react-icons/vsc';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import LogoImage from '../../../../public/assets/logo/srlogo.png';
import ResponsiveMenu from './ResponsiveMenu';
import { useLanguage, Language } from '../../../lib/languageContext';

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string,
  title: string
  href: string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ListItem({
  children, title, href,
}: ListItemProps) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          onClick={handleClick}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',

          )}
        >
          <div className="text-Paragraph font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-Paragraph leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
}

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function closeMenu() {
    setShowMenu(false);
  }

  const { language, setLanguage } = useLanguage() || { language: 'english', setLanguage: () => {} };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (setLanguage) {
      setLanguage(event.target.value as Language);
    }
  };

  return (
    <div>
      <div className={'fixed z-50 w-full flex md:p-2 p-4 justify-between items-center bg-white ${visible ? "top-0 shadow-md shadow-gray" : "-top-full"'}>
        {/* Logo  */}
        <div className="md:px-8 px-2  ">
          <Link href="/">
            <Image
              src={LogoImage}
              alt=""
              className="md:w-16 md:h-16 w-14 h-14 top-0 absolute"
            />
          </Link>
        </div>
        <div className="py-2 md:block hidden px-4">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Home Page */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-Paragraph text-2xl hover:bg-slate-100`} onClick={closeMenu}>
                    {language === 'english' ? 'Home' : 'होम'}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* about Page */}
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-Paragraph text-Paragraph_sm  hover:bg-slate-100`} onClick={closeMenu}>
                    {language === 'english' ? 'About Us' : 'आमच्याबद्दल'}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-Paragraph text-Paragraph_sm hover:bg-slate-100`} onClick={closeMenu}>
                    {language === 'english' ? 'Services' : 'सेवा'}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* portfolio */}
              <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-Paragraph text-Paragraph_sm  hover:bg-slate-100`} onClick={closeMenu}>
                    {language === 'english' ? 'Portfolio' : 'पोर्टफोलिओ'}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Team */}
              <NavigationMenuItem>
                <Link href="/team" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-Paragraph text-Paragraph_sm hover:bg-slate-100`} onClick={closeMenu}>
                    {language === 'english' ? 'Team' : 'टीम'}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Contact us */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-Paragraph text-Paragraph_sm  hover:bg-slate-100`} onClick={closeMenu}>
                    {language === 'english' ? 'Contact Us' : 'संपर्क साधा'}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Language */}
              <NavigationMenuItem>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-Paragraph text-Paragraph_sm  hover:bg-slate-100 block w-full p-2 bg-slate-100 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`} onClick={closeMenu}>
                  <select
                    id="language"
                    name="language"
                    className=""
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
        {/* Mobile menu */}
        <div className="md:hidden block text-4xl ">
          {!showMenu ? (
            <HiMenuAlt1 onClick={() => toggleMenu()} />
          ) : (
            <VscClose onClick={() => toggleMenu()} />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} closeMenu={closeMenu} />
    </div>
  );
}

export default Navbar;
