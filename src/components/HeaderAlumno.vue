<template>
      <header>
            <a href="PrincipalAlumno.html" class="logo">
                <img src="/PA_Avance-AulaVirtual/assets/logo_forlife.png" alt="Logo Escuela For Life">
            </a>
            <nav class="nav-links">
                <a href="BibliotecaAlumno.html"><strong>Biblioteca</strong></a>
                <a href="CursoAlumno.html"><strong>Pendientes</strong></a>
            </nav>
            <a href="PerfilAlumno.html" class="profile-section">
                <i class="profile-icon"><img src="/PA_Avance-AulaVirtual/assets/hagger.jpg" alt="Foto de perfil"></i>
            </a>
            <a href="/PA_Avance-AulaVirtual/Login.html" class="logout-section">
                <i class="logout-icon"><img src="/PA_Avance-AulaVirtual/assets/logout.png" alt="Icono logout"></i>
            </a>
        </header>

</template>

<style>

.nav-links {
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: black;
    padding: 20px 30px;
    font-size: 20px;
}

.profile-section {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.profile-icon {
    font-size: 20px;
    padding-right: 50px;
}

.profile-icon img{
    width: 45px;
    height: auto;
    border-radius: 100%;
}
.logout-icon {
    font-size: 20px;
    padding-right: 50px;
}

.logout-icon img {
    width: 45px;
    height: auto;
    padding-right: 10px;
    border-radius: 0%;
}

</style>