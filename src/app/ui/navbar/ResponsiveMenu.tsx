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

interface Props {
    showMenu: boolean;
    closeMenu: () => void;
}

const ResponsiveMenu: React.FC<Props> = ({ showMenu, closeMenu }) => {
    const handleClick = () => {
        closeMenu();
    };

    return (
        <div className={`${showMenu ? 'top-14 md:hidden' : 'hidden'} fixed w-full overflow-hidden z-50 bg-white h-[20rem] flex md:items-center items-start md:justify-center justify-start md:pl-0 pl-4 py-8 border-b shadow-md`}>

            <NavigationMenu>
                <NavigationMenuList className="flex flex-col gap-2">
                    {/* Home section */}
                    <NavigationMenuItem className="w-full flex ">
                        <Link href="/" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                <IoHomeOutline className="mr-1 w-4 h-4 " />
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* About page */}
                    <NavigationMenuItem className="w-full flex">
                        <Link href="/about" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                <PiInfoLight className="mr-1 w-4 h-4" />
                                About Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Services */}
                    <NavigationMenuItem className="w-full flex">
                        <Link href="/services" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                <MdOutlineMiscellaneousServices className="mr-1 w-4 h-4" />
                                Services
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Portfolio */}
                    <NavigationMenuItem className="w-full">
                        <Link href="/portfolio" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                <MdOutlineContactPage className="mr-1 w-4 h-4" />
                                Portfolio
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Team */}
                    <NavigationMenuItem className="w-full flex">
                        <Link href="/team" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                <RiTeamLine className="mr-1 w-4 h-4" />
                                Team
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Contact page */}
                    <NavigationMenuItem className="w-full flex">
                        <Link href="/contact" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                {' '}
                                <RiContactsLine className="mr-1" />
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default ResponsiveMenu;
