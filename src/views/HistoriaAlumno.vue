<template>
    <body class="principal-alumno-body">
      <HeaderAlumno />
      <main>
        <AsignaturaAlumno
          courseName="Historia y Geografía"
          professorName=" Erica Worthington"
          courseImage="../src/assets/course-1.png"
          workshop="/Cursos/Historia/Taller"
        />
      </main>
    </body>
</template>
  
<script setup>
  import HeaderAlumno from '../components/HeaderAlumno.vue'
  import AsignaturaAlumno from '../components/AsignaturaAlumno.vue';
  
  </script>
<style scoped>

.principal-alumno-body {
    background-color: white;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}


</style>