import React, { Component } from 'react'
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <header className="header-one">
                <div className="main-menu">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4 col-lg-2 d-flex col-5">
                                <Link className="navbar-brand logo" to='/'>
                                    <img width={60} src={require("../../assets/img/logo3.jpg") } alt="donto" />
                                </Link>
                                <a className='Logotitle'>Ayush Dental Clinic</a>

                            </div>
                            <div className="col-lg-10 col-md-9 d-none d-lg-block text-lg-right">
                                <nav id="responsive-menu" className="menu-style-one">
                                    <ul className="menu-items">
                                        <li><Link to='/'>home</Link></li>
                                        <li><Link to='/Page/About'>about</Link></li>
                                        <li><Link to='/Page/ServiceDetails'>Services</Link></li>
                                        <li><Link to='/Page/DentistDetails'>Dentist</Link></li>
                                        <li><Link to='/Page/Blog'>Blog</Link></li>
                                        <li><Link to='/Page/Contact'>Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-11 col-sm-7  col-6 d-block d-lg-none">
                                <nav className="navbar navbar-expand-lg text-right navbar-light mobile-nav">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobilenav">
                                        <span className="fal fa-bars" />
                                    </button>
                                </nav>
                            </div>
                            <div className="collapse navbar-collapse mobile-menu" id="mobilenav">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to='/'>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/Page/About'>about</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/Page/ServiceDetails'>Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/Page/DentistDetails'>Dentist</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/Page/Blog'>Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/Page/Contact'>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>            
        )
    }
}

export default Navbar
