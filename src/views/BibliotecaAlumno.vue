<template>
    <body class="principal-alumno-body">
      <HeaderAlumno/>
      <main>
        <div class="library-card">
          <div class="top-left-icon">
            <router-link to="/Cursos">
              <img src="../assets/return.png" alt="Regresar">
            </router-link>
          </div>
          <div class="title-section">
            <h1>Biblioteca Virtual</h1>
          </div>
          
          <div class="content-sections">
            <div class="new-entries">
              <div class="entry-grid">
                <div v-for="book in filteredBooks" :key="book.id" class="entry-item">
                  <img :src="book.image" :alt="'Entrada ' + book.id">
                  <div class="entry-info">
                    <p><strong>{{ book.title }}</strong></p>
                    <p>{{ book.author }}</p>
                    <div class="entry-actions">
                      <a :href="book.pdfPath" :download="book.downloadName">
                        <img src="../assets/pdf-file.png" alt="icono pdf">
                        <p><strong>Descargar PDF</strong></p>
                      </a>
                      <a :href="book.pdfPath" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/fileread.png" alt="icono leer archivo">
                        <p><strong>Leer Entrada</strong></p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="divider"></div>
  
            <div class="filter-column">
              <h2>Filtrar</h2>
              <ul class="filter-options">
                <li @click="filterByType('')" :class="{active: currentFilter === ''}"><strong>Todos</strong></li>
                <li v-for="type in types" :key="type" @click="filterByType(type)" :class="{active: currentFilter === type}">{{ type }}</li>
              </ul>
            </div>
          </div>
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
import { ref, computed, onMounted } from 'vue';
import HeaderAlumno from '../components/HeaderAlumno.vue';
import db from '../db.json'; 

const books = ref([]);
const types = ref(["Estudiantil", "Lectura Casual", "Estudio"]);
const currentFilter = ref('');

onMounted(() => {
  books.value = db.books;
});

const filterByType = (type) => {
  currentFilter.value = type;
};

const filteredBooks = computed(() => {
  if (!currentFilter.value) return books.value;
  return books.value.filter(book => book.type === currentFilter.value);
});
</script>
<style scoped>
.library-card {
    width: 80%;
    max-width: 900px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
}

.library-card .top-left-icon {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
}

.title-section {
    text-align: center;
    margin-bottom: 20px;
}

.new-entries, .subject-section {
    margin-top: 30px;
}

.new-entries h2, .subject-section h2 {
    margin-bottom: 20px;
}

.entry-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px; 
}

.entry-item {
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    background-color: #f9f9f9;
}

.entry-item img {
    width: 120px; 
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.entry-info {
    margin-left: 15px;
    flex: 1;
}

.entry-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin-top: 10px;
}

.entry-actions img {
    width: 30px;
    height: 30px;

}

.filter-column {
    width: 200px;
    padding: 10px;
    background-color: #f9f9f9;
    border-left: 2px solid #ddd;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: absolute;
    right:-200px; 
    top: 20px; 
    height: 898px; 
}

.filter-column h2 {
    margin: 0;
    margin-bottom: 10px;
}

.filter-options {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.filter-options li {
    margin-bottom: 10px;
}


.divider {
    width: 2px; 
    background-color: #ddd;
    position: absolute;
    top: 20px;
    right:-200px;
    height: 898px; 
}

a {
    color: inherit;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>