import React from 'react';



const SingalEventDetail = () => {
  return (
    <div style={{ backgroundImage: `url("/backGround.svg")` }}>
      <section className="about-section section-padding" id="section_2">
        <div className="container gap-2">
          <div className="row flex">
            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex">
              <div className="services-info  my-div">
                <h2 className=" mb-4 head" style={{ color: 'black' }}>About Ekarikthin 2024</h2>
                <p className="text-white" style={{ fontWeight: "400" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, culpa.
                </p>
                <p className="text-white" style={{ fontWeight: "400" }}>
                  Join us in celebrating the power of youth, where every
                  moment is a chance to shine in the spotlight of cultural, technical, and sports excellence!
                </p>
                <p className="text-white" style={{ fontWeight: "400" }}>
                 rules: Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Qui quidem voluptatem quasi maiores repellendus 
                  laborum placeat neque aliquam ratione. Soluta corporis voluptatum
                   quasi impedit, suscipit nulla quae ipsum nostrum vel deleniti ex                   
                   ab officiis quod, rerum sint assumenda quidem, commodi esse odio
                    distinctio itaque aperiam velit fugiat! Ipsum doloremque dolorum 
                    obcaecati eius eligendi. Voluptatum magnam ex hic at, suscipit nihil 
                    itaque officia nobis cupiditate repellendus et incidunt! Ullam asperiores,
                     vero expedita voluptatem explicabo neque a in maxime quos, quam hic eligendi obcaecati. Atque 
                 voluptatum iusto, voluptatibus, fugiat distinctio aut blanditiis, dolores earum
                  amet harum expedita autem facere labore ex non!
                </p>
                <p>Date:90/029/33</p>
                <p>Price:300 - 400</p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="video-container yt">
                <img src="/images/Dance.png" alt="Event Poster" />
                {/* If you want to use an iframe, uncomment the following lines */}
                {/* <iframe className="video" src="https://www.youtube.com/embed/BFsl2joObr8" title="Ekarikthin" allowFullScreen></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingalEventDetail;
