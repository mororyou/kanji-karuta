import { Outlet } from 'react-router';
export default function mobileViewLayout() {
  return (
    <main className="bg-gradation flex h-dvh items-center justify-center">
      <section className="h-dvh w-screen max-w-screen-sm bg-blue-50 bg-opacity-60 shadow-lg">
        <Outlet />
      </section>
    </main>
  );
}
