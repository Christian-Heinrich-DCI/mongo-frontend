import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <header>
        <h1>User-Verwaltung</h1>
        <nav>
          <NavLink to={`${process.env.PUBLIC_URL}/`}>Home</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/users`}>User List</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/users/new`}>Add User</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
