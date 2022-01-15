import home from './home.vue'
import haqqinda from './about'
import elaqe from './contact'




export const routes  = [
    { path:'/', component:home},
    {path: '/about', component: haqqinda},
    {path: '/contact', component: elaqe}


    
]