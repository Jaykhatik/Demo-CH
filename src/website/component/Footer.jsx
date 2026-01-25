import { Link } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <>
            <div>

                <div className="tm-black-bg">
                    <div className="container">

                        <div className="row margin-bottom-60">

                            {/* MAIN MENU */}
                            <nav className="col-lg-3 col-md-3 tm-footer-nav tm-footer-div">
                                <h3 className="tm-footer-div-title">Quick Links</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/menu">Our Menu</Link></li>
                                    <li><Link to="/specals">Specials</Link></li>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </nav>

                            {/* ABOUT CAFE */}
                            <div className="col-lg-5 col-md-5 tm-footer-div">
                                <div className="tm-footer-div-upper">
                                    <img
                                        src="/img/logo.png"
                                        alt="Cafe House Logo"
                                        className="tm-site-logo"
                                    />
                                    <h3 className="tm-footer-div-title">About Cafe House</h3>
                                </div>
                                <p className="margin-top-15">
                                    Cafe House is your perfect spot for premium coffee, handcrafted beverages,
                                    and freshly made bakery treats. We believe in delivering warmth, comfort,
                                    and unforgettable flavors in every cup.
                                </p>
                                <p className="margin-top-15">
                                    From cozy ambience to delightful food, we bring you the café experience
                                    you’ll love to return to—every single day.
                                </p>
                            </div>

                            {/* SOCIAL MEDIA */}
                            <div className="col-lg-4 col-md-4 tm-footer-div">
                                <h3 className="tm-footer-div-title">Connect With Us</h3>
                                <p>Follow us on social media to stay updated on offers, events & new arrivals.</p>

                                <div className="tm-social-icons-container">
                                    <Link to="/facebook" className="tm-social-icon"><i className="fa fa-facebook" /></Link>
                                    <Link to="/insta" className="tm-social-icon"><i className="fa fa-instagram" /></Link>
                                    <Link to="/twitter" className="tm-social-icon"><i className="fa fa-twitter" /></Link>
                                    <Link to="/youtube" className="tm-social-icon"><i className="fa fa-youtube" /></Link>
                                    <Link to="/marker" className="tm-social-icon"><i className="fa fa-map-marker" /></Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* COPYRIGHT */}
                <div>
                    <div className="container">
                        <div className="row tm-copyright">
                            <p className="col-lg-12 small copyright-text text-center">
                                © {new Date().getFullYear()} Cafe House — Crafted with Love & Coffee ☕
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
