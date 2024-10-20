<template>
    <body class="principal-alumno-body">
      <HeaderAlumno />
      <main>
        <AsignaturaAlumno
          courseName="Ciencias Sociales"
          professorName=" Frederick Fitzgerald Fazbearington"
          courseImage="../src/assets/course-3.png"
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