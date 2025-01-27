import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "../../global/Logo";
import Menu from "./Menu";
import Container from "../../global/Container";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {MoonIcon, SunIcon} from "@heroicons/react/24/solid";
import { useTheme, useThemeUpdate } from "../../provider";
function Header({mobile, visibility, setVisibility, className}) {
    const theme = useTheme();
    const themeUpdate = useThemeUpdate();

    const menuClass = classNames({
        "flex flex-col py-4 xl:py-0 w-64 xl:w-auto fixed xl:transition-none xl:static start-0 top-0 border-e dark:border-slate-800 xl:border-e-0 bg-white dark:bg-slate-950 z-[1020] h-screen xl:h-auto flex-shrink-0 xl:translate-x-0": true,
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
                        <Link className="flex-shrink" to="/">
                            <Logo />
                        </Link>
                    </div>
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
                        <li>
                            <a
                                href="/about"
                                className="inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded-full"
                            >
                                <span className="xs:hidden">Contact</span>
                                <span className="hidden xs:inline">Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default Header;
