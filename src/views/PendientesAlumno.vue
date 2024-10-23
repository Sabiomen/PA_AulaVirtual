<template>
  <body class="principal-alumno-body">
    <HeaderAlumno />
    <main>
      <div class="pendientes-list">
        <ul v-for="(course, index) in courses" :key="index">
          <h2>{{ course.courseName }}</h2>
          <li v-for="(task, idx) in tasks" :key="idx">
            <router-link :to="`${course.workshop}`">
              {{ `${task} ${course.courseName}` }}
            </router-link>
          </li>
        </ul>
      </div>
    </main>
  </body>
</template>

<script setup>
import HeaderAlumno from '../components/HeaderAlumno.vue';
import db from '../db.json';

const courses = db.courses;

const tasks = [
  "Cuestionario Diagnostico",
  "Cuestionario Reforzamiento",
  "Prueba Teorica 1"
];
</script>
<style scoped>
.pendientes-list{
  display: flex;
  flex-direction: column;
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
