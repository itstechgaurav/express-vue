import homePage from "./pages/home.vue"
import aboutPage from "./pages/about.vue"


let routes = [
    {
        path: "/",
        name: "home",
        component: homePage
    },
    {
        path: "/about",
        name: "about",
        component: aboutPage
    }
]



export default routes;