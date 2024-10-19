<template>
<body class="principal-alumno-body">
    <HeaderAlumno/>
    <main>
        <div class="profile-card">
            <div class="profile-header">
                <img src="../assets/hagger.jpg" alt="Foto de Perfil" class="profile-picture">
                <div class="profile-info">
                    <div class="info-row">
                        <strong>Alejandro David Prieto Moreno</strong>
                    </div>
                    <div class="info-row">
                        <img src="../assets/graduation-cap.png" alt="Icono rol usuario" class="profile-little-icon">
                        Alumno
                    </div>
                    <div class="info-row">
                        <img src="../assets/book-and-pencil.png" alt="Icono nivel educativo" class="profile-little-icon">
                        2° Medio
                    </div>
                </div>

                <router-link to="/Perfil/Editar" class="edit-icon">
                    <img src="../assets/settings.png" alt="Icono Edicion">
                </router-link>
            </div>

            <div class="enrolled-subjects">
                <h2>Asignaturas Cursadas</h2>
                <ul>
                    <li>Historia y Geografía</li>
                    <li>Matematica y Estadistica</li>
                    <li>Ciencias Sociales</li>
                    <li>Ingles</li>
                </ul>
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
import HeaderAlumno from '../components/HeaderAlumno.vue';


</script>

<style scoped>
.profile-card {
    width: 80%;
    max-width: 800px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    position: relative;
    margin: auto;
}

.profile-header {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.profile-picture {
    width: 100px;
    height: auto;
    border-radius: 20%;
    margin-right: 20px;
}

.profile-info {
    display: flex;
    flex-direction: column;
}

.info-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.info-row img {
    width: 20px;
    height: auto;
    margin-right: 10px;
}

.enrolled-subjects {
    width: 30%; 
    padding-left: 0; 
    padding-top: 20px;
    margin: 0;
}


.enrolled-subjects h2 {
    margin-top: 0;
    margin-bottom: 10px;
}

.enrolled-subjects ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.enrolled-subjects ul li {
    margin-bottom: 10px;
}

.edit-icon {
    display: flex;
    position: absolute;
}

.edit-icon img {
    width: 30px;
    height: auto;
    position: absolute;
    left: 750px;
    bottom: 20px;
}

.profile-little-icon img {
    width: 40px;
    height: auto;
    margin-right: 10px;
}


</style>