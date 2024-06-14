/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import Link from 'next/link';
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
        <div className={`${showMenu ? 'top-14 md:hidden' : 'hidden'} fixed w-full overflow-x-hidden z-50 bg-white h-[50vh] flex items-center justify-center py-6 border-b shadow-md`}>
            <NavigationMenu>
                <NavigationMenuList className="flex flex-col gap-4">
                    {/* Home section */}
                    <NavigationMenuItem>
                        <Link href="/" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* About page */}
                    <NavigationMenuItem>
                        <Link href="/about" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                About Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Services */}
                    <NavigationMenuItem>
                        <Link href="/services" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                Services
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Portfolio */}
                    <NavigationMenuItem>
                        <Link href="/portfolio" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                Portfolio
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Team */}
                    <NavigationMenuItem>
                        <Link href="/team" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
                                Team
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Contact page */}
                    <NavigationMenuItem>
                        <Link href="/contact" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClick}>
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
