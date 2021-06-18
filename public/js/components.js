// nav bar
class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="top">
        <li>
            <!-- puts img inside of <li> for alignment! -->
            <img src="./icons/mactuaries.png" alt="MAS-logo">
        </li>
        <ul id="main-list">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./index.html#resources">Resources</a></li>
            <li><a href="./index.html#events">Events</a></li>
            <li><a href="./meet-the-team.html">Meet the Team</a></li>
            <li><a href="./FAQ.html">FAQ</a></li>
        </ul>
        <ion-icon name="menu" id="menu" onclick="ExpandMenu()"></ion-icon>
        </nav>
        `
    }
};

customElements.define('nav-bar', NavBar);

// Footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <section class="footer-yellow"></section>
        <section class="footer-grey">
            <img src="./image/math-stats.png" alt="Math-and-Stats-logo">
            <div id="address">
                <h4>Address:</h4>
                <br>
                <p>McMaster University</p>
                <p>1280 Main Street West</p>
                <p>Hamilton, Ontario, Canada</p>
                <p>L8S 4K1</p>
            </div>
            <div id="contact-us">
                <h4>Contact Us:</h4>
                <br>
                <p>Email: actuary@mcmaster.ca</p>
                <div class="social-media-icons">
                    <a href="https://www.facebook.com/McMasterActuarialSociety/">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="https://www.instagram.com/mactuaries/">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://www.linkedin.com/company/mcmaster-actuarial-society/">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </div>
            </div>
            <div></div>
        </section>
    
        <section class="footer-maroon">
            <p>© 2020 McMaster Actuarial Society. All rights reserved.</p>
        </section>
        </footer>
        `
    }
};

customElements.define('footer-bundle', Footer);