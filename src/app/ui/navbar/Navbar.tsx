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
  return (
    <div>
      <div className={'fixed z-50 w-full flex p-2 justify-between items-center bg-white ${visible ? "top-0 shadow-md shadow-gray" : "-top-full"'}>
        {/* Logo  */}
        <div className="md:px-8 px-2 ">
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
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-lg text-Paragraph hover:bg-slate-100`} onClick={closeMenu}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* about Page */}
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-lg text-Paragraph hover:bg-slate-100`} onClick={closeMenu}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-lg text-Paragraph hover:bg-slate-100`} onClick={closeMenu}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* portfolio */}
              <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-lg text-Paragraph hover:bg-slate-100`} onClick={closeMenu}>
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Team */}
              <NavigationMenuItem>
                <Link href="/team" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-lg text-Paragraph hover:bg-slate-100`} onClick={closeMenu}>
                    Team
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Contact us */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-black md:text-lg text-Paragraph hover:bg-slate-100`} onClick={closeMenu}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden block text-4xl cursor-pointer">
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
