import React, { useEffect } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import slideUp from "../../../utilities/slideUp";
import slideDown from "../../../utilities/slideDown";
import getParents from "../../../utilities/getParents";
import { useTheme } from "../../provider";

const menuData = [
    { 
        text: "Efficiency Data", 
        link: "#",
        label: "4",
        sub: [
            { text: "Insulation", link: "/insulation" },
            { text: "Appliances", link: "/appliances" },
            {divider: true},
            { text: "Projects", link: "/projects" },
        ],
    },
    {
        text: "About",
        link: "#",
        label: "2",
        sub: [
            { text: "About Us", link: "/about" },
            { text: "Create Account", link: "/create-account" },
            {divider: true},
            { text: "Login", link: "/login" },

        ],
    },
];

function Menu({ mobile, className }) {
    const compClass = classNames({
        "flex flex-col xl:flex-row xl:items-center gap-x-6 px-4 menu-base": true,
        [`${className}`]: className,
    });
    return (
        <ul className={compClass}>
            {menuData.map((item, index) => (
                <MenuItem
                    text={item.text}
                    tag={item.tag}
                    sub={item.sub}
                    link={item.link}
                    column={item.column}
                    heading={item.heading}
                    key={index}
                    mobile={mobile}
                />
            ))}
        </ul>
    );
}

export default Menu;

function MenuItem({ className, text, tag, link, sub, dropdown, divider, label, column, mobile, heading }) {
    const theme = useTheme();

    let currentLink = function (selector) {
        let elm = document.querySelectorAll(selector);
        elm.forEach(function (item) {
            var activeRouterLink = item.classList.contains("active");
            if (activeRouterLink) {
                let parents = getParents(item, `.menu-base`, "menu-item");
                parents.forEach((parentElemets) => {
                    parentElemets.classList.add(
                        "[&>*]:text-blue-600", "[&>*]:dark:text-blue-600",
                        "active",
                        "current"
                    );
                    let subItem = parentElemets.querySelector(`.sub-menu`);
                    subItem !== null && (subItem.style.display = "block");
                });
            } else {
                item.parentElement.classList.remove(
                    "[&>*]:text-blue-600", "[&>*]:dark:text-blue-600",
                    "active",
                    "current"
                );
            }
        });
    };


    useEffect(() => {
        currentLink(`.menu-link`);
        // eslint-disable-next-line
    }, [null]);

    // dropdown toggle
    let dropdownToggle = function (elm) {
        let parent = elm.parentElement;
        let nextelm = elm.nextElementSibling;
        let speed =
            nextelm.children.length > 5
                ? 400 + nextelm.children.length * 10
                : 400;
        if (!parent.classList.contains("active")) {
            parent.classList.add("[&>*]:text-blue-600", "[&>*]:dark:text-blue-600", "active");
            slideDown(nextelm, speed);
        } else {
            parent.classList.remove("[&>*]:text-blue-600", "[&>*]:dark:text-blue-600", "active");
            slideUp(nextelm, speed);
        }
    };

    // dropdown close siblings
    let closeSiblings = function (elm) {
        let parent = elm.parentElement;
        let siblings = parent.parentElement.children;
        Array.from(siblings).forEach((item) => {
            if (item !== parent) {
                item.classList.remove("[&>*]:text-blue-600", "[&>*]:dark:text-blue-600", "active");
                if (item.classList.contains("has-sub")) {
                    let subitem = item.querySelectorAll(`.sub-menu`);
                    subitem.forEach((child) => {
                        child.parentElement.classList.remove(
                            "[&>*]:text-blue-600", "[&>*]:dark:text-blue-600",
                            "active"
                        );
                        slideUp(child, 400);
                    });
                }
            }
        });
    };

    let menuToggle = function (e) {
        e.preventDefault();
        let item = e.target.closest(`.has-toggle`);
        if (mobile) {
            dropdownToggle(item);
            closeSiblings(item);
        }
    };

    const compClass = classNames({
        ["relative menu-item group"]: true,
        ["has-sub xl:[&:hover>*.sub-menu]:translate-y-0 xl:[&:hover>*.sub-menu]:visible xl:[&:hover>*.sub-menu]:opacity-100"]:
            sub,
        [`${className}`]: className,
    });
    const linkClass = classNames({
        "flex items-center font-medium text-sm hover:text-blue-600 hover:dark:text-blue-600 has-toggle menu-link": true,
        ["py-2 xl:py-3 font-medium text-sm text-slate-700 dark:text-slate-100 [&.active]:dark:text-blue-600 group-hover:text-blue-600"]:
            !dropdown,
        ["py-2 px-4 text-xs text-slate-600 dark:text-slate-200 [&.active]:dark:text-blue-600"]: dropdown,
    });
    const dropdownClass = classNames({
        ["bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg hidden xl:!block transition-all sub-menu"]: true,
        ["xl:absolute xl:transition-all xl:-translate-y-2  xl:invisible"]: true,
        ["xl:w-40"]: !column,
        ["xl:w-80"]: column === '2',
        ["xl:w-[480px]"]: column === '3',
        ["xl:top-full"]: label == "2",
        ["xl:start-full xl:-top-2 mx-3 xl:mx-0"]: label == "3",
    });
    const dropdownIconClass = classNames({
        ["h-2 ms-2 fill-current"]: true,
        ["-rotate-90 origin-center ms-auto"]: label == "3" && theme.direction === "ltr",
        ["rotate-90 origin-center ms-auto"]: label == "3" && theme.direction === "rtl",
    });

    const headingClass = classNames({
        "px-4 font-semibold text-xs text-slate-400  tracking-wider pb-1 uppercase heading pt-4 first:pt-2": true,
    });

    return divider ? (
        <li className="border-t border-slate-200 dark:border-slate-800 my-1 w-"></li>
    ) : heading ? (
        <li className={headingClass}>{heading}</li>
    ) : (
        <li className={compClass}>
            {sub ? (
                <>
                    <a href={link} className={linkClass} onClick={(e) => menuToggle(e)}>
                        <span>{text}</span>
                        {tag && <span className="ms-1 text-[10px] leading-3 px-2 py-1 text-slate-600 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 rounded-sm">{tag}</span>}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className={dropdownIconClass}
                        >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                    </a>
                    <div className={dropdownClass}>
                        <MenuSub mobile={mobile} sub={sub} column={column} />
                    </div>
                </>
            ) : (
                <NavLink to={link} className={linkClass} end>
                    <span>{text}</span>
                    {tag && <span className="ms-1 text-[10px] leading-3 px-2 py-1 text-slate-600 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 rounded-sm">{tag}</span>}
                </NavLink>
            )}
        </li>
    );
}

function MenuSub({ className, sub, column, mobile  }) {
    const compClass = classNames({
        ["relative py-2"]: true,
        ["xl:grid"]: column,
        ["xl:grid-cols-2 [&_.heading]:col-span-2"]: column === "2",
        ["xl:grid-cols-3 [&_.heading]:col-span-3"]: column === "3",
        [`${className}`]: className,
    });
    return (
        <ul className={compClass}>
            {sub.map((item, index) => (
                <MenuItem
                    text={item.text}
                    tag={item.tag}
                    sub={item.sub}
                    link={item.link}
                    divider={item.divider}
                    label={item.label}
                    column={item.column}
                    heading={item.heading}
                    key={index}
                    dropdown={true}
                    mobile={mobile}
                />
            ))}
        </ul>
    );
}
