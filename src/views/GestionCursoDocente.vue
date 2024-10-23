<template>
    <Header />

    <div class="general__container">
        <div class="edit__container">
            <h1>Gestión del Curso</h1>

            <div class="edit__input">
                <label for="newCourseName">Nuevo nombre del curso</label>
                <input id="newCourseName" class="name__input" v-model="newCourseName" type="text"
                    placeholder="Ingrese el nuevo nombre del curso" />
            </div>

            <div class="edit__image">
                <div v-if="image" class="image__placeholder">
                    <img :src="image" alt="course image" class="uploaded__image" />
                </div>
                <input type="file" @change="handleImageUpload" />
                <button @click="removeImage">Subir Foto</button>
            </div>

            <div class="edit__buttons">
                <button class="delete__button" @click="discardChanges">Descartar Cambios</button>
                <button class="post__button" @click="saveChanges">Guardar Cambios</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import Header from '../components/TeacherHeader.vue';

const route = useRoute();
const router = useRouter();
const newCourseName = ref('');
const image = ref(null);
const originalImage = ref(null);

const courseLevel = route.params.level;

const fetchCourseData = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/courses/${courseLevel}`);
        const course = response.data;
        newCourseName.value = course.courseName;
        originalImage.value = course.image;
        image.value = originalImage.value;
    } catch (error) {
        console.error('Error al obtener los datos del curso:', error);
    }
};

fetchCourseData();

const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            image.value = reader.result;
        };
        reader.readAsDataURL(file);
    }
};

const removeImage = () => {
    image.value = originalImage.value;
};

const discardChanges = () => {
    newCourseName.value = '';
    image.value = originalImage.value;
    router.push('/');
};

const saveChanges = async () => {
    try {
        const updatedCourse = {
            courseName: newCourseName.value || originalImage.value.courseName,
            image: image.value,
        };

        await axios.put(`http://localhost:3000/courses/${courseLevel}`, updatedCourse);
        router.push('/');
    } catch (error) {
        console.error('Error al guardar los cambios del curso:', error);
    }
};
</script>

<style scoped>
.general__container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.edit__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
    border-radius: 15px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.edit__buttons {
    display: flex;
    gap: 50px;
    margin-bottom: 20px;
}

.delete__button {
    background: white;
    border-radius: 15px;
    width: 150px;
    height: 30px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    border: 2px solid #ff0000;
    color: #f44336;
}

.delete__button:hover {
    background-color: #ff0000;
    color: white;
    transform: scale(1.05);
}

.post__button {
    color: white;
    background: #0E86D4;
    border-radius: 15px;
    width: 150px;
    height: 30px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    border: 2px solid #0E86D4;
}

.post__button:hover {
    background-color: #065A9E;
    transform: scale(1.05);
}
</style>
