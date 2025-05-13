import { createRoute, Outlet } from '@tanstack/react-router';
import Main from '../components/Main';
import { RootRoute } from './__root';
// Child Routes
const homeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: Main,
});

const chatRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: 'chat',
  component: () => <Outlet />,
});

const chatIdRoute = createRoute({
  getParentRoute: () => chatRoute,
  path: '$chatId',
  component: () => <span>ChatId</span>,
});

export const routeTree = RootRoute.addChildren([homeRoute, chatRoute.addChildren([chatIdRoute])]);
