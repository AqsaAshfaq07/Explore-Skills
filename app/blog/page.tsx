import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
    return(
        <main>
            <section className="Sub-header">
        <nav>
            <a href="/" className="logo">LEARN HUB</a>
            <div className="nav-links" id="navLinks">
                {/* reposnive bar open and close */}
                <Link href='/hideMenu' className='fa fa-times'></Link>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/course'><li>Course</li></Link>
                    <Link href='/blog'><li>Blog</li></Link>
                    <Link href='/about'><li>About</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                </ul>
            </div>
            <Link href='/showMenu' className='fa fa-bars'></Link>
            {/* reposnive bar open and close  */}
        </nav>
        <h1>Our Post</h1>
    </section>

    {/* Blog Page Section Start  */}

    <section className="blog-content">
        <div className="row">
            <div className="blog-left">
                <h2>Our Certificate & Online Program</h2>
                <h5>Aug 1, 2023 </h5>
                <Image src="/img/post.png" width={332} height={221} alt="" />
                <p>Embark on a journey of skill development and professional growth with our Certificate & Online Programs. Delve into a range of courses meticulously crafted to meet the demands of todays dynamic industries. Whether you are seeking to enhance your expertise or explore new horizons, our programs offer flexibility and excellence.</p>
                <br/>
                <p>Discover a diverse array of online courses designed to cater to various fields, allowing you to learn at your own pace. Our industry-relevant curriculum is curated to provide practical knowledge and hands-on experience, ensuring you are well-equipped for success.</p>
                <br/>
                <p>Join a community of dedicated learners and experienced instructors committed to fostering a collaborative and enriching online learning environment. Our Certificate & Online Programs are your gateway to acquiring valuable skills and staying ahead in your professional journey.</p>

                <div className="comment-box">
                    <h3>Leave a Comment</h3>
                    <form className="comment-form">
                        <input type="text" placeholder="Enter Name" required />
                        <input type="email" placeholder="Enter Email" required />
                        <textarea rows={5} placeholder="Your Comment"></textarea>
                        <button type="submit" className="hero_btn btn">POST COMMENT</button>
                    </form>
                </div>
            </div>

            <div className="blog-right">
                <h3>Post Categories</h3>
                <div>
                    <span>Business Analytics</span>
                    <span>12</span>
                </div>
                <div>
                    <span>Machine Learning</span>
                    <span>29</span>
                </div>
                <div>
                    <span>Computer Science</span>
                    <span>15</span>
                </div>
                <div>
                    <span>Data Analytics</span>
                    <span>22</span>
                </div>
                <div>
                    <span>Full Stack</span>
                    <span>20</span>
                </div>
            </div>
        </div>
    </section>

    {/* Blog Page Section end  */}
    
    {/* Footer Section start  */}
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
    {/* Footer Section end  */}
        </main>
    )
}