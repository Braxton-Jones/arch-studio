import jackson from "../assets/about/desktop/avatar-jackson.jpg"
import jake from '../assets/about/desktop/avatar-jake.jpg';
import maria from '../assets/about/desktop/avatar-maria.jpg';
import thompson from '../assets/about/desktop/avatar-thompson.jpg';
import "../sass/pages/_About.scss"
function About(){
return (
<section className='about'>
    <div className='about-hero'>
        <div className='about-hero-content'>
            <h2> Your team of professionals</h2>
            <p>
                Our small team of world-class professionals will work with you every
                step of the way. Strong relationships are at the core of everything we
                do. This extends to the relationship our projects have with their
                surroundings.
            </p>
        </div>
    </div>
    <span className='divider'></span>
    <div className='about-body'>
        <div className='about-body-content'>
            <h2>Our<br /> Heritage</h2>
            <p>
                Founded in 2007, we started as a trio of architects. Our complimentary
                skills and relentless attention to detail turned Arch into one of the
                most sought after boutique firms in the country.{' '}
            </p>
            <p>
                Speciliazing in Urban Design allowed us to focus on creating
                exceptional structures that live in harmony with their surroundings.
                We consider every detail from every surrounding element to inform our
                designs.{' '}
            </p>
            <p>
                Our small team of world-class professionals provides input on every
                project.
            </p>
        </div>
        <div className='about-body-img'></div>
    </div>
    <div className='about-leaders'>
        <div>
            <h2>
                The
                <br />
                Leaders
            </h2>
        </div>
        <section className='about-leaders-grid'>
            <div>
                <img src={jake} />
                <h3>Jake Richards</h3>
                <p>Chief Architect</p>
            </div>
            <div>
                <img src={thompson} />
                <h3>Thompson Smith</h3>
                <p>Head of Finance</p>
            </div>
            <div>
                <img src={jackson} />
                <h3>Jackson Rouke</h3>
                <p>Lead Designer</p>
            </div>
            <div>
                <img src={maria} />
                <h3>Maria Simpson</h3>
                <p>Senior Arcitect</p>
            </div>
        </section>
    </div>
</section>
);
}

export default About