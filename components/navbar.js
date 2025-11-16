export default function Navbar({ session }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#ede9fe] shadow-md">
      <a href="/" className="font-bold text-2xl text-[#5b21b6]">Lab-9</a>
      {session ? (
        <div className="flex items-center space-x-4">
          <img src={session.user.image} alt="avatar" className="w-8 h-8 rounded-full"/>
          <span className="font-medium text-gray-700">{session.user.name}</span>
          <a href="/api/auth/signout" className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            Logout
          </a>
        </div>
      ) : (
        <a href="/signin" className="px-4 py-2 bg-[#8b5cf6] text-white rounded-lg hover:bg-[#7c3aed] transition-colors">
          Sign In
        </a>
      )}
    </nav>
  );
}
