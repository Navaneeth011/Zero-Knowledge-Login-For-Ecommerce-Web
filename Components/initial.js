import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Login from './Login';
import '../styles.css';

function Initial() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      setTimeout(() => {
        setIsAuthenticated(true);
        setLoading(false);
      }, 2000);
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    setIsAuthenticated(false);
  };

  if (loading) {
    return <div><center><img src="https://cdn-icons-png.flaticon.com/128/3139/3139247.png" alt='shopping bag' style={{ width: "50px", height: "40px", paddingRight: "10px" }}/><br></br>Loading...</center></div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}><br></br><img src="https://cdn-icons-png.flaticon.com/128/3139/3139247.png" alt='shopping bag' style={{ width: "50px", height: "40px", paddingRight: "10px" }}/><b>NZ Fashion</b></h1>
      <h3 style={{ textAlign: "center" }}>Welcome to Our Fashion Store</h3><br></br>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <ScrollLink className="nav-link" to="about-section" smooth={true} duration={500}>About us</ScrollLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="subscribe-section" smooth={true} duration={500}>Subscribe</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="contact-section" smooth={true} duration={500}>Contact Me</ScrollLink>
              </li>
              {isAuthenticated ? (
                <li className="nav-item">
                  <button className="nav-link btn sign-out" onClick={handleLogout}>Login</button>
                </li>
              ) : (
                <li className="nav-item">
                  <Login setIsAuthenticated={setIsAuthenticated} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {isAuthenticated && (
        <>
          {/* Authenticated user content */}
          <section className="py-5" id="offers">
            <div className="container">
              <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="col-lg-8 d-flex align-items-stretch" style={{ flexBasis: "48%" }}>
                  <div style={{ padding: "20px" }}>
                    <h2 style={{ paddingLeft: "10px" }}>50% OFF on T-Shirts</h2><br />
                    <h2 style={{ paddingLeft: "10px" }}>All New Products</h2><br />
                    <p style={{ paddingLeft: "100px", color: "white", backgroundColor: "#858FBB" }}><b>For Men</b></p>
                    <p style={{ paddingLeft: "100px", color: "white", backgroundColor: "#858FBB" }}><b>For Women</b></p>
                    <p style={{ paddingLeft: "100px", color: "white", backgroundColor: "#858FBB" }}><b>For Kids</b></p>
                  </div>
                </div>
                <div className="col-lg-8 d-flex align-items-stretch" style={{ flexBasis: "48%" }}>
                  <div style={{ padding: "1px" }}>
                    <img src="https://logan.nnnow.com/content/dam/nnnow-project/19-feb-2024/th/sec2/20FEB24-TH-BP-TH-Sec2-01copy.jpg" alt="Fashion models" style={{ width: "500px", height: "300px", paddingRight: "10px" }} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="products" style={{ backgroundColor: "#858FBB" }}>
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch" style={{ paddingBottom: "10px" }}>
                <Link to="/shoes" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card-body">
                    <h2>Shoes</h2>
                    <p>Explore our latest collection of trendy Shoes.</p>
                    <img src="https://logan.nnnow.com/content/dam/nnnow-project/21-may-2024/th/categories/TOMMYHILFIGER-CATEGORY-4-TOMMYHILFIGER-Footwear-21-05-2024-dsk.jpg" alt="Shoes" style={{ height: "350px", width: "300px" }} />
                </div>
                </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch" style={{ paddingBottom: "10px" }}>
                <Link to="/watches" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card-body">
                    <h2>Watches</h2>
                    <p>Explore our latest collection of trendy Watches.</p>
                    <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/a/m/l/-original-imagpb5yez5xmhak.jpeg?q=70&crop=false" alt="Watches" style={{ height: "350px", width: "300px" }} />
                </div>
                </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch" style={{ paddingBottom: "10px" }}>
                <Link to="/wallets" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card-body">
                    <h2>Wallets</h2>
                    <p>Explore our latest collection of trendy Wallets.</p>
                    <img src="https://th.bing.com/th?id=OPAC.Ss0V2wGeULB2BQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1" alt="wallets" style={{ height: "350px", width: "300px" }} />
                </div>
                </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch" style={{ paddingBottom: "10px" }}>
                <Link to="/handbags" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card-body">
                    <h2>Handbags</h2>
                    <p>Explore our latest collection of trendy Handbags.</p>
                    <img src="https://shoptommy.scene7.com/is/image/ShopTommy/AW16109_AEF_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp" alt="Handbags" style={{ height: "350px", width: "300px" }} />
                </div>
                </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch" style={{ paddingBottom: "10px" }}>
                <div className="card-body">
                    <h2>Mens Wear</h2>
                    <p>Explore our latest collection of trendy Mens Wear.</p>
                    <img src="https://logan.nnnow.com/content/dam/nnnow-project/19-feb-2024/th/pstories/20FEB24-TH-BP-P-Stories-02.jpg" alt="Mens Wear" style={{ height: "350px", width: "300px" }} />
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch" style={{ paddingBottom: "10px" }}>
                <div className="card-body">
                    <h2>Womens wear</h2>
                    <p>Explore our latest collection of trendy Womens wear.</p>
                    <img src="https://logan.nnnow.com/content/dam/nnnow-project/19-feb-2024/th/pstories/20FEB24-TH-BP-P-Stories-04.jpg" alt="Womens wear" style={{ height: "350px", width: "300px" }} />
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch" style={{ paddingBottom: "10px" }}>
                <div className="card-body">
                    <h2>Jeans</h2>
                    <p>Explore our latest collection of trendy Jeans.</p>
                    <img src="https://cdn06.nnnow.com/web-images/medium/styles/5X0MY7FTTIH/1702365579040/1.jpg" alt="Jeans" style={{ height: "350px", width: "300px" }} />
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch" style={{ paddingBottom: "10px" }}>
                <div className="card-body">
                    <h2>T-Shirts</h2>
                    <p>Explore our latest collection of trendy Top & T-Shirts.</p>
                    <img src="https://cdn07.nnnow.com/web-images/medium/styles/VSFBDMRPTFM/1704352519643/1.jpg" alt="T-Shirts" style={{ height: "350px", width: "300px" }} />
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch" style={{ paddingBottom: "10px" }}>
                <div className="card-body">
                    <h2>Kids wear</h2>
                    <p>Explore our latest collection of trendy Kids wear.</p>
                    <img src="https://shoptommy.scene7.com/is/image/ShopTommy/KB09057_YBH_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp" alt="kids wear" style={{ height: "350px", width: "300px" }} />
                </div>
            </div>
        </div>
    </div>
</section>
        </>
      )}

<Element name="about-section">
      <section className="py-5" id="about">
        <div className="container">
          <h2>About us</h2>
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <p>
                Welcome to the NZ official online store, where timeless style meets contemporary fashion. Explore our curated collection of iconic shirts, t-shirts, wallets, and more for men, women, and kids. Immerse yourself in the world of NZ, offering a wide range of youthful American‐inspired apparel and accessories globally since Navaneeth introduced his signature collection in 2020. Whether you are seeking sophisticated essentials or premium statement pieces, NZ clothes dedicatedly provide you with quality craftsmanship and effortless elegance. Step into a world of modern dressing where every item tells a story of confidence and authenticity. Start your style journey today at the NZ Official website for India.
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="avatar" style={{ width: "300px", height: "300px", borderRadius: "50%", overflow: "hidden" }}>
                <img src= ".\WhatsApp Image 2023-05-21 at 8.27.08 PM.jpeg" alt="Navaneeth" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
          <ScrollLink to="about-section" smooth={true} duration={500} className="btn btn-primary mt-3">
            See More
          </ScrollLink>
        </div>
      </section>
    </Element>

      <Element name="subscribe-section">
        <section className="newsletter" id="sub">
          <div className="container">
            <h2>Subscribe to Our Newsletter & Offers</h2>
            <form action="subscribe.php" method="post">
              <input type="email" name="email" placeholder="Enter your email" style={{ width: "550px" }} />
              <button type="submit">Subscribe</button>
            </form>
          </div><br></br>
        </section>
      </Element>

      <Element name="contact-section">
        <section className="py-5" id="contact">
          <div className="container">
            <h2>Contact Me</h2>
            <form>
              <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </section>
      </Element>

      <footer style={{ backgroundColor: "#858FBB" }}>
        <div className="container">
          <p style={{ color: 'snow' }}>&copy; 2024 NZ Fashion Store. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Initial;
