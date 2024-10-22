<template>
    <Header />
    <div class="general__container">
      <div class="courselist__container">
        <CourseCard
          v-for="(course, index) in courses"
          :key="index"
          :image="course.image"
          :courseName="course.courseName"
          :teacherName="course.teacherName"
          :level="course.level"
        />
      </div>
    </div>
  </template>

  <script setup>
  import CourseCard from '../components/CourseCard.vue';
  import Header from '../components/TeacherHeader.vue'
  import course1 from '../assets/course-1.png';
  import course2 from '../assets/course-2.png';
  import course3 from '../assets/course-3.png';
  import course4 from '../assets/course-4.png';


  const courses = [
    {
      image: course1,
      courseName: 'Historia y Geografía',
      teacherName: 'Prof. Frederick Fazbear',
      level: '6° Básico'
    },
    {
      image: course2,
      courseName: 'Geografía e Historia',
      teacherName: 'Prof. Frederick Fazbear',
      level: '7° Básico'
    },
    {
      image: course3,
      courseName: 'Ciencias Sociales',
      teacherName: 'Prof. Frederick Fazbear',
      level: '2° Medio'
    },
    {
      image: course4,
      courseName: 'Geografía y Ciencias Sociales',
      teacherName: 'Prof. Frederick Fazbear',
      level: '4° Medio'
    }
  ];
  </script>

  <style scoped>

  .courselist__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 60px;
    column-gap: 50px;
  }


  </style>
