<template>
  <body class="principal-alumno-body">
    <HeaderAlumno />
    <main class="principal-alumno-main">
      <router-link
        v-for="(course, index) in courses"
        :key="index"
        :to="{ name: 'CourseDetail', params: { courseName: course.courseName } }"
        class="class-card"
      >
        <img :src="course.courseImage" :alt="'Logo ' + course.courseName" />
        <div class="class-info">
          <h2>{{ course.courseName }}</h2>
          <p>Prof. {{ course.professorName }}</p>
          <p>2° Medio</p>
        </div>
      </router-link>
    </main>
    <footer>
      <div class="rectangle-container">
        <div class="triangle-right"></div>
      </div>
    </footer>
  </body>
</template>

<script setup>
import HeaderAlumno from '../components/HeaderAlumno.vue';
import db from '../db.json';
const courses = db.courses;

</script>

<style scoped>
body.principal-alumno-body {
    background-color: white;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

main.principal-alumno-main {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-gap: 20px;
    justify-items: center;
    padding: 50px 20px;
}

.class-card {
    display: flex;
    align-items: center;
    width: 300px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
    padding: 15px;
    height: 100px;
    gap: 15px; 
    text-decoration: none;
    color: black;
}

.class-logo img {
    width: 100px;
    height: auto;
    margin-right: 30px;
    border-radius: 20px;
}


.class-card img {
    width: 150px;
    height: 120px;
    border-radius: 10px;
}

.class-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px; 
    
}

.class-info h2 {
    font-size: 16px;
    margin: 0;
}

.class-info p {
    font-size: 14px;
    margin: 0;
}

</style>