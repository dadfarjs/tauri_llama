import { createRootRoute } from '@tanstack/react-router';
import AppLayout from '../layout/AppLayout';
import Spin from '../components/loading/Spin';

export const RootRoute = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <div>404 Not Found</div>,
  errorComponent: () => <div>500 Internal Server Error</div>,
  pendingComponent: () => <Spin />,
});

function RootComponent() {
  return <AppLayout />;
}
