import React from 'react';

const AuthModal = ({ type, onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content text-center htlitsfk">
                <h2 className="gtdv5sfdj-h3">
                    {type === 'signup' ? 'Register an account' : 'Log in to your account'}
                </h2>

                <p className="tagline mb-4">Join thousands of users worldwide, Get Bonus!</p>

                <form className='mb-5'>
                    {type === 'signup' && (
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input id="fullname" type="text" required />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" required />

                        {type === 'signup' && (
                            <small className="password-hint">
                                Use 8+ characters with a mix of letters, numbers & symbols
                            </small>
                        )}
                    </div>

                    {type === 'signup' && (
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input id="confirm-password" type="password" required />
                        </div>
                    )}

                    {type === 'signup' && (
                        <>
                            <div className="checkbox-wrapper">
                                <input type="checkbox" id="age-confirm" />
                                <label htmlFor="age-confirm">
                                    I confirm that I am 18 years older
                                </label>
                            </div>

                            <div className="checkbox-wrapper">
                                <input type="checkbox" id="terms-confirm" />
                                <label htmlFor="terms-confirm">
                                    I agree to the Terms of Service and Privacy
                                </label>
                            </div>
                        </>
                    )}

                    {type === 'login' && (
                        <div className="form-group">
                            <a href="/forgot-password" className="forgot-link">Forget Password</a>
                        </div>
                    )}

                    <div style={{ marginTop: '20px' }}>
                        <button className="gtdv5sfdj-btn" type="submit">
                            {type === 'signup' ? 'Register' : 'Log In'}
                        </button>
                    </div>
                </form>

                <div className="switch-auth-link">
                    {type === 'signup' ? (
                        <p>Already have an account? <a href="/login">Log in</a></p>
                    ) : (
                        <p>Do not have an account? <a href="/signup">Sign up</a></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
