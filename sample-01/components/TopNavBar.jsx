// components/TopNavBar.js
import { FaUserCircle, FaBell } from 'react-icons/fa';

export default function TopNavBar() {
  return (
    <div className="w-full bg-white shadow-md py-3 px-4 flex justify-between items-center">
      {/* App Name / Logo */}
      <div className="text-lg font-bold">LanguageBot</div>

      {/* Right Icons: Profile and Notification */}
      <div className="flex items-center space-x-4">
        {/* Optional Notification Bell */}
        <FaBell className="text-gray-600 cursor-pointer" />

        {/* Profile Icon */}
        <FaUserCircle className="text-gray-600 cursor-pointer" size={28} />
      </div>
    </div>
  );
}
