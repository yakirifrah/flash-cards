import { FlashCard, MangeCard } from '../views';

const routes = [
  {
    path: '/',
    component: FlashCard,
    key: 'FLASH_CARD',
    name: 'Flash Card',
    exact: true,
  },
  {
    path: '/mangeCard',
    key: 'MANGE_CARD',
    name: 'Mange Card',
    component: MangeCard,
    exact: true,
  },
];
export default routes;
