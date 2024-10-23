<template>
    <Header />

    <div class="general__container">
        <div class="creation__container">
            <h1 class="creation__title">Creación Curso</h1>

            <div class="creation__inputs">
                <div class="input__group">
                    <label for="courseName">Nombre del Curso</label>
                    <input id="courseName" class="name__input" v-model="courseName" type="text"
                        placeholder="Ingrese el nombre del curso" required />
                </div>

                <div class="select__group">
                    <label for="levels">Nivel Académico</label>
                    <select id="levels" class="course__select" v-model="selectedLevel" required>
                        <optgroup label="Enseñanza Básica">
                            <option value="6° Básico">1° Básico</option>
                            <option value="6° Básico">2° Básico</option>
                            <option value="6° Básico">3° Básico</option>
                            <option value="6° Básico">4° Básico</option>
                            <option value="6° Básico">5° Básico</option>
                            <option value="6° Básico">6° Básico</option>
                            <option value="7° Básico">7° Básico</option>
                            <option value="8° Básico">8° Básico</option>
                        </optgroup>
                        <optgroup label="Enseñanza Media">
                            <option value="1° Medio">1° Medio</option>
                            <option value="2° Medio">2° Medio</option>
                            <option value="3° Medio">3° Medio</option>
                            <option value="4° Medio">4° Medio</option>
                        </optgroup>
                    </select>
                </div>
            </div>

            <div class="creation__image">
                <div v-if="image" class="image__placeholder">
                    <img :src="image" alt="course image" class="uploaded__image" />
                </div>
                <input type="file" @change="handleImageUpload" />
                <button @click="removeImage">Eliminar imagen</button>
            </div>

            <div class="creation__buttons">
                <button class="delete__button" @click="discardChanges">Descartar Cambios</button>
                <button class="post__button" @click="saveCourse">Guardar Cambios</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Header from '../components/TeacherHeader.vue';

const router = useRouter();
const courseName = ref('');
const selectedLevel = ref('');
const image = ref(null);

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
    image.value = null;
};

const discardChanges = () => {
    courseName.value = '';
    selectedLevel.value = '';
    image.value = null;
    router.push('/');
};

const saveCourse = async () => {
    if (courseName.value && selectedLevel.value && image.value) {
        const newCourse = {
            image: image.value,
            courseName: courseName.value,
            teacherName: "Prof. Frederick Fazbear",
            level: selectedLevel.value,
        };

        try {
            await axios.post('http://localhost:3000/courses', newCourse);
            router.push('/');
        } catch (error) {
            console.error('Error al guardar el curso:', error);
        }
    } else {
        alert('Por favor complete todos los campos antes de guardar.');
    }
};
</script>

<style scoped>
.general__container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.creation__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 75%;
    border-radius: 15px;
    min-height: 82vh;
    box-shadow: 7px 7px 7px 7px #d6d6d6;
}

.creation__inputs {
    display: flex;
    flex-direction: row;
    gap: 70px;
}

.input__group {
    display: flex;
    gap: 10px;
}

.name__input {
    width: 300px;
    height: 30px;
    border-radius: 15px;
    padding: 0 10px;
    border: 1px solid #d6d6d6;
}

.select__group {
    display: flex;
    gap: 10px;
}

.course__select {
    width: 300px;
    height: 30px;
    border-radius: 15px;
    padding: 0 10px;
    border: 1px solid #d6d6d6;
}

.creation__image {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.uploaded__image {
    display: flex;
    width: 200px;
    height: 200px;
    border-radius: 15px;
}

.creation__buttons {
    display: flex;
    gap: 50px;
    margin-bottom: 20px;
    margin-top: auto;
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
