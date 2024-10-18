<template>

<body class="principal-alumno-body">




    
    <main class="principal-alumno-main">

<div class="class-card">
    <img src="/PA_Avance-AulaVirtual/assets/course-1.png" alt="Logo Clase 1">
    <div class="class-info">
        <h2>Historia y Geografía</h2>
        <p>Prof. Erica Worthington</p>
        <p>2° Medio</p>
    </div>
</div>

<div class="class-card">
    <img src="/PA_Avance-AulaVirtual/assets/course-2alt.png" alt="Logo Clase 2">
    <div class="class-info">
        <h2>Matematica y Estadistica</h2>
        <p>Prof. Richard Hanson</p>
        <p>2° Medio</p>
    </div>
</div>

<a href="CursoAlumno.html"  class="class-card">
    <img src="/PA_Avance-AulaVirtual/assets/course-3.png" alt="Logo Clase 3">
    <div class="class-info">
        <h2>Ciencias Sociales</h2>
        <p>Prof. Frederick Fitzgerald Fazbearington</p>
        <p>2° Medio</p>
    </div>
</a>

<div class="class-card">
    <img src="/PA_Avance-AulaVirtual/assets/course-4.png" alt="Logo Clase 4">
    <div class="class-info">
        <h2>Ingles</h2>
        <p>Prof. Chelsey Addams</p>
        <p>2° Medio</p>
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

<style scoped>
body.principal-alumno-body {
    background-color: white;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

main.principal-alumno-main {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-gap: 20px;
    justify-items: center;
    padding: 50px 20px;
}

.class-card {
    display: flex;
    align-items: center;
    width: 300px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
    padding: 15px;
    height: 100px;
    gap: 15px; 
    text-decoration: none;
    color: black;
}

.class-logo img {
    width: 100px;
    height: auto;
    margin-right: 30px;
    border-radius: 20px;
}


.class-card img {
    width: 150px;
    height: 120px;
    border-radius: 10px;
}

.class-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px; 
    
}

.class-info h2 {
    font-size: 16px;
    margin: 0;
}

.class-info p {
    font-size: 14px;
    margin: 0;
}

</style>