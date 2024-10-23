<template>
    <header>
      <router-link to="/Cursos" class="logo">
        <img src="../assets/logo_forlife.png" alt="Logo Escuela For Life">
      </router-link>
      <nav class="nav-links">
        <RouterLink to="/Biblioteca"><strong>Biblioteca </strong></RouterLink>
        <RouterLink to="/Pendientes"><strong>Pendientes</strong></RouterLink>
      </nav>
      <router-link to="/Perfil" class="profile-section">
        <img :src="activeUserProfileImage" class="profile-icon" alt="Foto de Perfil" />
      </router-link>
      <router-link to="/" class="logout-section">
        <img src="../assets/logout.png" class="logout-icon" alt="Icono Logout">
      </router-link>
    </header>
  </template>
  
<script setup>
import { ref } from 'vue';
import database from '../database.json';

const activeUserId = 1;

const activeUser = database.alumns.find(user => user.id === activeUserId);

const activeUserProfileImage = ref(activeUser ? activeUser.profileImage : '../assets/default-profile.jpg');
</script>


<style>

.nav-links {
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: black;
    padding: 20px 30px;
    font-size: 20px;
}

.profile-section {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
}

.profile-icon {
    font-size: 20px;
    margin-right: 50px;
    width: 45px;
    height: auto;
    border-radius: 100%;
}


.logout-icon {
    font-size: 20px;
    margin-right: 50px;
    width: 45px;
    height: auto;
    border-radius: 0%;
}



</style>