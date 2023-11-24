import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main> 
    <section className="header">
        <nav>
            <Link href='/'></Link>
            <a href="/" className="logo">LEARN HUB</a>
            <div className="nav-links" id="navLinks">
                {/* {Reposnive bar open and close }  */}
                <i className="fa fa-times"></i>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/course'><li>Course</li></Link>
                    <Link href='/blog'><li>Blog</li></Link>
                    <Link href='/about'><li>About</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                </ul>
            </div>
            <i className="fa fa-bars"></i>
            {/* <!-- Reposnive bar open and close --> */}
        </nav>

        <div className="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p className=' neon-text text-4xl'>Welcome to Learn Hub: Your Premier Education Center for Higher Studies Services.</p>
            <a href="#" className="hero_btn">Visit Us To Know More</a>
        </div>
    </section>

    {/* <!-- Course Section Start --> */}
    <section className="course">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br></br> MAJOR PROGRAMS</h1>
        <p>These high demand degree programs equip students with world class education and skills. </p>

        <div className="row text-justify">
            <div className="course-col">
                <h3>Undergraduate Programs</h3>
                <p>Explore a diverse range of undergraduate programs at our institution, where academic excellence meets practical learning. Our dedicated faculty and state-of-the-art facilities provide a dynamic environment for students to thrive. From innovative courses to hands-on experiences, we are committed to shaping the next generation of leaders.</p>
            </div>
            <div className="course-col">
                <h3>Graduate Programs</h3>
                <p>Embark on an advanced academic journey with our comprehensive graduate programs. Designed to elevate 
                    your expertise and foster critical thinking, our graduate offerings encompass a spectrum of disciplines.
                    Engage in cutting-edge research by immersing yourself in a vibrant 
                    intellectual community. Expand your horizons through our distinguished graduate education.</p>
            </div>
            <div className="course-col">
                <h3>Adult Learning & Degree Completion</h3>
                <p>Our flexible programs are designed for adult learners seeking to complete their degrees. 
                    With tailored support and convenient schedules, we are here to guide you as you achieve your academic 
                    goals and advance in your career. Break barriers and achieve your academic aspirations with our 
                    programs, where your journey to success is our priority.</p>
            </div>
        </div>
    </section>
    {/* <!-- Course Section End -->

    <!-- Campus Section Start--> */}

    <section className="campus">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Experience our campus virtually and explore the essence of our institution.</p>

        <div className="row">
            <div className="campus-col">
                <Image src="/img/Campus1.png" width={332} height={221} alt=""/>
                <div className="layer">
                    <h3>School of Engineering</h3>
                </div>
            </div>
            <div className="campus-col">
                <Image src="/img/Campus2.png" width={332} height={221} alt=""/>
                <div className="layer">
                    <h3>School of Life Sciences</h3>
                </div>
            </div>
            <div className="campus-col">
                <Image src="/img/Campus3.png" width={332} height={221} alt=""/>
                <div className="layer">
                    <h3>School of Artificial Intelligence</h3>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Campus Section End --> */}

    {/* <!-- Facilities Section Start --> */}
    <section className="facilities">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Discover cutting-edge spaces designed to enhance your learning experience and foster innovation.</p>

        <div className="row">
            <div className="facilities-col">
                <Image src="/img/libary.png" width={332} height={221} alt=""/>
                <h3>Best Libary</h3>
                <p>Explore a world of knowledge in our exceptional library, where learning comes to life.</p>
            </div>
            <div className="facilities-col">
                <Image src="/img/playground.png" width={332} height={221} alt=""/>
                <h3>Athletics</h3>
                <p>Elevate your passion for sports and well-being in our dynamic athletic programs.</p>
            </div>
            <div className="facilities-col">
                <Image src="/img/food.png" width={332} height={250} alt=""/>
                <h3>Tasty and Healthy Food</h3>
                <p>Indulge in a delightful culinary experience with our menu crafted to blend flavor and nutrition seamlessly.</p>
            </div>
        </div>
    </section>
    {/* <!-- Facilities Section End -->

    <!-- Testimonials Section Start --> */}
    <section className="testimonials">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>What Our Students Say</h1>
        <p>Discover firsthand experiences and testimonials from our students about their journey with us.</p>

        <div className="row">
            <div className="testimonials-col">
                <Image src="/img/user.png" width={332} height={221} alt=""/>
                <div>
                    <p>Exceptional learning environment! The supportive faculty and engaging courses have truly enriched 
                    my educational journey. The diverse opportunities for growth and the welcoming community make it an 
                    outstanding place to thrive.</p>
                    <h3>Ayesha Ali</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
            <div className="testimonials-col">
                <Image src="/img/user.png" width={332} height={221} alt=""/>
                <div>
                <p>Outstanding experience! The innovative approach to education and the commitment to student success set
                this institution apart. I have found inspiration in the well-rounded curriculum and the supportive community. 
                A place where academic and personal growth go hand in hand.</p>
                    <h3>Umer Shah</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Testimonials Section End -->

    <!-- Call To Action Section Start --> */}
    <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="/contact" className="hero_btn">CONTACT US</a>
    </section>
    {/* <!-- Call To Action Section End --> */}

    {/* <!-- Footer Section Start --> */}
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
    {/* <!-- Footer Section End --> */}

    </main>
  )
}
