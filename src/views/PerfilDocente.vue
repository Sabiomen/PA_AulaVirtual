<template>
    <Header />

    <div class="general__container">
        <div class="profile__container">
            <div class="navigation__container">
                <RouterLink to="/"><img src="../assets/return.png" class="navigation__icon">
                </RouterLink>
                <RouterLink to="/EdicionPerfilDocente"><img src="../assets/settings.png" class="navigation__icon">
                </RouterLink>
            </div>
            <div class="profile__info">
                <div class="profile__image">
                    <img :src="profileImage" class="profile__picture" alt="profile-picture">
                </div>
                <div class="profile__details">
                    <h2>Frederick Fitzgerald Fazbear</h2>
                    <p><img src="../assets/graduation-cap.png" class="paragraph__image"><strong>Docente</strong></p>
                    <p><img src="../assets/book-and-pencil.png" class="paragraph__image">Historia y Geografía</p>
                </div>
            </div>
            <div class="courses__list">
                <h3>Cursos:</h3>
                <ul>
                    <li v-for="course in courses" :key="course.courseName">
                        <RouterLink :to="'/VistaCursoDocente/' + course.courseName">{{ course.courseName }}: {{
                            course.level }}</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Header from '../components/TeacherHeader.vue';
import { profileImage } from '../profileState';

const courses = ref([]);

const fetchCourses = async () => {
    try {
        const response = await axios.get('http://localhost:3000/courses');
        courses.value = response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
};

onMounted(() => {
    fetchCourses();
});

</script>


<style scoped>
.general__container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile__container {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 7px 7px 7px 7px #d6d6d6;
    width: 75%;
}

.navigation__container {
    display: flex;
    align-items: center;
    gap: 1000px;
}

.navigation__icon {
    width: 50px;
    height: 50px;
    transition: transform 0.12s ease;
}

.navigation__icon:hover {
    transform: scale(1.1);
}

.profile__info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
}

.profile__image {
    display: flex;
    align-items: center;
    justify-content: left;
}

.profile__picture {
    width: 350px;
    height: 300px;
    border-radius: 15px;
    border: solid 3px rgba(14, 134, 212, 0.4);
}

.profile__details {
    font-size: 1.4rem;
}

.profile__details p {
    display: flex;

}

.paragraph__image {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.courses__list {
    font-size: 1.4rem;
}

a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    transition: ease-in-out 0.2s;
}

a:hover {
    color: rgba(14, 134, 212, 1.0);
}
</style>
