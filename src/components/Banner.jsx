

const Banner = () => {
    return (
      <div className="hero min-h-screen" style={{background: 'green'}}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-center">Explore the Natural Wonders of Bangladesh</h1>
      <p className="mb-5">
        Bangladesh, a beautiful South Asian country, is home to a diverse range
         of natural attractions, from lush green landscapes to serene riverine beauty.
          The country is crisscrossed by the world’s largest delta formed by the Ganga, 
          Brahmaputra, and Meghna rivers, offering unique 
          ecosystems and picturesque views. 
          Bangladesh also boasts the Sundarban,
         the world’s largest mangrove forest and a UNESCO World Heritage Site.
      </p>
     <div className="text-center">
         <button className="btn btn-primary text-center rounded">Explore More</button>
     </div>
    </div>
  </div>
</div>
    );
};

export default Banner;