<template>

<body class="principal-alumno-body">

    <HeaderAlumno/>

    <main>
        <div class="form-card">
            <div class="top-left-icon">
                <router-link :to="returnCurso">
                    <img src="../assets/return.png" alt="Regresar">
                </router-link>
            </div>

            <div class="questions-section">
                <div class="question">
                    <p>{{ pregunta1 }}</p>
                    <div class="options">
                        <div class="option">{{respuesta1}}</div>
                        <div class="option">{{respuesta2}}</div>
                        <div class="option">{{respuesta3}}</div>
                        <div class="option">{{respuesta4}}</div>
                    </div>
                </div>

                <div class="question">
                    <p>{{ pregunta2 }}</p>
                    <div class="options">
                        <div class="option">{{respuesta5}}</div>
                        <div class="option">{{respuesta6}}</div>
                        <div class="option">{{respuesta7}}</div>
                        <div class="option">{{respuesta8}}</div>
                    </div>
                </div>
            </div>

            <div class="side-section">
                <p class="section-title">Preguntas</p>
                <div class="question-grid">
                    <div class="grid-item">1</div>
                    <div class="grid-item">2</div>
                    <div class="grid-item">3</div>
                    <div class="grid-item">4</div>
                    <div class="grid-item">5</div>
                    <div class="grid-item">6</div>
                    <div class="grid-item">7</div>
                    <div class="grid-item">8</div>
                    <div class="grid-item">9</div>
                    <div class="grid-item">10</div>
                    <div class="grid-item">11</div>
                    <div class="grid-item">12</div>
                </div>
                <router-link :to="returnCurso"></router-link> <button class="finish-button">Terminar</button>
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

<script setup>
import HeaderAlumno from '../components/HeaderAlumno.vue';

const props = defineProps({
    pregunta1: {
        type: String,
        required: true
    },
    pregunta2: {
        type: String,
        required: true
    },
    respuesta1: {
        type: String,
        required: true
    },
    respuesta2: {
        type: String,
        required: true
    },
    respuesta3: {
        type: String,
        required: true
    },
    respuesta4: {
        type: String,
        required: true
    },
    respuesta5: {
        type: String,
        required: true
    },
    respuesta6: {
        type: String,
        required: true
    },
    respuesta7: {
        type: String,
        required: true
    },
    respuesta8: {
        type: String,
        required: true
    },
    returnCurso: {
        type: String,
        required: true
    }
})

</script>

<style scoped>
.form-card {
    width: 70%;
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    position: relative;
}

.top-left-icon {
    position: absolute;
    top: 15px;
    left: 15px;
    
}

.top-left-icon img {
    width: 30x;
    height: 30px;
}

.questions-section {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
}

.question {
    margin-bottom: 30px;
}

.options {
    display: flex;
    flex-direction: column; 
    gap: 10px;
    margin-top: 10px;
}

.option {
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: #000000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.side-section {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-title {
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.question-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-bottom: 20px;
}

.grid-item {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.finish-button {
    padding: 10px 20px;
    border-radius: 30px;
    background-color: #0E86D4;
    color: #ffffff;
    font-size: 16px;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 200px;
}

.finish-button a {
    text-decoration: none;
    color: white;}

.finish-button:hover {
    background-color: #0d6efd;
}

</style>
