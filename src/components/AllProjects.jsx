import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const AllProjects = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <Navbar />
                <Footer />
            </div>
        </BrowserRouter>

    );
};

export default AllProjects;