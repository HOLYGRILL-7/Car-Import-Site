import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UseAuth";

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        {/* Logo/Brand */}
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <p className="text-sm text-gray-400 mt-1">Car Import Business</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4">
          <Link
            to="/admin"
            className="block py-3 px-4 rounded hover:bg-gray-800 mb-2"
          >
            📊 Dashboard
          </Link>
          <Link
            to="/admin/cars"
            className="block py-3 px-4 rounded hover:bg-gray-800 mb-2"
          >
            🚗 Manage Cars
          </Link>
          <Link
            to="/admin/orders"
            className="block py-3 px-4 rounded hover:bg-gray-800 mb-2"
          >
            📦 Manage Orders
          </Link>
          <Link
            to="/admin/users"
            className="block py-3 px-4 rounded hover:bg-gray-800 mb-2"
          >
            👥 Manage Users
          </Link>

          {/* Divider */}
          <div className="border-t border-gray-700 my-4"></div>

          {/* View Public Site */}
          <Link
            to="/"
            className="block py-3 px-4 rounded hover:bg-gray-800 mb-2 text-gray-400"
          >
            🌐 View Public Site
          </Link>
        </nav>

        {/* User Info at Bottom */}
        <div className="p-4 border-t border-gray-700">
          <div className="mb-3">
            <p className="text-sm text-gray-400">Logged in as</p>
            <p className="font-semibold">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <header className="bg-white shadow-sm p-6 border-b">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Manage your car import business from here
          </p>
        </header>

        {/* Page Content */}
        <div className="p-6">
          <Outlet /> {/* This renders the admin page content */}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
