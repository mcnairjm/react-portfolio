import johnImage from '../Assets/John/me.jpg';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

function About() {
    return (
        <MDBContainer className='mt-5'>
            <MDBRow>
                <MDBCol md='12'>
                    <h2>About Me</h2>
                    <hr class="solid bg=dark"/>
                    <img src={johnImage} style={{ height: '285px' }} alt='John McNair'></img>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: '23px' }}>
                     Hello! My name is John McNair. I am a web-developer in training and I am excited to continue learning and growing with these new subjects. I was born and raised in Raleigh, NC and currently live there with my wife, Sara. I graduated from Appalachian State University in 2017 with a Bachelor's Degree in Communication Studies. While I found Comm Studies to be interesting and helpful in many different ways, it did not supply me with any specialized skills outside of being a good communicator.  After considering a few different options, I landed on web development as an area that I felt I could not only learn, but eventually excell at and, hopefully, one day reap the benefits of that field. I look forward to building out this page even further in the future and filling it up with my own projects. Cheers!

                    </p>
        
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default About;