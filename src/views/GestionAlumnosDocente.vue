<template>
    <Header />

    <div class="general__container">
        <div class="management__container">
            <div class="upper__elements">
                <RouterLink to="/"><img src="../assets/return.png" class="return"></RouterLink>
                <h1>Gestión Alumnos: {{ level }}</h1>
            </div>
            <div class="list__container">
                <ul>
                    <li v-for="(student, index) in filteredStudents" :key="index">
                        <input type="checkbox" class="checkbox" :checked="student.isEnrolled" @change="toggleEnrollment(student)" />
                        {{ student.Name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import Header from '../components/TeacherHeader.vue';

const route = useRoute();
const level = ref(route.params.level);

const students = ref([]);

const fetchStudents = async () => {
    try {
        const response = await axios.get('http://localhost:3000/students');
        students.value = response.data;
    } catch (error) {
        console.error('Error fetching students:', error);
    }
};

const filteredStudents = computed(() => {
    return students.value.filter(student => student["Academic Level"] === level.value);
});

const toggleEnrollment = async (student) => {
    student.isEnrolled = !student.isEnrolled;

    try {
        await axios.patch(`http://localhost:3000/students/${student.id}`, { isEnrolled: student.isEnrolled });
    } catch (error) {
        console.error('Error updating enrollment status:', error);
    }
};

onMounted(() => {
    fetchStudents();
});
</script>

<style scoped>
.general__container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.management__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    box-shadow: 7px 7px 7px 7px #d6d6d6;
    width: 75%;
    gap: 50px;
}

.upper__elements {
    display: flex;
    align-items: center;
    width: 100%;
}

.upper__elements h1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.return {
    width: 50px;
    height: 50px;
    margin-left: 20px;
    transition: transform 0.12s ease;
}

.return:hover {
    transform: scale(1.1);
}

.list__container {
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
}

.checkbox {
    width: 40px;
    height: 40px;
    cursor: pointer;
}


</style>
