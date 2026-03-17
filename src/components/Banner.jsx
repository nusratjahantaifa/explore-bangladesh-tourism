const Banner = () => {
  return (


    <div className="carousel w-full h-[500px]">
 
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
       
        <img src="https://i.postimg.cc/28x3g81v/maitheli-maitra-n-Z2c-Eh8Qzcg-unsplash-(1).jpg" className="w-full object-cover" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-3xl font-bold">Sundarbans</h2>
          <p>Explore the largest mangrove forest</p>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.postimg.cc/GtDrrz32/pexels-musaddek-sayek-2152825668-33684437.jpg" className="w-full object-cover" />
        <div className="absolute flex justify-between left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-3xl font-bold">Cox’s Bazar</h2>
          <p>Longest sea beach in the world</p>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.postimg.cc/Njg2023k/pexels-imshaamim-32766712.jpg" className="w-full object-cover" />
        <div className="absolute flex justify-between left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-3xl font-bold">Bandarban</h2>
          <p>Beauty of hills and nature</p>
        </div>
      </div>

    </div>
  );
};

export default Banner;
