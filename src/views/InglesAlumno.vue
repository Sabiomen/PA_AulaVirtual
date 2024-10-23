<template>
    <body class="principal-alumno-body">
      <HeaderAlumno />
      <main>
        <AsignaturaAlumno
          courseName="Ingles"
          professorName=" Chelsey Addams"
          courseImage="../src/assets/course-4.png"
          workshop="/Cursos/Ingles/Taller"
          url="src/assets/ApuntesIngles.pdf"
          pdfFile="ApuntesdeIngles.pdf"
          url2="/src/assets/ApuntesIngles.pdf"
          externalUrl="https://www.youtube.com/watch?v=Z6GGAQOMX8c"
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