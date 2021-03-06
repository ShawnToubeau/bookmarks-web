import Home from "../containers/Home";
import Errors from "../containers/Errors";

export const MAIN_ROUTES = Object.freeze([
    {
        TITLE: "Home",
        DESCRIPTION: "Dat Do's Home Page",
        PATH: `${process.env.PUBLIC_URL}/`,
        EXACT: true,
        COMPONENT: Home,
    },
]);

export const ERROR_ROUTES = Object.freeze([
    {
        TITLE: "PAGE NOT FOUND",
        PATH: `${process.env.PUBLIC_URL}/*`,
        EXACT: false,
        COMPONENT: Errors,
    },
]);

export const SIDE_BAR_ITEMS = Object.freeze([
    {
        TITLE: "Home Page",
        LINK: "/",
        ICON: "home",
        SUBMENU: [],
        ONCLICK: () => {},
    },
    {
        TITLE: "Login",
        LINK: "/login",
        ICON: "login",
        SUBMENU: [],
        ONCLICK: () => {},
    },
]);
