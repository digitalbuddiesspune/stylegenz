import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, X, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-8" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

        {/* --- Company Info --- */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center mb-3 sm:mb-4">
            <Link to="/" className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1771580651/acbfef03-8cd9-4c6f-a75c-695345cf35f1.png" 
                alt="Stylegenz" 
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
                style={{ maxWidth: '280px' }}
              />
            </Link>
          </div>
          <p className="text-xs sm:text-sm leading-6" style={{ color: 'var(--bg-primary)' }}>
            Discover premium leather shoes made with 100% eco-friendly vegan leather at unbeatable prices.
            Step out in style with the latest trends and comfort-focused designs.
          </p>
          <div className="flex gap-3 sm:gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition-colors" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>
              <Facebook className="w-5 h-5 sm:w-5 sm:h-5" size={20}/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition-colors" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>
              <Instagram className="w-5 h-5 sm:w-5 sm:h-5" size={20}/>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="transition-colors" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'} aria-label="X (Twitter)">
              <X className="w-5 h-5 sm:w-5 sm:h-5" size={20}/>
            </a>
          </div>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: 'var(--bg-primary)' }}>Quick Links</h2>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><Link to="/" className="transition-colors" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>Home</Link></li>
            <li><Link to="/about" className="transition-colors" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>About Us</Link></li>
            <li><Link to="/shop" className="transition-colors" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>Shop</Link></li>
          </ul>
        </div>

        {/* --- Product Categories --- */}
        <div>
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: 'var(--bg-primary)' }}>Categories</h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/category/Men's%20Shoes" className="transition-colors" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>Men's Shoes</Link></li>
              <li><Link to="/category/Women's%20Shoes" className="transition-colors" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>Women's Shoes</Link></li>
              <li><Link to="/category/Kids%20Shoes" className="transition-colors" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>Kids Shoes</Link></li>
            </ul>
        </div>

        {/* --- Get in Touch --- */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: 'var(--bg-primary)' }}>Get in Touch</h2>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <li className="font-semibold" style={{ color: 'var(--bg-primary)' }}>
              STYLEGENZ BY DYMA INFOTECH PRIVATE LIMITED
            </li> 
            <li className="flex items-start gap-2" style={{ color: 'var(--bg-primary)' }}>
              <MapPin className="w-4 h-4 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" size={16}/>
              <span className="break-words">Flat No. D-806, Tower D, Shri Ram Heights, Raj Nagar Extension, Ghaziabad, Ghaziabad, Uttar Pradesh, India, 201017</span>
            </li>
            <li style={{ color: 'var(--bg-primary)' }}>
              <span className="font-medium">GST No.</span> 07AAMCD1083H1ZM
            </li>
            <li style={{ color: 'var(--bg-primary)' }}>
              <span className="font-medium">CIN</span> U47912UP2025PTC234693
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 sm:w-4 sm:h-4 flex-shrink-0" size={16} style={{ color: 'var(--bg-primary)' }}/>
              <a href="mailto:dyma.infotech.dipl@gmail.com" className="transition-colors break-all" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>dyma.infotech.dipl@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-xs sm:text-sm text-center md:text-left" style={{ color: 'var(--bg-primary)' }}>
              © {new Date().getFullYear()} Stylegenz by Dyma Infotech Pvt. Ltd. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-4 gap-y-2 text-xs sm:text-sm">
              <Link to="/privacy-policy" className="transition-colors whitespace-nowrap" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>
                Privacy Policy
              </Link>
              <span className="hidden sm:inline" style={{ color: 'var(--bg-primary)' }}>•</span>
              <Link to="/terms-of-service" className="transition-colors whitespace-nowrap" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>
                Refund & Cancellation Policy
              </Link>
              <span className="hidden sm:inline" style={{ color: 'var(--bg-primary)' }}>•</span>
              <Link to="/shipping-policy" className="transition-colors whitespace-nowrap" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>
                Shipping Policy
              </Link>
              <span className="hidden sm:inline" style={{ color: 'var(--bg-primary)' }}>•</span>
              <Link to="/return-policy" className="transition-colors whitespace-nowrap" style={{ color: 'var(--bg-primary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--bg-primary)'}>
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
