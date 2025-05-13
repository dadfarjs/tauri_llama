import * as Sentry from '@sentry/react';
import * as URLS from '../constants/URLS.const';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthenticationRoutes } from './AuthenticationRoutes';

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(ReactRouterRoutes);

export function Routes() {
    return (
        <SentryRoutes>
            <Route
                path={URLS.ROUTE_AUTH_URL}
                element={<AuthenticationRoutes />}
            />
            <Route
                path={`${URLS.DASHBOARD_URL}/*`}
                element={<DashboardRoutes />}
            />
            <Route path={'*'} element={<DashboardRoutes />} />
        </SentryRoutes>
    );
}
