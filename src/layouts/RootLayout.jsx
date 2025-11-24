import { Outlet } from 'react-router';
import Footer from '../pages/Utility/Footer/Footer';
import Navbar from '../pages/Utility/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;