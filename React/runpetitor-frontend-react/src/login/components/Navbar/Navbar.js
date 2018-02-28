import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div class="app-body">
                    <div class="sidebar">
                        <nav class="sidebar-nav">
                            <ul class="nav">

                                <li class="nav-item primary" routerLinkActive="open">
                                    <a class="nav-link" pageScroll href="#home">Home</a>
                                </li>

                                <li class="nav-item primary" routerLinkActive="open">
                                    <a class="nav-link" pageScroll href="#about">About</a>
                                </li>


                                <li class="nav-item primary" routerLinkActive="open">
                                    <a class="nav-link" pageScroll href="#feature">Features</a>
                                </li>

                                <li class="nav-item primary" routerLinkActive="open">
                                    <a class="nav-link" href="#">REGISTER</a>
                                </li>

                                <li class="nav-item primary" routerLinkActive="open">
                                    <a class="nav-link" href="#">LOGIN</a>
                                </li>

                            </ul>
                        </nav>
                    </div>

                    <main class="main">

                        <div class="row home" id="home">
                            <div class="sep">
                                <div class="phone">
                                    <img src="../../assets/img/phone.png"/>
                                </div>
                            </div>
                            <div class="sep">
                                <div class="app_link">
                                    <p class="title">Runpetitor
                                        <p>
                                            <p class="desc">The app that allows runners to train and compete between
                                                theirselves and at the same time have
                                                money as compensation.</p>
                                            <div class="row store_links">
                                                <div class="ios_link">
                                                    <a href="#"><img src="../../assets/img/Apple-App-Store.png"/></a>
                                                </div>
                                                <div class="google_link">
                                                    <a href="#"><img src="../../assets/img/play-store-image.png"/></a>
                                                </div>
                                            </div>
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="about" id="about">
                            <h1>AboutPage</h1>
                        </div>
                        <div class="feature" id="feature">
                            <h1>FeaturesPage</h1>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Navbar;