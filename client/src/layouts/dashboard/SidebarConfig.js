import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import boxIcon from '@iconify/icons-akar-icons/box';
import thermometer2 from '@iconify/icons-fa/thermometer-2';
import dollarCircleOutlined from '@iconify/icons-ant-design/dollar-circle-outlined';
import treeLine from '@iconify/icons-clarity/tree-line';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'boxes',
    path: '/dashboard/user',
    icon: getIcon(boxIcon)
  },
  {
    title: 'sustainability',
    path: '/dashboard/sustainability',
    icon: getIcon(treeLine)
  },
  {
    title: 'temperature',
    path: '/dashboard/products',
    icon: getIcon(thermometer2)
  },
  {
    title: 'accounting',
    path: '/dashboard/accounting',
    icon: getIcon(dollarCircleOutlined)
  }
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon(lockFill)
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon(personAddFill)
  // }
];

export default sidebarConfig;
