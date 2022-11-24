import { createRouter,createWebHistory } from "vue-router";
import BorrarComponent from "./components/BorrarComponent.vue";
import DetailsComponent from "./components/DetailsComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import HospitalesComponent from './components/HospitalesComponent.vue'
import InsertarComponent from "./components/InsertarComponent.vue";
import ModificarComponent from "./components/ModificarComponent.vue";


const misRutas = [

    {
        path:"/", component: HomeComponent
    },
    {
        path:"/hospitales", component: HospitalesComponent
    },
    {
        path:"/details/:id", component: DetailsComponent
    },
    {
        path:"/insertar", component: InsertarComponent
    },
    {
        path:"/modificar/:id", component: ModificarComponent
    },
    {
        path:"/borrar/:id", component: BorrarComponent
    },

]

//CREAMOS UNA CONSTANTE QUE CONTENDRA LAS RUTAS Y EL HISTORIAL
//DICHA CONSTANTE SERA LA QUE UTILIZAREMOS DENTRO DE MAIN.JS
const router = createRouter({
    history: createWebHistory(),
    routes: misRutas 
});

//POR ULTIMO, EXPORTAR LA CONSTANTE ROUTER
export default router;