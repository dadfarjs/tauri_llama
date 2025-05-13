import { SidebarProvider, useSidebar } from '../context/SidebarContext';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import AppHeader from './AppHeader';
import Backdrop from './Backdrop';
import AppSidebar from './AppSidebar';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  return (
    <>
      <div className="hidden md:block md:h-full md:w-[20%]">
        <Sidebar />
      </div>
      <div className="h-full w-full md:w-[80%]">
        <Main />
      </div>
    </>
  );
  return (
    <div className="min-h-screen xl:flex">
      <Sidebar />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]'
        } ${isMobileOpen ? 'ml-0' : ''}`}
      >
        <AppHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
