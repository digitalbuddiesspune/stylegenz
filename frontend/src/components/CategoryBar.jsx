import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { categories } from "../data/categories";

// Category images mapping
const categoryImages = {
  "Men's Shoes": {
    Formal: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767962144/Burgundy_6c4b8044-875f-4f4d-8c5d-48594fd5c2e8_xsihes.png",
    Boots: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768819095/Design_to_Shine_10_pbnjsz.png",
    Loafers: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768815438/Design_to_Shine_2_nsvvj4.png",
    Sandals: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768888263/Design_to_Shine_12_y8db8l.png",
  },
  "Women's Shoes": {
    Heels: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768816813/Design_to_Shine_6_nnvd09.png",
    Flats: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767961863/Black_413baa88-b0de-4fc3-b05f-e105fd8ee46c_ujdcky.png",
    Boots: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768817045/Design_to_Shine_7_c8yl08.png",
    Sandals: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768817708/Design_to_Shine_8_scnj6k.png",
    Chappals: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768818744/Design_to_Shine_9_l0gcjq.png",
  },
  "Kids Shoes": {
    "Boys Footwear": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768816257/Design_to_Shine_5_u0hral.png",
    "Girls Footwear": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768816178/Design_to_Shine_4_d24zsv.png",
  },
  "Shoes Accessories": {
    "Shoe Laces": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767962144/Burgundy_6c4b8044-875f-4f4d-8c5d-48594fd5c2e8_xsihes.png",
    "Shoe Polish": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767962100/Ivory_3317ac8f-5280-4a25-96d7-446175aff87e_le5bn3.png",
    "Shoe Insoles": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768819095/Design_to_Shine_10_pbnjsz.png",
    "Shoe Bags": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768815438/Design_to_Shine_2_nsvvj4.png",
    "Shoe Trees": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768888263/Design_to_Shine_12_y8db8l.png",
    "Shoe Care Kits": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768816813/Design_to_Shine_6_nnvd09.png",
  },
};

// Men's Shoes Dropdown
const MensShoesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const mensShoesRef = useRef(null);
  const isActive = location.pathname.includes("Men's%20Shoes") || location.pathname.includes("Men's Shoes");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mensShoesRef.current && !mensShoesRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategorySelect = (category) => {
    setIsOpen(false);
    if (category === "All") {
      navigate(`/category/Men's%20Shoes`);
    } else {
      const params = new URLSearchParams({ subCategory: category.toLowerCase() });
      navigate(`/category/Men's%20Shoes?${params.toString()}`);
    }
  };

  const subcategories = ["Formal", "Boots", "Loafers", "Sandals"];

  return (
    <div className="relative" ref={mensShoesRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`group flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 backdrop-blur-sm border rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm font-medium shadow-sm min-w-[100px] sm:min-w-[140px] justify-between ${
          isActive || isOpen ? "bg-red-50 border-red-800" : "bg-bg-primary border-gray-700 hover:border-red-800 hover:bg-red-50"
        }`}
      >
        <span className={`transition-colors truncate ${isActive || isOpen ? "text-red-800 font-semibold" : "text-gray-700 group-hover:text-red-800"}`}>Men's Shoes</span>
        <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""} ${isActive || isOpen ? "text-red-800" : "text-gray-400 group-hover:text-red-800"}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-4xl bg-white rounded-lg shadow-2xl z-[100] border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Featured:</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <button onClick={() => navigate(`/category/Men's%20Shoes?sort=bestselling`)} className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Best Selling</span>
                  <ArrowRight className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                </button>
                <button onClick={() => navigate(`/category/Men's%20Shoes?sort=trending`)} className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Trending</span>
                  <ArrowRight className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                </button>
                <button onClick={() => navigate(`/category/Men's%20Shoes`)} className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>All Products For Men</span>
                  <ArrowRight className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                </button>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-3 gap-4">
                  {subcategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className="group relative rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#E8F0F5" }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img src={categoryImages["Men's Shoes"][category] || "https://res.cloudinary.com/dfhjtmvrz/image/upload/v1765632321/-4_rmrf0v.jpg"} alt={category} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="p-4 text-center">
                        <span className="text-base font-semibold" style={{ color: "#4A5568" }}>{category}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Women's Shoes Dropdown
const WomensShoesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const womensShoesRef = useRef(null);
  const isActive = location.pathname.includes("Women's%20Shoes") || location.pathname.includes("Women's Shoes");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (womensShoesRef.current && !womensShoesRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategorySelect = (category) => {
    setIsOpen(false);
    if (category === "All") {
      navigate(`/category/Women's%20Shoes`);
    } else {
      const params = new URLSearchParams({ subCategory: category.toLowerCase() });
      navigate(`/category/Women's%20Shoes?${params.toString()}`);
    }
  };

  const subcategories = ["Heels", "Flats", "Boots", "Sandals", "Chappals"];

  return (
    <div className="relative" ref={womensShoesRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`group flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 backdrop-blur-sm border rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm font-medium shadow-sm min-w-[100px] sm:min-w-[140px] justify-between ${
          isActive || isOpen ? "bg-red-50 border-red-800" : "bg-bg-primary border-gray-700 hover:border-red-800 hover:bg-red-50"
        }`}
      >
        <span className={`transition-colors truncate ${isActive || isOpen ? "text-red-800 font-semibold" : "text-gray-700 group-hover:text-red-800"}`}>Women's Shoes</span>
        <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""} ${isActive || isOpen ? "text-red-800" : "text-gray-400 group-hover:text-red-800"}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-4xl bg-white rounded-lg shadow-2xl z-[100] border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Featured:</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <button onClick={() => navigate(`/category/Women's%20Shoes?sort=bestselling`)} className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Best Selling</span>
                  <ArrowRight className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                </button>
                <button onClick={() => navigate(`/category/Women's%20Shoes?sort=trending`)} className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Trending</span>
                  <ArrowRight className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                </button>
                <button onClick={() => navigate(`/category/Women's%20Shoes`)} className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>All Products For Women</span>
                  <ArrowRight className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                </button>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-3 gap-4">
                  {subcategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className="group relative rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#F5E6E8" }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img src={categoryImages["Women's Shoes"][category] || "https://res.cloudinary.com/dfhjtmvrz/image/upload/v1765633228/Step_into_style_ouhtyb.jpg"} alt={category} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="p-4 text-center">
                        <span className="text-base font-semibold" style={{ color: "#4A5568" }}>{category}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Kids Shoes Dropdown
const KidsShoesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const kidsShoesRef = useRef(null);
  const isActive = location.pathname.includes("Kids%20Shoes") || location.pathname.includes("Kids Shoes");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (kidsShoesRef.current && !kidsShoesRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategorySelect = (category) => {
    setIsOpen(false);
    if (category === "All") {
      navigate(`/category/Kids%20Shoes`);
    } else {
      const params = new URLSearchParams({ subCategory: category.toLowerCase() });
      navigate(`/category/Kids%20Shoes?${params.toString()}`);
    }
  };

  const subcategories = categories["Kids Shoes"]?.fields?.SubCategory || ["Boys Footwear", "Girls Footwear"];

  return (
    <div className="relative" ref={kidsShoesRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`group flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 backdrop-blur-sm border rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm font-medium shadow-sm min-w-[100px] sm:min-w-[140px] justify-between ${
          isActive || isOpen ? "bg-red-50 border-red-800" : "bg-bg-primary border-gray-700 hover:border-red-800 hover:bg-red-50"
        }`}
      >
        <span className={`transition-colors truncate ${isActive || isOpen ? "text-red-800 font-semibold" : "text-gray-700 group-hover:text-red-800"}`}>Kids Shoes</span>
        <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""} ${isActive || isOpen ? "text-red-800" : "text-gray-400 group-hover:text-red-800"}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] max-w-xl bg-white rounded-lg shadow-2xl z-[100] border border-gray-200 overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>Featured:</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <div className="lg:col-span-1 space-y-2">
                <button onClick={() => navigate(`/category/Kids%20Shoes?sort=bestselling`)} className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                  <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>Best Selling</span>
                  <ArrowRight className="w-3 h-3" style={{ color: "var(--text-secondary)" }} />
                </button>
                <button onClick={() => navigate(`/category/Kids%20Shoes?sort=trending`)} className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                  <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>Trending</span>
                  <ArrowRight className="w-3 h-3" style={{ color: "var(--text-secondary)" }} />
                </button>
                <button onClick={() => navigate(`/category/Kids%20Shoes`)} className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                  <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>All Products For Kids</span>
                  <ArrowRight className="w-3 h-3" style={{ color: "var(--text-secondary)" }} />
                </button>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  {subcategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className="group relative rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#E8F5E9" }}
                    >
                      <div className="relative h-36 overflow-hidden">
                        <img src={categoryImages["Kids Shoes"][category] || "https://res.cloudinary.com/dfhjtmvrz/image/upload/v1765632321/-4_rmrf0v.jpg"} alt={category} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="p-2.5 text-center">
                        <span className="text-xs font-semibold" style={{ color: "#4A5568" }}>{category}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Shoes Accessories – direct link (no chevron)
const ShoesAccessoriesButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname.includes("Shoes%20Accessories") || location.pathname.includes("Shoes Accessories");

  return (
    <button
      onClick={() => navigate(`/category/${encodeURIComponent("Shoes Accessories")}`)}
      className={`group flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 backdrop-blur-sm border rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm font-medium shadow-sm min-w-[100px] sm:min-w-[140px] ${
        isActive ? "bg-purple-50 border-purple-800" : "bg-bg-primary border-gray-700 hover:border-purple-800 hover:bg-purple-50"
      }`}
    >
      <span className={`transition-colors truncate ${isActive ? "text-purple-800 font-semibold" : "text-gray-700 group-hover:text-purple-800"}`}>Shoes Accessories</span>
    </button>
  );
};

/** Category bar: Men's Shoes, Women's Shoes, Kids Shoes, Shoes Accessories. Renders below the main header (below the line). */
const CategoryBar = () => {
  return (
    <nav aria-label="Category bar" className="hidden md:block border-t w-full" style={{ borderColor: "var(--border-color)" }}>
      <div className="w-full py-1.5 sm:py-2 px-0">
        <div className="flex justify-center items-center gap-2 md:gap-3 flex-wrap">
          <MensShoesDropdown />
          <WomensShoesDropdown />
          <KidsShoesDropdown />
          <ShoesAccessoriesButton />
        </div>
      </div>
    </nav>
  );
};

export default CategoryBar;
