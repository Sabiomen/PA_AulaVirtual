import { ref, reactive, computed } from 'vue';
import db from './db.json';

const currentUser = reactive({
  id: null,
  name: '',
  role: '',
  grade: '',
  rut: '',
  password: '',
  profileImage: ''
});

const loggedIn = ref(false);

function login(rut, password) {
  const user = db.alumns.find(alumn => alumn.rut === rut && alumn.password === password);
  if (user) {
    currentUser.id = user.id;
    currentUser.name = user.name;
    currentUser.role = user.role;
    currentUser.grade = user.grade;
    currentUser.rut = user.rut;
    currentUser.password = user.password;
    currentUser.profileImage = user.profileImage;
    loggedIn.value = true;
    return true;
  }
  return false;
}

function logout() {
  Object.keys(currentUser).forEach(key => (currentUser[key] = ''));
  currentUser.id = null;
  loggedIn.value = false;
}

const isAuthenticated = computed(() => loggedIn.value);

export function useAuth() {
  return {
    currentUser,
    login,
    logout,
    isAuthenticated
  };
}