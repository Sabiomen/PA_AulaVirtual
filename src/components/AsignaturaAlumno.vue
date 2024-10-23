<template>
<HeaderAlumno />
<div v-if="subjectData" class="course-card">
    <div class="course-header">
      <router-link to="/Cursos" class="back-button">
        <img src="../assets/return.png" alt="Volver" />
      </router-link>
      <div class="class-logo">
        <img :src="subjectData.subjectImage" alt="Logo de la clase" />
      </div>
      <div class="class-info">
        <h2>{{ subjectData.subjectName }}</h2>
        <p>Prof. {{ subjectData.professorName }}</p>
      </div>
    </div>
      <div class="course-content">
        <div class="left-column">
          <h3>Contenidos del Curso</h3>
          <div class="content-section">
            <router-link :to="{ name: 'TallerCurso', params: { subjectName } }" class="content-icon">
              <img src="../assets/survey.png" alt="Icono contenido">
            <div class="content-text">
              <p>Cuestionario Diagnostico</p>
            </div>
          </router-link>
          </div>
          <div class="content-section">
            <a :href="subjectData.url" :download="subjectData.pdfFile">
              <div class="content-icon">
                <img src="../assets/pdf-file.png" alt="Icono contenido">
              </div>
              <div class="content-text">
                <p>Apuntes Materia Clase</p>
              </div>
            </a>
          </div>
          <div class="content-section">
            <a :href="subjectData.url" target="_blank" rel="noopener noreferrer">
              <div class="content-icon">
                <img src="../assets/external-link.png" alt="Icono contenido">
              </div>
              <div class="content-text">
                <p>Documento Materia</p>
              </div>
            </a>
          </div>
          <div class="content-section">
            <router-link :to="{ name: 'TallerCurso', params: { subjectName } }" class="content-icon">
                <img src="../assets/survey.png" alt="Icono contenido">
              <div class="content-text">
                <p>Cuestionario Reforzamiento</p>
              </div>
          </router-link>
          </div>
          <div class="content-section">
            <div class="content-icon">
              <a :href="subjectData.externalUrl" target="_blank" rel="noopener noreferrer">
                <div class="content-icon">
                  <img src="../assets/external-link.png" alt="Icono contenido">
                </div>
                <div class="content-text">
                  <p>Video Materia</p>
                </div>
              </a>
            </div>
          </div>
          <div class="content-section">
            <router-link :to="subjectData.workshop" class="content-icon">
              <img src="../assets/survey.png" alt="Icono contenido">
            <div class="content-text">
              <p>Prueba Teorica 1</p>
            </div>
          </router-link>
          </div>
        </div>
        
        <div class="right-column">
          <h3>Planificación Semestral</h3>
          <div class="content-section">
            <div class="content-icon">
              <img src="../assets/lightbulb.png" alt="Icono contenido">
            </div>
            <div class="content-text">
              <p>Taller 1: 3 de Septiembre</p>
            </div>
          </div>
          <div class="content-section">
              <div class="content-icon">
                <img src="../assets/lightbulb.png" alt="Icono contenido">
              </div>
              <div class="content-text">
                <p>Prueba 1: 10 de Septiembre</p>
              </div>
            </div>
          <div class="content-section">
              <div class="content-icon">
                <img src="../assets/lightbulb.png" alt="Icono contenido">
              </div>
              <div class="content-text">
                <p>Taller 2: 25 de Septiembre</p>
              </div>
           </div>
          <div class="content-section">
              <div class="content-icon">
                  <img src="../assets/lightbulb.png" alt="Icono contenido">
              </div>
              <div class="content-text">
                <p>Prueba 2: 9 de Octubre</p>
              </div>
            </div>  
            <div class="content-section">
              <div class="content-icon">
                <img src="../assets/lightbulb.png" alt="Icono contenido">
              </div>
              <div class="content-text">
                  <p>Taller 3: 23 de Octubre</p>
              </div>
            </div>
            <div class="content-section">
              <div class="content-icon">
                <img src="../assets/lightbulb.png" alt="Icono contenido">
              </div>
              <div class="content-text">
                  <p>Prueba 3: 12 de Noviembre</p>
              </div>
            </div>
        </div>
      </div>
      
    </div>
    <div v-else>
    <p>No se pudo cargar la información de la asignatura.</p>
  </div>
  <footer>
        <div class="rectangle-container">
            <div class="triangle-right"></div>
        </div>
    </footer>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import db from '../db.json';
  import { useRoute } from 'vue-router';
  import HeaderAlumno from '../components/HeaderAlumno.vue'
  
  const route = useRoute();
  
  const subjectData = computed(() => {
    return db.subjects.find(
      subject => subject.subjectName === route.params.subjectName
    );
  });
  </script>
  
  <style scoped>
  .course-card {
    width: 80%;
    max-width: 1200px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    padding: 20px;
    margin: auto;
  }
  
  .course-header {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #E8E8E8;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  
  .back-button img {
    width: 30px;
    height: auto;
    margin-right: 20px;
  }
  
  .class-logo img {
    width: 100px;
    height: auto;
    margin-right: 20px;
  }
  
  .course-content {
    display: flex;
    justify-content: space-between;
  }
  
  .left-column, .right-column {
    width: 48%;
  }
  
  .left-column h3, .right-column h3 {
    margin: 0;
    margin-bottom: 10px;
  }
  
  .content-section {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    text-decoration: none;
    color: black;
  }
  .content-section a {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    text-decoration: none;
    color: black;
  }
  .content-icon img {
    width: 40px;
    height: auto;
    margin-right: 10px;
  }
  
  .content-text p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
  </style>