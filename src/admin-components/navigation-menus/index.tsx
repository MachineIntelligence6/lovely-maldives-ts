import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import GridViewIcon from '@mui/icons-material/GridView'
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark'

const menuItems = [
  {
    title: 'Dashboard',
    icon: <GridViewIcon sx={{ fontSize: '20px' }} />,
    path: 'admin/dashboard',
  },
  {
    sectionTitle: 'UI Management',
  },
  {
    title: 'General Settings',
    icon: <SettingsApplicationsIcon sx={{ fontSize: '20px' }} />,
    children: [
      {
        title: 'Header',
        path: 'admin/general-settings/header',
      },
      {
        title: 'Footer',
        path: 'admin/general-settings/footer',
      },
      {
        title: 'Side Image',
        path: 'admin/general-settings/side-image',
      },
      {
        title: 'Subscription',
        path: 'admin/general-settings/subscriptions',
      },
      {
        title: 'Theme Configuration',
        path: 'admin/general-settings/theme-configuration',
      },
    ],
  },
  {
    title: 'Pages',
    icon: <AutoStoriesIcon sx={{ fontSize: '20px' }} />,
    children: [
      {
        title: 'Home',
        path: 'admin/pages/home',
      },
      {
        title: 'About Maldives',
        path: 'admin/pages/about-maldives',
      },
      {
        title: 'Resorts',
        path: 'admin/pages/resorts',
      },
      {
        title: 'About Us',
        path: 'admin/pages/about-us',
      },
      {
        title: 'Blogs',
        path: 'admin/pages/blogs',
      },
      {
        title: 'Privacy Policy',
        path: 'admin/pages/privacy-policy',
      },
      {
        title: 'Terms & Conditions',
        path: 'admin/pages/terms-of-use',
      },
      {
        title: 'FAQs',
        path: 'admin/pages/faqs',
      },
    ],
  },
  {
    title: 'Components',
    icon: <BrandingWatermarkIcon sx={{ fontSize: '20px' }} />,
    children: [
      {
        title: 'Add Hotels',
        path: 'admin/components/add-hotels',
      },
      {
        title: 'Resorts Filters',
        path: 'admin/components/resorts-filters',
      },
      {
        title: 'Add Blog',
        path: 'admin/components/add-blog',
      },
      {
        title: 'Blog Categories',
        path: 'admin/components/blog-categories',
      },
    ],
  },
  {
    title: 'User Management',
    icon: <ManageAccountsIcon sx={{ fontSize: '20px' }} />,
    children: [
      {
        title: 'User Roles',
        path: 'admin/user-management/user-roles',
      },
    ],
  },
  {
    title: 'Help & Support',
    icon: <HelpCenterIcon sx={{ fontSize: '20px' }} />,
    path: 'admin/help',
  },
]

export default menuItems
