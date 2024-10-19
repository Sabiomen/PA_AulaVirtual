import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Cursos',
      name: 'Cursos',
      component: () => import('../views/PrincipalAlumno.vue')
    },
    {
      path: '/Cursos/Ciencias',
      name: 'Ciencias',
      component: () => import('../views/CienciasAlumno.vue')
    },
    {
      path: '/Cursos/Historia',
      name: 'Historia',
      component: () => import('../views/HistoriaAlumno.vue')
    },
    {
      path: '/Cursos/Matematica',
      name: 'Matematica',
      component: () => import('../views/MatematicaAlumno.vue')
    },
    {
      path: '/Cursos/Ingles',
      name: 'Ingles',
      component: () => import('../views/InglesAlumno.vue')
    },
    {
      path: '/Perfil',
      name: 'Perfil',
      component: () => import('../views/PerfilAlumno.vue')
    },
    {
      path: '/Perfil/Editar',
      name: 'Editar',
      component: () => import('../views/EdicionPerfilAlumno.vue')
    },
    {
      path: '/Biblioteca',
      name: 'Biblioteca',
      component: () => import('../views/BibliotecaAlumno.vue')
    },
    {
      path: '/Pendientes',
      name: 'Pendientes',
      component: () => import('../views/PendientesAlumno.vue')
    },
    {
      path: '/Curso/Ciencias/Taller',
      name: 'TallerCiencias',
      component: () => import('../views/FormularioCiencias.vue')
    },
    {
      path: '/Curso/Historia/Taller',
      name: 'TallerHistoria',
      component: () => import('../views/FormularioHistoria.vue')
    },
    {
      path: '/Curso/Matematica/Taller',
      name: 'TallerMatematica',
      component: () => import('../views/FormularioMatematica.vue')
    },
    {
      path: '/Curso/Ingles/Taller',
      name: 'TallerIngles',
      component: () => import('../views/FormularioIngles.vue')
    }
  ]
})

export default router
