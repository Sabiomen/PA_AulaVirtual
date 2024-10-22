import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/PrincipalDocente.vue'
import AñadirArchivoDocente from '../views/AñadirArchivoDocente.vue'
import AñadirVideoDocente from '../views/AñadirVideoDocente.vue'
import CreacionCursoDocente from '../views/CreacionCursoDocente.vue'
import EdicionPerfilDocente from '../views/EdicionPerfilDocente.vue'
import FormularioDocente from '../views/FormularioDocente.vue'
import GestionAlumnosDocente from '../views/GestionAlumnosDocente.vue'
import GestionCursoDocente from '../views/GestionCursoDocente.vue'
import GestionFormularioDocente from '../views/GestionFormularioDocente.vue'
import GestionMaterialDocente from '../views/GestionMaterialDocente.vue'
import GestionTextosDocente from '../views/GestionTextosDocente.vue'
import PerfilDocente from '../views/PerfilDocente.vue'
import VistaCursoDocente from '../views/VistaCursoDocente.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path:'/AñadirArchivoDocente',
            component: AñadirArchivoDocente
        },
        {
            path: '/AñadirVideoDocente',
            component: AñadirVideoDocente
        },
        {
            path: '/CreacionCursoDocente',
            component: CreacionCursoDocente
        },
        {
            path: '/EdicionPerfilDocente',
            component: EdicionPerfilDocente
        },
        {
            path: '/FormularioDocente',
            component: FormularioDocente
        },
        {
            path: '/GestionAlumnosDocente',
            component: GestionAlumnosDocente
        },
        {
            path: '/GestionCursoDocente',
            component: GestionCursoDocente
        },
        {
            path: '/GestionFormularioDocente',
            component: GestionFormularioDocente
        },
        {
            path: '/GestionMaterialDocente',
            component: GestionMaterialDocente
        },
        {
            path: '/GestionTextosDocente',
            component: GestionTextosDocente
        },
        {
            path: '/PerfilDocente',
            component: PerfilDocente,
        },
        {
            path: '/VistaCursoDocente',
            component: VistaCursoDocente
        }
    ]
}
)

export default router
