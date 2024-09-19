import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "../../global/Logo";
import Menu from "./Menu";
import Container from "../../global/Container";
import { NavLink } from "react-router-dom";
import {MoonIcon, SunIcon} from "@heroicons/react/24/solid";
import { Menu as Dropdown, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    PowerIcon,
    RocketLaunchIcon,
    SquaresPlusIcon,
    UserIcon,
} from "@heroicons/react/24/outline";

import { useTheme, useThemeUpdate } from "../../provider";

function Header({mobile, visibility, setVisibility, className}) {
    const theme = useTheme();
    const themeUpdate = useThemeUpdate();

    const menuClass = classNames({
        "flex flex-col py-4 xl:py-0 w-64 xl:w-auto fixed xl:transition-none xl:static start-0 top-0 border-e border-slate-200 dark:border-slate-800 xl:border-e-0 bg-white dark:bg-slate-950 z-[1020] h-screen xl:h-auto flex-shrink-0 xl:translate-x-0": true,
        "transition-all": mobile,
        "-translate-x-full": !visibility && theme.direction === "ltr",
        "translate-x-full": !visibility && theme.direction === "rtl",
        [`${className}`]: className,
    });
    return (
        <div className="isolate fixed top-0 start-0 w-full py-4 xl:py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 z-[1020] px-3">
            <Container>
                <div className="flex items-center w-100 justify-between">
                    <div className="flex items-center gap-x-2">
                        <div className="xl:hidden -ms-1.5">
                            <button
                                onClick={()=>{
                                    setVisibility(true)
                                }}
                                className="inline-flex items-center justify-center h-8 w-8 rounded-full overflow-hidden transition-all text-slate-400 hover:bg-slate-200 hover:dark:bg-slate-800 hover:text-slate-600 hover:dark:text-slate-200 ui-open:bg-slate-200 ui-open:dark:bg-slate-800 ui-open:text-slate-600 ui-open:dark:text-slate-200"
                            >
                                <Bars3Icon className="h-5" />
                            </button>
                        </div>
                        <Link className="flex-shrink-0" to="/app">
                            <Logo />
                        </Link>
                    </div>
                    {visibility && (
                        <div
                            onClick={()=>{
                                setVisibility(false)
                            }}
                            className="fixed inset-0 bg-slate-950 bg-opacity-50 z-[1019]"
                        ></div>
                    )}
                    <div className={menuClass}>
                        <Menu mobile={mobile} />
                    </div>
                    <ul className="flex items-center gap-x-3 lg:gap-x-5">
                        <li className="inline-flex relative">
                            <button
                                onClick={()=>{
                                    theme.mode === "dark" && themeUpdate.mode("light")
                                    theme.mode === "light" && themeUpdate.mode("dark")
                                }}
                                className={`inline-flex items-center justify-center h-8 w-8 rounded-full overflow-hidden transition-all text-slate-400 hover:text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:bg-slate-800`}>
                                {theme.mode === "dark" && <MoonIcon className="h-4" />}
                                {theme.mode === "light" && <SunIcon className="h-5" />}
                            </button>
                        </li>
                        <li className="inline-flex relative">
                            <Dropdown>
                                <Dropdown.Button className="inline-flex h-9 w-9 rounded-full overflow-hidden outline outline-2 outline-offset-2 outline-slate-300 dark:outline-slate-700">
                                    <img src="/images/avatar/a.jpg" alt="" />
                                </Dropdown.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Dropdown.Items className="absolute end-0 top-10 w-48 bg-white dark:bg-slate-950 shadow-sm border border-slate-200 dark:border-slate-800 rounded-lg">
                                        <div className="p-4 flex items-center">
                                            <div className="inline-flex flex-shrink-0 h-10 w-10 rounded-full overflow-hidden outline outline-2 outline-offset-2 outline-slate-300 dark:outline-slate-700">
                                                <img
                                                    src="/images/avatar/a.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ms-4">
                                                <h6 className="text-xs font-bold text-slate-700 dark:text-white -mt-0.5">
                                                    Phillip Burke
                                                </h6>
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-blue-500 bg-blue-100 dark:bg-blue-950">
                                                    Balance $18.89
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="py-2 border-t border-slate-200 dark:border-slate-800">
                                            <li>
                                                <NavLink
                                                    to="/admin/dashboard"
                                                    className="flex text-xs px-4 py-2 font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all"
                                                >
                                                    <SquaresPlusIcon className="w-4 me-2" />
                                                    <span>Admin</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/app/profile"
                                                    className="flex text-xs px-4 py-2 font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all"
                                                >
                                                    <UserIcon className="w-4 me-2" />
                                                    <span>Profile</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/app/packages"
                                                    className="flex text-xs px-4 py-2 font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all"
                                                >
                                                    <RocketLaunchIcon className="w-4 me-2" />
                                                    <span>Upgrade</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/login"
                                                    className="flex text-xs px-4 py-2 font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all"
                                                >
                                                    <PowerIcon className="w-4 me-2" />
                                                    <span>Logout</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </Dropdown.Items>
                                </Transition>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default Header;
