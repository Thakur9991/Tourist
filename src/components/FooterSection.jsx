import React from 'react';

const FooterSection = () => {
  const topDestinations = [
    'Indonesia, Jakarta',
    'Maldives, Malé',
    'Australia, Canberra',
    'Thailand, Bangkok',
    'Morocco, Rabat',
  ];

  const categories = ['Travel', 'Lifestyle', 'Fashion', 'Education', 'Food & Drink'];

  const quickLinks = ['About', 'Contact', 'Tours', 'Booking', 'Terms & Conditions'];

  const socialLinks = [
    { name: 'logo-facebook', href: '#' },
    { name: 'logo-twitter', href: '#' },
    { name: 'logo-instagram', href: '#' },
    { name: 'logo-linkedin', href: '#' },
    { name: 'logo-google', href: '#' },
  ];

  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url('./assets/images/footer-bg.png')" }}
    >
      <div className="container">
        <div className="footer-top">
          {/* Top Destinations */}
          <FooterList title="Top destination" items={topDestinations} />
          
          {/* Categories */}
          <FooterList title="Categories" items={categories} />
          
          {/* Quick Links */}
          <FooterList title="Quick links" items={quickLinks} />

          {/* Newsletter */}
          <div className="footer-list">
            <p className="footer-list-title">Get a newsletter</p>
            <p className="newsletter-text">
              For the latest deals and tips, travel no further than your inbox
            </p>
            <form action="" className="newsletter-form">
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <a href="#" className="logo">Tourest</a>
          <p className="copyright">
            &copy; 2022 <a href="#" className="copyright-link">codewithsadee</a>. All Rights Reserved
          </p>
          <ul className="social-list">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a href={social.href} className="social-link">
                  <ion-icon name={social.name}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Go to Top Button */}
      <a href="#top" className="go-top" data-go-top aria-label="Go To Top">
        <ion-icon name="chevron-up-outline"></ion-icon>
      </a>
    </footer>
  );
};

// Footer List Component
const FooterList = ({ title, items }) => (
  <ul className="footer-list">
    <li>
      <p className="footer-list-title">{title}</p>
    </li>
    {items.map((item, index) => (
      <li key={index}>
        <a href="#" className="footer-link">
          {item}
        </a>
      </li>
    ))}
  </ul>
);

export default FooterSection;
