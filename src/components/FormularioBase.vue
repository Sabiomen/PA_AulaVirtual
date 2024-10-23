<template>
    <body class="principal-alumno-body">
      <HeaderAlumno />
      <main>
        <div v-if="workshopData" class="form-card">
          <div class="top-left-icon">
            <router-link :to="workshopData.returnCurso">
              <img src="../assets/return.png" alt="Regresar" />
            </router-link>
          </div>
          <div class="questions-section">
            <div class="question">
              <p>{{ workshopData.pregunta1 }}</p>
              <div class="options">
                <div class="option">{{ workshopData.respuesta1 }}</div>
                <div class="option">{{ workshopData.respuesta2 }}</div>
                <div class="option">{{ workshopData.respuesta3 }}</div>
                <div class="option">{{ workshopData.respuesta4 }}</div>
              </div>
            </div>
            <div class="question">
              <p>{{ workshopData.pregunta2 }}</p>
              <div class="options">
                <div class="option">{{ workshopData.respuesta5 }}</div>
                <div class="option">{{ workshopData.respuesta6 }}</div>
                <div class="option">{{ workshopData.respuesta7 }}</div>
                <div class="option">{{ workshopData.respuesta8 }}</div>
              </div>
            </div>
          </div>
          <div class="side-section">
            <p class="section-title">Preguntas</p>
            <div class="question-grid">
              <div class="grid-item" v-for="n in 12" :key="n">{{ n }}</div>
            </div>
            <router-link :to="workshopData.returnCurso">
              <button class="finish-button">Terminar</button>
            </router-link>
          </div>
        </div>
        <div v-else>
          <p>No se pudo cargar la información del taller.</p>
        </div>
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
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import database from '../database.json';

const route = useRoute();
const workshopData = computed(() => {
  return database.workshops.find(
    workshop => workshop.workshopCourse === route.params.courseName
  );
});
</script>
<style scoped>
.form-card {
    width: 70%;
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    position: relative;
}

.top-left-icon {
    position: absolute;
    top: 15px;
    left: 15px;
    
}

.top-left-icon img {
    width: 30x;
    height: 30px;
}

.questions-section {
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.question {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

.options {
    display: flex;
    flex-direction: column; 
    gap: 15px; 
    margin-top: 10px; 
}

.option {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 10px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    text-align: right;
    min-width: 100px;
}


.side-section {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-title {
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.question-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-bottom: 20px;
}

.grid-item {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.finish-button {
    padding: 10px 20px;
    border-radius: 30px;
    background-color: #0E86D4;
    color: #ffffff;
    font-size: 16px;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 200px;
}

.finish-button a {
    text-decoration: none;
    color: white;}

.finish-button:hover {
    background-color: #0d6efd;
}



</style>
