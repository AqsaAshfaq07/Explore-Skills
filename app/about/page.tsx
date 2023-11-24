import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main>
      <section className="Sub-header">
        <nav>
            <a href="/" className="logo">LEARN HUB</a>
            <div className="nav-links" id="navLinks">
                {/* <!-- reposnive bar open and close --> */}
                <i className="fa fa-times" ></i>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/course'><li>Course</li></Link>
                    <Link href='/blog'><li>Blog</li></Link>
                    <Link href='/about'><li>About</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                </ul>
            </div>
            <i className="fa fa-bars"></i>
            {/* <!-- reposnive bar open and close --> */}
        </nav>
        <h1>About Us</h1>
    </section>

    {/* <!-- About Us Section Start --> */}

    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the worlds largest University</h1>
                <p>Experience education on an unparalleled scale. As the worlds largest university, we stand at the forefront of academic excellence. Our commitment to innovation, inclusivity, and global impact sets us apart. Join our expansive community where learning knows no boundaries, and discover a world of opportunities to shape your future.</p>
                <a href="/" className="hero_btn btn">EXPLORE NOW</a>
            </div>
            <div className="about-col">
                <Image src="/img/about.png" width={332} height={221} alt=""/>
            </div>
        </div>
    </section>

    {/* <!-- About Us Section end --> */}

    {/* <!-- Footer Section start --> */}
    <section className="footer">
        <hr></hr>
        <h4>About Us</h4>
        <p>Empowering minds and fostering growth – welcome to our institution, where excellence meets community.</p>
        <p>Copyright © 2021 <a href="/">Learn Hub</a>. All Rights Reserved</p>

        <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
        </div>
    </section>
    {/* <!-- Footer Section end --> */}

    </main>
  )
}
