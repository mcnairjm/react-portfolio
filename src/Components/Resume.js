import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import myResume from '../Assets/John/mcnair-resume.pdf';

const Resume = () => {
    return (
        <MDBContainer className="mt-5">
            <MDBRow>
                <MDBCol md='12'>
                    <embed id='Resume' src={myResume} width='100%' height='750px' />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Resume;

