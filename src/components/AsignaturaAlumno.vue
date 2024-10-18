<template>
    <body class="principal-alumno-body">

        <main>
        <div class="course-card">
            <div class="course-header">
                <a href="PrincipalAlumno.html" class="back-button">
                    <img src="/PA_Avance-AulaVirtual/assets/return.png" alt="Volver">
                </a>
                <div class="class-logo">
                    <img src="/PA_Avance-AulaVirtual/assets/course-3.png" alt="Logo de la clase">
                </div>
                <div class="class-info">
                    <h2>Ciencias Sociales</h2>
                    <p>Prof. Frederick Fitzgerald Fazbearington</p>
                </div>
            </div>

            <div class="course-content">

                <div class="left-column">
                    <h3>Contenidos del Curso</h3>

                    <a href="FormularioAlumno.html" class="content-section">
                        <div class="content-icon">
                            <img src="/PA_Avance-AulaVirtual/assets/survey.png" alt="Icono contenido">
                        </div>
                        <div class="content-text">
                            <p>Cuestionario Diagnostico</p>
                        </div>
                    </a>

                    <div class="content-section">
                        <div class="content-icon">
                            <img src="/PA_Avance-AulaVirtual/assets/pdf-file.png" alt="Icono contenido">
                        </div>
                        <div class="content-text">
                            <p>Apuntes Materia Clase 1</p>
                        </div>
                    </div>

                    <div class="content-section">
                        <div class="content-icon">
                            <img src="/PA_Avance-AulaVirtual/assets/pdf-file.png" alt="Icono contenido">
                        </div>
                        <div class="content-text">
                            <p>Apuntes Materia Clase 2</p>
                        </div>
                    </div>

                    <a href="FormularioAlumno.html" class="content-section">
                        <div class="content-icon">
                            <img src="/PA_Avance-AulaVirtual/assets/survey.png" alt="Icono contenido">
                        </div>
                        <div class="content-text">
                            <p>Cuestionario Reforzamiento</p>
                        </div>
                    </a>

                    <div class="content-section">
                        <div class="content-icon">
                            <img src="/PA_Avance-AulaVirtual/assets/external-link.png" alt="Icono contenido">
                        </div>
                        <div class="content-text">
                            <p>Documento Materia</p>
                        </div>
                    </div>

                    <div class="content-section">
                        <div class="content-icon">
                            <img src="/PA_Avance-AulaVirtual/assets/survey.png" alt="Icono contenido">
                        </div>
                        <div class="content-text">
                            <p>Prueba Teorica 1</p>
                        </div>
                    </div>
                    
                </div>
                
                <div class="right-column">
                    <h3>Planificación Semestral</h3>
                    <div class="content-section">
                        <div class="content-icon">
                            <img src="/PA_Avance-AulaVirtual/assets/lightbulb.png" alt="Icono contenido">
                        </div>
                        <div class="content-text">
                            <p>Taller 1: 3 de Septiembre</p>
                        </div>
                    </div>

                    <div class="content-section">
                        <div class="content-icon">
                            <img src="/PA_Avance-AulaVirtual/assets/lightbulb.png" alt="Icono contenido">
                        </div>
                        <div class="content-text">
                            <p>Prueba 1: 10 de Septiembre</p>
                        </div>
                    </div>

                    <div class="content-section">
                        <div class="content-icon">
                            <img src="/PA_Avance-AulaVirtual/assets/lightbulb.png" alt="Icono contenido">
                        </div>
                        <div class="content-text">
                            <p>Taller 2: 25 de Septiembre</p>
                        </div>
                    </div>

                    <div class="content-section">
                        <div class="content-icon">
                            <img src="/PA_Avance-AulaVirtual/assets/lightbulb.png" alt="Icono contenido">
                        </div>
                        <div class="content-text">
                            <p>Prueba 2: 9 de Octubre</p>
                        </div>
                    </div>
                    
                    <div class="content-section">
                        <div class="content-icon">
                            <img src="/PA_Avance-AulaVirtual/assets/lightbulb.png" alt="Icono contenido">
                        </div>
                        <div class="content-text">
                            <p>Taller 3: 23 de Octubre</p>
                        </div>
                    </div>

                    <div class="content-section">
                        <div class="content-icon">
                            <img src="/PA_Avance-AulaVirtual/assets/lightbulb.png" alt="Icono contenido">
                        </div>
                        <div class="content-text">
                            <p>Prueba 3: 12 de Noviembre</p>
                        </div>
                    </div>
                    
                </div>
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


<style>

.course-card {
    width: 80%;
    max-width: 1200px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    padding: 20px;
    margin: auto; 
}

.course-header {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #E8E8E8; 
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.back-button img {
    width: 30px;
    height: auto;
    margin-right: 20px;
}

.course-content {
    display: flex;
    justify-content: space-between;
}

.left-column, .right-column {
    width: 48%;
}

.left-column h3, .right-column h3 {
    margin: 0;
    margin-bottom: 10px;
}

.content-section {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    text-decoration: none;
    color: black;
}

.content-icon img {
    width: 40px;
    height: auto;
    margin-right: 10px;
}

.content-text p {
    margin: 0;
}

</style>