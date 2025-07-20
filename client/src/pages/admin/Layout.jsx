import { Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import Sidebar from '../../components/admin/Sidebar';

const Layout = () => {
  const navigate = useNavigate();
  const logout = () => {
    // Logic for logging out the user
    navigate('/');
  };
  return (
    <>
      <div className='flex justify-between items-center py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        <img
          onClick={() => navigate('/')}
          src={assets.logo}
          alt='logo'
          className='w-32 sm:w-40 cursor-pointer'
        />
        <button
          onClick={logout}
          className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'
        >
          Logout
        </button>
      </div>
      <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
