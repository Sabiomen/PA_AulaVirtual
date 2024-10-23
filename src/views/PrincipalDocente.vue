<template>
    <Header />
    <div class="general__container">
        <RouterLink to="/CreacionCursoDocente"><img src="../assets/add-element.png" class="add__element">
        </RouterLink>
        <div class="courselist__container">
            <CourseCard v-for="(course, index) in courses" :key="index" :image="course.image"
                :courseName="course.courseName" :teacherName="course.teacherName" :level="course.level" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import CourseCard from "../components/CourseCard.vue";
import Header from "../components/TeacherHeader.vue";

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

.add__element {
    width: 50px;
    height: 50px;
    position: fixed;
    left: 50px;
    cursor: pointer;
}

.courselist__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 60px;
    column-gap: 50px;
}
</style>
