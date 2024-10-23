<template>
    <div class="course__container">
        <div class="icons__container">
            <RouterLink :to="`/GestionAlumnosDocente/${level}`">
                <img src="../assets/userManagement.png" alt="course-inscription" class="course__icon" />
            </RouterLink>
            <RouterLink :to="`/GestionCursoDocente/${courseid}`">
                <img src="../assets/settings.png" alt="course-settings" class="course__icon" />
            </RouterLink>
        </div>
        <RouterLink to="/VistaCursoDocente">
            <img :src="image" alt="course-image" class="course__image" />
        </RouterLink>
        <div class="course__info">
            <h2 class="course__name">{{ CourseName }}</h2>
            <p class="teacher__name">{{ teacherName }}</p>
            <p class="course__level">{{ level }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    image: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    teacherName: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    }
});

const CourseName = computed(() => {
    return props.courseName.length > 20
        ? props.courseName.slice(0, 20) + '...'
        : props.courseName;
});
</script>

<style scoped>
.course__container {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 0 1 calc(50% - 20px);
    margin-bottom: 100px;
    max-width: 550px;
    box-shadow: 7px 7px 7px 0px #d6d6d6;
    border-radius: 15px;
}

.icons__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.course__icon {
    width: 30px;
    height: 30px;
    transition: transform 0.12s ease;
}

.course__icon:hover {
    transform: scale(1.1);
}

.course__image {
    width: 150px;
    height: 150px;
    border-radius: 15px;
    transition: transform 0.12s ease;
}

.course__image:hover {
    transform: scale(1.1);
}
</style>
