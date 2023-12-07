import { Router } from "./route.js";


const router = new Router()

router.add("/","pages/home.html",)
router.add("/about", "pages/about.html")
router.add("/contact", "pages/contact.html")
router.add( 404, "pages/404.html")

// const routes = {
//     "/":"pages/home.html",
//     "/about": "pages/about.html",
//     "/contact": "pages/contact.html",
//     404: "pages/404.html"
// }


router.handle()
// window.onpopstate = () => handle()
// window.route = () => route()

window.onpopstate = ()=> router.handle()
window.router = ()=> router.route()