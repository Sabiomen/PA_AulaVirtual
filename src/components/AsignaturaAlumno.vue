<template>
    <div class="course-card">
      <div class="course-header">
        <router-link to="/Cursos" class="back-button">
          <img src="../assets/return.png" alt="Volver">
        </router-link>
        <div class="class-logo">
          <img :img="courseImage" alt="Logo de la clase">
        </div>
        <div class="class-info">
          <h2>{{ courseName }}</h2>
          <p>Prof. {{ professorName }}</p>
        </div>
      </div>
  
      <div class="course-content">
        <div class="left-column">
          <h3>Contenidos del Curso</h3>
          <div class="content-section">
            <div class="content-icon">
              <img src="../assets/pdf-file.png" alt="Icono contenido">
            </div>
            <div class="content-text">
              <p>Apuntes Materia Clase 1</p>
            </div>
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
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { defineProps } from 'vue'
    import { RouterLink } from 'vue-router'
  const props = defineProps({
    courseName: {
      type: String,
      required: true
    },
    professorName: {
      type: String,
      required: true
    },
    courseImage: {
      type: String,
      required: true
    }
  })
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
  
  .content-icon img {
    width: 40px;
    height: auto;
    margin-right: 10px;
  }
  
  .content-text p {
    margin: 0;
  }
  </style>