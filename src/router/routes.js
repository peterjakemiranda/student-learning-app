export const Role = {
  Admin: "admin",
  User: "student",
  Teacher: "teacher",
};

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Home.vue"),
      },
      {
        path: "account",
        component: () => import("src/pages/Account.vue"),
      },
      /* {
        path: "search",
        component: () => import("src/pages/Course/Search.vue"),
      }, */
      {
        path: "courses",
        component: () => import("src/pages/Course/Index.vue"),
        meta: {
          auth: true,
          authorize: [Role.Teacher],
        },
      },
      {
        path: "courses/:id",
        component: () => import("src/pages/Course/Home.vue"),
      },
      {
        path: "courses/:id/activities",
        component: () => import("src/pages/Course/Activity/Index.vue"),
      },
      {
        path: "courses/:id/activities/create",
        component: () => import("src/pages/Course/Activity/Form.vue"),
      },
      {
        path: "courses/:id/activities/:activity_id",
        component: () => import("src/pages/Course/Activity/View.vue"),
      },
      {
        path: "courses/:id/quizzes",
        component: () => import("src/pages/Course/Quiz/Index.vue"),
      },
      {
        path: "courses/:id/quizzes/create",
        component: () => import("src/pages/Course/Quiz/Form.vue"),
      },
      {
        path: "courses/:id/quizzes/:quiz_id",
        component: () => import("src/pages/Course/Quiz/View.vue"),
      },
      {
        path: "courses/:id/students",
        component: () => import("src/pages/Course/Student/View.vue"),
      },
      {
        path: "courses/:id/students/invite",
        component: () => import("src/pages/Course/Student/Form.vue"),
      },
      {
        path: "courses/:id/students/add",
        component: () => import("src/pages/Course/Student/Search.vue"),
      },
      {
        path: "courses/:id/announcements",
        component: () => import("src/pages/Course/Announcement/Index.vue"),
      },
      {
        path: "courses/:id/announcements/create",
        component: () => import("src/pages/Course/Announcement/Form.vue"),
      },
      {
        path: "courses/create",
        component: () => import("src/pages/Course/Form.vue"),
        meta: {
          auth: true,
          authorize: [Role.Teacher],
        },
      },
      {
        path: "courses/:id/edit",
        component: () => import("src/pages/Course/Form.vue"),
      },
      {
        path: "courses/:course_id/sections",
        component: () => import("src/pages/Section/Index.vue"),
      },
      {
        path: "courses/:course_id/sections/create",
        component: () => import("src/pages/Section/Form.vue"),
      },
      {
        path: "courses/:course_id/sections/:id/edit",
        component: () => import("src/pages/Section/Form.vue"),
      },
    ],
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    component: () => import("pages/Register.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/forgot-password",
    component: () => import("pages/ForgotPassword.vue"),
    meta: {
      guest: true,
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
