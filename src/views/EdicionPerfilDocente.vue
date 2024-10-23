<template>
    <Header />

    <div class="general__container">
        <div class="edition__container">
            <div class="picture__container">
                <div class="picture__action">
                    <img :src="profileImage" alt="profile-image" class="profile__image">
                    <div class="action__container">
                        <input type="file" @change="handleFileUpload" class="upload__input">
                    </div>
                </div>
            </div>

            <div class="form__container">
                <form class="edition__form">
                    <label for="password">Nueva Contraseña</label>
                    <input v-model="newPassword" type="password" id="password" class="edition__input">

                    <label for="confirmPassword">Repetir Contraseña</label>
                    <input v-model="confirmPassword" type="password" id="confirmPassword" class="edition__input">
                </form>
            </div>

            <div class="buttons__container">
                <button @click="discardChanges" class="delete__button">Descartar Cambios</button>
                <button @click="saveChanges" class="post__button">Guardar Cambios</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { profileImage } from '../profileState.js';
import Header from '../components/TeacherHeader.vue';

const userId = 1;
let selectedFile = null;
const newPassword = ref('');
const confirmPassword = ref('');
const previousImage = ref(profileImage.value);

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        selectedFile = file;
        profileImage.value = URL.createObjectURL(file);
    }
};

const discardChanges = () => {
    profileImage.value = previousImage.value;
    newPassword.value = '';
    confirmPassword.value = '';
    selectedFile = null;
};

const saveChanges = async () => {
    if (newPassword.value && newPassword.value !== confirmPassword.value) {
        alert("Las contraseñas no coinciden");
        return;
    }

    const formData = new FormData();
    if (selectedFile) {
        formData.append('profileImage', selectedFile);
    }

    const updateData = {};
    if (newPassword.value) {
        if (newPassword.value.length >= 6 && newPassword.value.length <= 50) {
            updateData.password = newPassword.value;
        } else {
            alert("La contraseña debe tener entre 6 y 50 caracteres");
            return;
        }
    }

    try {
        await axios.patch(`http://localhost:3000/users/${userId}`, {
            ...updateData,
            profileImage: selectedFile ? `/src/assets/${selectedFile.name}` : profileImage.value
        });

        previousImage.value = profileImage.value;
        alert('Cambios guardados correctamente');
    } catch (error) {
        console.error("Error al guardar los cambios:", error);
    }
};
</script>

<style scoped>
.general__container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.edition__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 7px 7px 7px 7px #d6d6d6;
    border-radius: 15px;
    width: 75%;
    gap: 50px;
}

.edition__icon {
    width: 30px;
    height: 30px;
}

.picture__container {
    display: flex;
    margin-top: 54px;

}

.picture__action {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}

.profile__image {
    width: 250px;
    height: 200px;
    border-radius: 15px;
    border: solid 3px rgba(14, 134, 212, 0.4);
}

.action__container {
    display: flex;
    width: 60%;
}

.form__container {
    display: flex;
    align-items: center;
}

.edition__form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.edition__form input {
    border-radius: 15px;
    width: 200px;
    height: 25px;
}


.buttons__container {
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
