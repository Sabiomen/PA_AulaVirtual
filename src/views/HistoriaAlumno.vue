<template>
    <body class="principal-alumno-body">
      <HeaderAlumno />
      <main>
        <AsignaturaAlumno
          courseName="Historia y Geografía"
          professorName=" Erica Worthington"
          courseImage="../src/assets/course-1.png"
          workshop="/Cursos/Historia/Taller"
          url="src/assets/ApuntesHistoria.pdf"
          pdfFile="ApuntesdeHistoria.pdf"
          url2="/src/assets/ApuntesHistoria.pdf"
          externalUrl="https://www.youtube.com/watch?v=99I8tt5ZwKE"
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