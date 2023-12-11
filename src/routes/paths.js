// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_ECOMMERCE = '/products';
const ROOTS_USER = '/user';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
};

export const PATH = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    banking: path(ROOTS_DASHBOARD, '/banking'),
    booking: path(ROOTS_DASHBOARD, '/booking'),
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all'),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    view: (name) => path(ROOTS_DASHBOARD, `/chat/${name}`),
  },
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  permissionDenied: path(ROOTS_DASHBOARD, '/permission-denied'),
  user: {
    root: path(ROOTS_USER, '/user'),
    new: path(ROOTS_USER, '/user/new'),
    list: path(ROOTS_USER, '/user/list'),
    cards: path(ROOTS_USER, '/user/cards'),
    profile: path(ROOTS_USER, '/user/profile'),
    account: path(ROOTS_USER, '/user/account'),
    edit: (name) => path(ROOTS_USER, `/user/${name}/edit`),
    demoEdit: path(ROOTS_USER, `/user/reece-chung/edit`),
  },
  eCommerce: {
    root: path(ROOTS_ECOMMERCE, '/'),
    shop: path(ROOTS_ECOMMERCE, '/shop'),
    list: path(ROOTS_ECOMMERCE, '/list'),
    checkout: path(ROOTS_ECOMMERCE, '/checkout'),
    new: path(ROOTS_ECOMMERCE, '/product/new'),
    view: (name, slug) => path(ROOTS_ECOMMERCE, `/product/${name}/${slug}`),
    edit: (name) => path(ROOTS_ECOMMERCE, `/product/${name}/edit`),
    demoEdit: path(ROOTS_ECOMMERCE, '/product/nike-blazer-low-77-vintage/edit'),
    demoView: path(ROOTS_ECOMMERCE, '/product/nike-air-force-1-ndestrukt'),
  },
  invoice: {
    root: path(ROOTS_USER, '/invoice'),
    list: path(ROOTS_USER, '/invoice/list'),
    new: path(ROOTS_USER, '/invoice/new'),
    view: (id) => path(ROOTS_USER, `/invoice/${id}`),
    edit: (id) => path(ROOTS_USER, `/invoice/${id}/edit`),
    demoEdit: path(ROOTS_USER, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_USER, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    new: path(ROOTS_DASHBOARD, '/blog/new'),
    view: (title) => path(ROOTS_DASHBOARD, `/blog/post/${title}`),
    demoView: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
  },
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
