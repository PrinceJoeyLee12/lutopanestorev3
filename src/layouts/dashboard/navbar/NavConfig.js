// routes
import { PATH } from 'routes/paths';
import SvgIconStyle from 'components/SvgIconStyle';
// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  menuItem: getIcon('ic_menu_item'),
};

const navConfig = (args) => {
  const { name = '' } = args;

  // No Name means it is in guest mode (No login user)
  const otherNavs = () => {
    let navigationList = [];
    if (name) {
      navigationList.push(
        // USER
        { title: 'profile', path: PATH.user.edit(name), icon: ICONS.user }
      );
    }

    return navigationList;
  };

  return [
    // MANAGEMENT
    // ----------------------------------------------------------------------
    {
      subheader: 'Menu',
      items: [
        // E-COMMERCE
        { title: 'shop', path: PATH.eCommerce.shop, icon: ICONS.ecommerce },
        { title: 'checkout', path: PATH.eCommerce.checkout, icon: ICONS.cart },

        // INVOICE
        { title: 'Orders', path: PATH.invoice.list, icon: ICONS.invoice },

        ...otherNavs(),
      ],
    },
  ];
};

export default navConfig;
