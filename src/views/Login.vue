<template>
    <body class="login-body">
  <header>
        <a href="Login.vue" class="logo">
            <img src="../assets/logo_forlife.png" alt="Logo Escuela For Life">
        </a>
        <a href="Login.vue" class="login-section">
            <span><strong>Login</strong></span>
            <i class="login-icon"><img src="../assets/icono.jpg" alt="Icono login"></i>
        </a>
    </header>

    <main class="login-main">  
        <h1>Login</h1>
        <form onsubmit="validarLogin(event)">
            <div class="form-group">
                <h2>RUT</h2>
                <div class="input-container">
                    <input type="text" id="rut" name="rut" placeholder="Ingresa tu RUT">
                </div>
            </div>
            <div class="form-group">
                <h2>Contraseña</h2>
                <div class="input-container">
                    <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña">
                </div>
            </div>
            <button type="submit">Entrar</button>
        </form>
    </main>
    
<footer>
    <div class="rectangle-container">
        <div class="triangle-right"></div>
    </div>
</footer>
</body>


</template>

<script>
function validarLogin(event) {
            event.preventDefault(); 
            
            const rut = document.getElementById('rut').value;
            const password = document.getElementById('password').value;
            
            if (rut === '214001091' && password === '214001091') {
                window.location.href = 'views/PrincipalAlumno.html';
            } else if (rut === '7879439635' && password === '7879439635')
            {
                window.location.href = 'views/PrincipalDocente.html';
            } else {
                alert('RUT o contraseña incorrectos');
            }
        }
</script>

<style scoped>


.login-body {
    background-color: white;
    margin: 0;
    padding: 0;
}

.login-main {
    text-align: center;
    margin-top: 50px;
    margin-top: 20px;
}
.login-main h2 { 
    font-size: 16px;
    flex-shrink: 0; 

    width: 100px; 
}

.login-section {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: black;
}

.login-section span {
    margin-right: 5px;
    font-size: 18px;
}

.login-icon {
    font-size: 20px;
    padding-right: 50px;
}

.login-icon img {
    width: 60px;
    height: auto;
    padding-right: 10px;
    border-radius: 0%;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-group {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
    width: 480px; 
}

.form-group h2 {
    font-size: 16px;
    width: 100px; 
    margin-right: 30px; 
    text-align: left;
}

.input-container {
    flex-grow: 1;
}

.input-container input {
    width: 100%; 
    padding: 12px;
    border-radius: 20px;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    outline: none;
}

.input-container input::placeholder {
    color: #999;
}

button {
    padding: 10px 30px;
    width: 200px;
    border: none;
    border-radius: 20px;
    background-color: #0E86D4;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-top: 30px;
}

button:hover {
    background-color: #095a8f;
}

</style>