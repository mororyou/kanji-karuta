import { type RouteConfig, index, layout } from '@react-router/dev/routes';

export default [
  layout('_components/layout/mobileViewLayout.tsx', [index('routes/home.tsx')]),
] satisfies RouteConfig;
