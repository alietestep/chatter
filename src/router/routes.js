
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageHome.vue'), name:'Home' },
      { path: '/about', component: () => import('pages/about.vue'), name:'About' },
      { path: '/contact', component: () => import('pages/contact.vue'), name:'Contact' },
      { path: '/chat', component: () => import('pages/chat.vue'), name:'Chat' },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
