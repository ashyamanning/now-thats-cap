import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBCol, MDBRow } from "mdbreact";

const Logo = () => {
  return (
    <MDBContainer className=" mt-4">
      <MDBRow>
        <MDBCol md="12">
          <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <video className="video-fluid d-block" autoPlay loop>
                  <source src="https://youtu.be/n82rgdbM9G4?t=28" type="video/mp4" />
                </video>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <video className="video-fluid d-block" autoPlay loop>
                  <source src="https://www.youtube.com/embed/6FOUqQt3Kg0" type="video/mp4" />
                  {/* <iframe width="807" height="605" src="https://www.youtube.com/embed/6FOUqQt3Kg0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </video>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <video className="video-fluid d-block" autoPlay loop>
                  <source src="https://youtu.be/edi_TzEdne4?t=12" type="video/mp4" />
                </video>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <video className="video-fluid d-block" autoPlay loop>
                  <source src=" https://youtu.be/-VE0-ynbg4A?t=11" type="video/mp4" />
                </video>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Logo;