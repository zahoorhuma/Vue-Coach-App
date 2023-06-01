import { createRouter, createWebHistory } from "vue-router";
import CoachDetails from "./Pages/Coaches/CoachDetails.vue";
import CoachesList from "./Pages/Coaches/CoachesList.vue";
import CoachRegister from "./Pages/Coaches/CoachRegister.vue";

import ContactCoach from "./Pages/Requests/ContactCoach.vue";
import RequestsReceive from "./Pages/Requests/RequestsReceive.vue";
import NotFound from "./Pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: CoachesList },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      props: true,
      component: CoachDetails,
      children: [{ path: "contact", component: ContactCoach }],
    },

    { path: "/register", component: CoachRegister },
    { path: "/requests", component: RequestsReceive },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
