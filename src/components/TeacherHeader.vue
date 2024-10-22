<template>
    <div class="general__container">
        <div class="header__container">
            <div class="logo__container">
                <RouterLink to="/"><img class="logo" src="../assets/logo.png"></RouterLink>
            </div>
            <div class="buttons__container">
                <RouterLink to="/GestionTextosDocente">Biblioteca</RouterLink>
                <RouterLink to="/VistaCursoDocente">Revisiones</RouterLink>
            </div>
            <div class="user__status">
                <RouterLink to="/PerfilDocente">
                    <img class="profile__icon" :src="profileImage" alt="profile-image">
                </RouterLink>
                <RouterLink to="/Login"><img class="logout" src="../assets/logout.png"></RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { profileImage } from '../profileState.js';
</script>

<style scoped>
.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%
}

.logo {
    width: 100px;
    height: 100px;
    margin-left: 50px;
    transition: transform 0.12s ease;
}

.logo:hover {
    transform: scale(1.1);

}

.buttons__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 250px;
    width: 100%;
}

.buttons__container a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 1.5rem;
    transition: ease-in-out 0.2s;
}

a:hover {
    color: rgba(14, 134, 212, 1.0);
}

.user__status {
    display: flex;
    gap: 35px;
    margin-right: 50px;

}

.profile__icon {
    width: 55px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid rgba(14, 134, 212, 0.4);
    transition: transform 0.12s ease;
}

.profile__icon:hover {
    transform: scale(1.1);
}

.logout {
    width: 50px;
    height: 50px;
    transition: transform 0.12s ease;
}

.logout:hover {
    transform: scale(1.1);
}
</style>
