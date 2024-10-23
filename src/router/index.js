import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/Cursos',
      name: 'Cursos',
      component: () => import('../views/PrincipalAlumno.vue'),
    },
    {
      path: '/Cursos/:courseName',
      name: 'CourseDetail',
      component: () => import('../components/AsignaturaAlumno.vue'),
      props: route => ({ courseName: route.params.courseName }),
    },
    {
      path: '/Perfil',
      name: 'Perfil',
      component: () => import('../views/PerfilAlumno.vue'),
    },
    {
      path: '/Perfil/Editar',
      name: 'Editar',
      component: () => import('../views/EdicionPerfilAlumno.vue'),
    },
    {
      path: '/Biblioteca',
      name: 'Biblioteca',
      component: () => import('../views/BibliotecaAlumno.vue'),
    },
    {
      path: '/Pendientes',
      name: 'Pendientes',
      component: () => import('../views/PendientesAlumno.vue'),
    },
    {
      path: '/Cursos/:courseName/Taller',
      name: 'TallerCurso',
      component: () => import('../components/FormularioBase.vue'),
    },
  ],
});

export default router;