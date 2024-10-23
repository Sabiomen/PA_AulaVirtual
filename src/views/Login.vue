<template>
  <body class="login-body">
    <header>
      <router-link to="/" class="logo">
        <img src="../assets/logo_forlife.png" alt="Logo Escuela For Life">
      </router-link>
      
      <router-link to="/" class="login-section">
        <span><strong>Login</strong></span>
        <i class="login-icon"><img src="../assets/icono.jpg" alt="Icono login"></i>
      </router-link>
    </header>
    <main class="login-main">  
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <h2>RUT</h2>
          <div class="input-container">
            <input type="text" id="rut" v-model="rut" name="rut" placeholder="Ingresa tu RUT" required />
          </div>
        </div>
        <div class="form-group">
          <h2>Contraseña</h2>
          <div class="input-container">
            <input type="password" id="password" v-model="password" name="password" placeholder="Ingresa tu contraseña" required />
          </div>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </main>
    
    <footer>
      <div class="rectangle-container">
        <div class="triangle-right"></div>
      </div>
    </footer>
  </body>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '../useAuth.js';
import { useRouter } from 'vue-router';

const { login } = useAuth();
const router = useRouter();

const rut = ref('');
const password = ref('');

async function handleLogin() {
  try {
    const user = await login(rut.value, password.value);
    if (user) {
      if (user.role === 'Docente') {
        router.push('/PrincipalDocente');
      } else if (user.role === 'Alumno') {
        router.push('/PrincipalAlumno');
      } else {
        alert('Rol de usuario no reconocido');
      }
    } else {
      alert('RUT o contraseña incorrectos');
    }
  } catch (error) {
    console.error('Error en el proceso de inicio de sesión:', error);
    alert('Hubo un problema al intentar iniciar sesión');
  }
}
</script>

<style scoped>

.login-body {
    background-color: white;
    margin: 0;
    padding: 0;
}

.login-main {
    text-align: center;
    margin-top: 50px;
    margin-top: 20px;
}
.login-main h2 { 
    font-size: 16px;
    flex-shrink: 0; 

    width: 100px; 
}

.login-section {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: black;
}

.login-section span {
    margin-right: 5px;
    font-size: 18px;
}

.login-icon {
    font-size: 20px;
    padding-right: 50px;
}

.login-icon img {
    width: 60px;
    height: auto;
    padding-right: 10px;
    border-radius: 0%;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-group {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
    width: 480px; 
}

.form-group h2 {
    font-size: 16px;
    width: 100px; 
    margin-right: 30px; 
    text-align: left;
}

.input-container {
    flex-grow: 1;
}

.input-container input {
    width: 100%; 
    padding: 12px;
    border-radius: 20px;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    outline: none;
}

.input-container input::placeholder {
    color: #999;
}

button {
    padding: 10px 30px;
    width: 200px;
    border: none;
    border-radius: 20px;
    background-color: #0E86D4;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-top: 30px;
}

button:hover {
    background-color: #095a8f;
}

</style>