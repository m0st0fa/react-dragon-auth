
import { Outlet } from 'react-router-dom';
 
 const MainHome = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Outlet></Outlet>
        </div>
    );
 };
 
 export default MainHome;