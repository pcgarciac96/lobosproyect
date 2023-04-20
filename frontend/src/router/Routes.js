export const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/pokeApi",
    name: "pokeApi",
    component: () => import("../views/PokeApiView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/user/UserLogin.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/user/UserProfile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/user/UserRegister.vue"),
    meta: {
      requiresAuth: false,
    },
  },
 
];
