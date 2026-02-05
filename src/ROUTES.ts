type routeButtonsItem = {
    label: string;
    route: string;
}


export const ROUTES = {
    HOME: "/",
    JS: "/js-typing",
    HTML: "/html-typing",
    CSS: "/css-typing",
    RESULT: "/result"
} as const;

export const routeButtons: routeButtonsItem[] = [
    {label: "HTML", route: ROUTES.HTML},
    {label: "CSS", route: ROUTES.CSS},
    {label: "JavaScript", route: ROUTES.JS}
]