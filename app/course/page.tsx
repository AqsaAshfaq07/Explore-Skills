import Image from 'next/image'
import Link from 'next/link'

export default function Course(){
    return (
        <main>
            <section className="Sub-header">
        <nav>
            <a href="/" className="logo">LEARN HUB</a>
            <div className="nav-links" id="navLinks">
                 {/* reposnive bar open and close  */}
                <Link href='hideMenu()' className="fa fa-times"></Link>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/course'><li>Course</li></Link>
                    <Link href='/blog'><li>Blog</li></Link>
                    <Link href='/about'><li>About</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                </ul>
            </div>
            <Link href='showMenu()' className="fa fa-bars"></Link>
             {/* reposnive bar open and close  */}
        </nav>
        <h1>Our Courses</h1>
    </section>

     {/* course start  */}

    <section className="course">
        <h1>Course We Offer</h1>
        <p>Explore a diverse range of programs designed to inspire learning and unlock opportunities for personal and professional growth.</p>

        <div className="row">
            <div className="course-col">
                <h3>Undergraduate Programs</h3>
                <p>Explore a diverse range of undergraduate programs at our institution, where academic excellence meets practical learning. Our dedicated faculty and state-of-the-art facilities provide a dynamic environment for students to thrive. From innovative courses to hands-on experiences, we are committed to shaping the next generation of leaders.</p>
            </div>
            <div className="course-col">
                <h3>Graduate Programs</h3>
                <p>Embark on an advanced academic journey with our comprehensive graduate programs. Designed to elevate your expertise and foster critical thinking, our graduate offerings encompass a spectrum of disciplines. Engage in cutting-edge research by immersing yourself in a vibrant intellectual community. Expand your horizons through our distinguished graduate education.</p>
            </div>
            <div className="course-col">
                <h3>Adult Learning & Degree Completion</h3>
                <p>Our flexible programs are designed for adult learners seeking to complete their degrees. With tailored support and convenient schedules, we are here to guide you as you achieve your academic goals and advance in your career. Break barriers and achieve your academic aspirations with our programs, where your journey to success is our priority.</p>
            </div>
        </div>
    </section>

     {/* course end  */}

     {/* best course start  */}

    <section className="facilities">
        <h1>Best Courses</h1>
        <p>Our carefully curated programs that provide a pathway to success and fulfillment.</p>

        <div className="row">
            <div className="facilities-col">
                <Image src="/img/course1.png" width={332} height={221} alt="" />
                <h3>Web Development</h3>
                <p>Master the art of Web Development, where innovation meets coding expertise for a dynamic digital future.</p>
            </div>
            <div className="facilities-col">
                <Image src="/img/course2.png" width={332} height={221} alt="" />
                <h3>Artificial Intelligence</h3>
                <p>Embark on a journey into the future of technology with cutting-edge courses and hands-on experiences.</p>
            </div>
            <div className="facilities-col">
                <Image src="/img/course3.png" width={332} height={221} alt="" />
                <h3>Data Science</h3>
                <p>Unlock the power of data, where information holds the key to innovation.</p>
            </div>
        </div>
    </section>

    {/* best courses end  */}

    {/* Footer start  */}
    <section className="footer">
        <hr/>
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
     {/* Footer end  */}
        </main>
    )
}