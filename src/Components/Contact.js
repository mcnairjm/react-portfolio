import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <h4>
            Thank you for connecting. I will get back to you ASAP
          </h4>
          <h3>Cell Phone</h3>
          <a href="tel:801-792-5502">
            <MDBIcon icon="phone-alt" /> 919-414-3440
          </a>
          <h3>E-mail</h3>
          <a href="mailto:mcnairjm1993@gmail.com">
            <MDBIcon icon="envelope" /> mcnairjm1993@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;