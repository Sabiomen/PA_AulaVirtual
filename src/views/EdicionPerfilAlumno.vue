<template>
    <body class="principal-alumno-body">
      <HeaderAlumno />
      <main>
        <div class="edit-profile-card">
          <div class="edit-profile-header">
            <div class="left-section">
              <img :src="currentUser.profileImage" alt="Foto de Perfil" class="edit-profile-picture" />
              <div class="profile-upload">
                <input type="file" @change="handleFileUpload" class="upload-input" />
                <div class="small-icon">
                  <img src="../assets/edit-image.png" alt="Icono pequeño" />
                </div>
              </div>
            </div>
            <form @submit.prevent="saveChanges" class="edit-form">
              <label for="new-password">Nueva Contraseña:</label>
              <input v-model="newPassword" type="password" id="new-password" placeholder="Contraseña..." />
              <label for="confirm-password">Confirmar Contraseña:</label>
              <input v-model="confirmPassword" type="password" id="confirm-password" placeholder="Contraseña..." />
              <div class="form-buttons">
                <button type="button" @click="discardChanges" class="discard-button">Descartar Cambios</button>
                <button type="submit" class="save-button">Guardar Cambios</button>
              </div>
            </form>
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
  import { useAuth } from '../useAuth.js';
  import HeaderAlumno from '../components/HeaderAlumno.vue';
  import { ref } from 'vue';
  
  const { currentUser } = useAuth();
  let newPassword = ref('');
  let confirmPassword = ref('');
  let uploadedFile = null;
  
  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      uploadedFile = file;
      currentUser.profileImage = URL.createObjectURL(file);
    }
  }
  
  function discardChanges() {
    currentUser.profileImage = currentUser.profileImage;
    newPassword.value = '';
    confirmPassword.value = '';
    uploadedFile = null;
  }
  
  function saveChanges() {
    if (newPassword.value && newPassword.value !== confirmPassword.value) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    if (newPassword.value) {
      if (newPassword.value.length >= 6 && newPassword.value.length <= 50) {
        currentUser.password = newPassword.value;
      } else {
        alert('La contraseña debe tener entre 6 y 50 caracteres');
        return;
      }
    }
  
    if (uploadedFile) {
      console.log("Imagen actualizada:", uploadedFile.name);
    }
  
    alert('Cambios guardados correctamente');
  }
  </script>
  
<style scoped>
.edit-profile-card {
    width: 80%;
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.edit-profile-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
}

.left-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.edit-profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 20%;
    margin-bottom: 10px;
}

.profile-upload {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.upload-photo-button {
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    background-color: #fefefe;
    color: #000000;
    font-size: 16px;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.upload-photo-button:hover {
    background-color: #b7b7b7;
}

.small-icon img {
    width: 30px;
    height: 30px;
    margin-bottom: 15px;
}

.edit-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%; 
    margin-right: 130px;
}

.edit-form label {
    margin-top: 15px;
}

.edit-form input {
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    width: 100%;
}

.discard-button, .save-button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.discard-button {
    background-color: #ffffff;
    color: #000;
}

.discard-button:hover {
    background-color: #c5c5c5;
}

.save-button {
    background-color: #0E86D4;
    color: #ffffff;
}

.save-button:hover {
    background-color: #0d6efd;
}

.discard-button-ref{
    text-decoration: none;
    color: black;
}

.save-button-ref{
    text-decoration: none;
    color: white;
}


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
    justify-content: space-between;
    margin-top: 20px;
}

.question {
    margin-bottom: 30px;
}

.options {
    display: flex;
    flex-direction: column; 
    gap: 10px;
    margin-top: 10px;
}

.option {
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: #000000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
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