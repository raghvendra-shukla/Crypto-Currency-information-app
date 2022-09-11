import React from "react";

function About() {
  return (
    <>
      <div className="container my-3">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne"
              >
                About This APP
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <strong>This app gives you the information about Crypto Currency : </strong>
                This app contains only two pages one is home and another is about home pages have the information about about Currency and description.there are two buttons one is know more gives takes you to the website of that particular currency and another is explore which gives the all the information of that currency in current cenerio.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo"
              >
                About the Api
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <strong>this Api gives the info of CryptoCurrency : </strong>
                The Api uses in this app is made by my friend Rahul karda. If you also wnt to use this Api go and checkout this site: <a href="https://crypto-info-api.herokuapp.com">Rahul Karda</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
