import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: () => (
    <>
      <div>Hello /settings!</div>
      <Link to="/settings/profile">Profile</Link>
      <br />
      <Link to="/settings/notifications">Notification</Link>
      <Outlet />
    </>
  ),
})
