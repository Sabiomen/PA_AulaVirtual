<template>
     <body class="principal-alumno-body">


        
        <main>
        <div class="library-card">
            <div class="top-left-icon">
                <a href="PrincipalAlumno.html">
                    <img src="/PA_Avance-AulaVirtual/assets/return.png" alt="Regresar">
                </a>
            </div>
            <div class="title-section">
                <h1>Biblioteca Virtual</h1>
            </div>
            
            <div class="content-sections">
                <div class="new-entries">
                    <h2>Nuevas Entradas</h2>
                    <div class="entry-grid">
                        <div class="entry-item">
                            <img src="/PA_Avance-AulaVirtual/assets/farenheit.png" alt="Entrada 1">
                            <div class="entry-info">
                                <p><strong>Farenheit 451</strong></p>
                                <p>Ray Bradbury</p>
                                <div class="entry-actions">
                                    <img src="/PA_Avance-AulaVirtual/assets/pdf-file.png" alt="icono pdf">
                                    <p><strong>Descargar PDF</strong></p>
                                    <img src="/PA_Avance-AulaVirtual/assets/fileread.png" alt="icono leer archivo">
                                    <p><strong>Leer Entrada</strong></p>
                                </div>
                            </div>
                        </div>
                        <div class="entry-item">
                            <img src="/PA_Avance-AulaVirtual/assets/colmilloblanco.png" alt="Entrada 2">
                            <div class="entry-info">
                                <p><strong>Colmillo Blanco</strong></p>
                                <p>Jack London</p>
                                <div class="entry-actions">
                                    <img src="/PA_Avance-AulaVirtual/assets/pdf-file.png" alt="icono pdf">
                                    <p><strong>Descargar PDF</strong></p>
                                    <img src="/PA_Avance-AulaVirtual/assets/fileread.png" alt="icono leer archivo">
                                    <p><strong>Leer Entrada</strong></p>
                                </div>
                            </div>
                        </div>
                        <div class="entry-item">
                            <img src="/PA_Avance-AulaVirtual/assets/unmundofeliz.png" alt="Entrada 3">
                            <div class="entry-info">
                                <p><strong>Un Mundo Feliz</strong></p>
                                <p>Aldous Huxley</p>
                                <div class="entry-actions">
                                    <img src="/PA_Avance-AulaVirtual/assets/pdf-file.png" alt="icono pdf">
                                    <p><strong>Descargar PDF</strong></p>
                                    <img src="/PA_Avance-AulaVirtual/assets/fileread.png" alt="icono leer archivo">
                                    <p><strong>Leer Entrada</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="subject-section">
                    <h2>Historia, Geografía y Ciencias Sociales</h2>
                    <div class="entry-grid">
                        <div class="entry-item">
                            <img src="/PA_Avance-AulaVirtual/assets/frankenstein.png" alt="Entrada 4">
                            <div class="entry-info">
                                <p><strong>Frankenstein</strong></p>
                                <p>Mary Shelley</p>
                                <div class="entry-actions">
                                    <img src="/PA_Avance-AulaVirtual/assets/pdf-file.png" alt="icono pdf">
                                    <p><strong>Descargar PDF</strong></p>
                                    <img src="/PA_Avance-AulaVirtual/assets/fileread.png" alt="icono leer archivo">
                                    <p><strong>Leer Entrada</strong></p>
                                </div>
                            </div>
                        </div>
                        <div class="entry-item">
                            <img src="/PA_Avance-AulaVirtual/assets/Donquijote.png" alt="Entrada 5">
                            <div class="entry-info">
                                <p><strong>Don Quijote de la Mancha</strong></p>
                                <p>Miguel de Cervantes</p>
                                <div class="entry-actions">
                                    <img src="/PA_Avance-AulaVirtual/assets/pdf-file.png" alt="icono pdf">
                                    <p><strong>Descargar PDF</strong></p>
                                    <img src="/PA_Avance-AulaVirtual/assets/fileread.png" alt="icono leer archivo">
                                    <p><strong>Leer Entrada</strong></p>
                                </div>
                            </div>
                        </div>
                        <div class="entry-item">
                            <img src="/PA_Avance-AulaVirtual/assets/dracula.png" alt="Entrada 6">
                            <div class="entry-info">
                                <p><strong>Dracula</strong></p>
                                <p>Bram Stoker</p>
                                <div class="entry-actions">
                                    <img src="/PA_Avance-AulaVirtual/assets/pdf-file.png" alt="icono pdf">
                                    <p><strong>Descargar PDF</strong></p>
                                    <img src="/PA_Avance-AulaVirtual/assets/fileread.png" alt="icono leer archivo">
                                    <p><strong>Leer Entrada</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="filter-column">
                    <h2>Filtrar</h2>
                    <ul class="filter-options">
                        <li>Geografía</li>
                        <li>Ciencias</li>
                        <li>Historia</li>
                        <li>Literatura</li>
                        <li>Matemáticas</li>
                    </ul>
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

<style scoped>
.library-card {
    width: 80%;
    max-width: 900px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
}

.library-card .top-left-icon {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
}

.title-section {
    text-align: center;
    margin-bottom: 20px;
}

.new-entries, .subject-section {
    margin-top: 30px;
}

.new-entries h2, .subject-section h2 {
    margin-bottom: 20px;
}

.entry-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px; 
}

.entry-item {
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    background-color: #f9f9f9;
}

.entry-item img {
    width: 120px; 
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.entry-info {
    margin-left: 15px;
    flex: 1;
}

.entry-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin-top: 10px;
}

.entry-actions img {
    width: 30px;
    height: 30px;

}

.filter-column {
    width: 200px;
    padding: 10px;
    background-color: #f9f9f9;
    border-left: 2px solid #ddd;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: absolute;
    right:-200px; 
    top: 20px; 
    height: 898px; 
}

.filter-column h2 {
    margin: 0;
    margin-bottom: 10px;
}

.filter-options {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.filter-options li {
    margin-bottom: 10px;
}


.divider {
    width: 2px; 
    background-color: #ddd;
    position: absolute;
    top: 20px;
    right:-200px;
    height: 898px; 
}
</style>