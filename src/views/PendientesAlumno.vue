<template>
    <body class="principal-alumno-body">
      <HeaderAlumno />
        <div class="pendientes-list">
          <ul>
          <h2>Ciencias Sociales</h2>
          <router-link to="/Cursos/Ciencias/Taller"><li>Cuestionario Diagnostico Ciencias Sociales</li></router-link>
          <router-link to="/Cursos/Ciencias/Taller"><li>Cuestionario Reforzamiento Ciencias Sociales</li></router-link>
          <router-link to="/Cursos/Ciencias/Taller"><li>Prueba Teorica 1 Ciencias Sociales</li></router-link>
          <h2>Historia y Geografía</h2>
          <router-link to="/Cursos/Historia/Taller"><li>Cuestionario Diagnostico Historia y Geografía</li></router-link>
          <router-link to="/Cursos/Historia/Taller"><li>Cuestionario Reforzamiento Historia y Geografía</li></router-link>
          <router-link to="/Cursos/Historia/Taller"><li>Prueba Teorica 1 Historia y Geografía</li></router-link>
          <h2>Ingles</h2>
          <router-link to="/Cursos/Ingles/Taller"><li>Cuestionario Diagnostico Ingles</li></router-link>
          <router-link to="/Curso/Ingles/Taller"><li>Cuestionario Reforzamiento Ingles</li></router-link>
          <router-link to="/Curso/Ingles/Taller"><li>Prueba Teorica 1 Ingles</li></router-link>
          <h2>Matematica y Estadistica</h2>
          <router-link to="/Cursos/Matematica/Taller"><li>Cuestionario Diagnostico Matematica y Estadistica</li></router-link>
          <router-link to="/Cursos/Matematica/Taller"><li>Cuestionario Reforzamiento Matematica y Estadistica</li></router-link>
          <router-link to="/Cursos/Matematica/Taller"><li>Prueba Teorica 1 Matematica y Estadistica</li></router-link>
        </ul>
        </div>
    </body>
</template>

<script setup>
import HeaderAlumno from '../components/HeaderAlumno.vue';

</script>

<style scoped>
.pendientes-list{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  text-decoration: none;
  color: black; 
}
a {
    color: inherit;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
