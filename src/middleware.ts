/* eslint-disable no-restricted-exports */

export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    '/admin/dashboard',
    '/admin/general-settings/header',
    '/admin/general-settings/footer',
    '/admin/general-settings/side-image',
    '/admin/general-settings/subscribe-letter',
    '/admin/general-settings/theme-configuration',
    '/admin/pages/home',
    '/admin/pages/about-maldives',
    '/admin/pages/resorts',
    '/admin/pages/resorts',
    '/admin/pages/about-us',
    '/admin/pages/blogs',
    '/admin/components/add-hotels',
    '/admin/components/resorts-filters',
    '/admin/components/add-blog',
    '/admin/components/blog-categories',
    '/admin/user-management/user-roles',
    '/admin/user-management/user-accounts',
    '/admin/user-management/activity-logs',
    '/admin/help'
  ],
}
