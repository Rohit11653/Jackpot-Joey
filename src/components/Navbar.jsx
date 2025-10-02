import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/logo.png';
import menu from '../assets/images/menu.png';
import '../assets/style.css';
import AuthModal from './AuthModal';

function Navbar() {
    const [modalType, setModalType] = useState(null);

    const handleCloseModal = () => {
        setModalType(null);
    };

    return (
        <>
            <header className="kcdvhd23jn-header hgtlyzcx-r">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="Logo" width="120" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <img src={menu} alt="menu" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                                <li className="nav-item">
                                    <Link to="/game" className="nav-link">FAQs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link">Terms of Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/privacy-policy" className="nav-link">Privacy Policy</Link>
                                </li>
                            </ul>
                            <div className="d-flex gap-3n hthbbui">
                                <button
                                    onClick={() => setModalType('signup')}
                                    className="gtdv5sfdj-btn" type="button">Sign Up</button>
                                <button
                                    onClick={() => setModalType('login')}
                                    className="gtdv5sfdj-btn btn-2" type="button">Log In</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Modal rendered outside header to cover full page */}
            {modalType && <AuthModal type={modalType} onClose={handleCloseModal} />}
        </>
    );
}

export default Navbar;
