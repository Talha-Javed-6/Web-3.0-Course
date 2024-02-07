import Image from "next/image"
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.css';
function About() {
    return(
        <div>
            <section className="Sub-header">
        <nav>
            <Link href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className="nav-links" id="navLinks">
                {/* <!-- reposnive bar open and close --> */}
                {/* <i className="fa fa-times" onclick="hideMenu()"></i> */}
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="Course">Course</Link></li>
                    <li><Link href="Blog">Blog</Link></li>
                    <li><Link href="About">About</Link></li>
                    <li><Link href="Contact">Contact</Link></li>
                </ul>
            </div>
            {/* <i className="fa fa-bars" onclick="showMenu()"></i> */}
            {/* <!-- reposnive bar open and close --> */}
        </nav>
        <h1>About Us</h1>
    </section>

    {/* <!-- About Us Section Start --> */}

    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <Link href="#" className="hero_btn btn">EXPLORE NOW</Link>
            </div>
            <div className="about-col">
                <img src="img/about.png" alt=""/>
            </div>
        </div>
    </section>

    {/* <!-- About Us Section end --> */}

    {/* <!-- Footer Section start --> */}
    <section className="footer">
        <hr/>
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            <br/> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
            dolorem.
        </p>

        <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
        </div>
        <p>Made with <i className="fas fa-heart"></i> by <Link href="#">Developer Talha</Link></p>
        <p>Copyright © 2024 <Link href="/">Xplore Skill</Link>. All Rights Reserved</p>
    </section>
    {/* <!-- Footer Section end --> */}
        </div>
    )
}
export default About