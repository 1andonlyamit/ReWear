import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Featured Items Carousel Component
export default function FeaturedItemsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      category: "Outerwear",
      size: "M",
      condition: "Excellent",
      points: 25,
      image: "🧥",
      user: "Sarah M."
    },
    {
      id: 2,
      title: "Floral Summer Dress",
      category: "Dresses",
      size: "S",
      condition: "Like New",
      points: 30,
      image: "👗",
      user: "Emma K."
    },
    {
      id: 3,
      title: "Designer Sneakers",
      category: "Footwear",
      size: "8",
      condition: "Good",
      points: 35,
      image: "👟",
      user: "Alex J."
    },
    {
      id: 4,
      title: "Wool Blend Sweater",
      category: "Knitwear",
      size: "L",
      condition: "Excellent",
      points: 20,
      image: "🧶",
      user: "Maya R."
    },
    {
      id: 5,
      title: "Leather Handbag",
      category: "Accessories",
      size: "One Size",
      condition: "Very Good",
      points: 40,
      image: "👜",
      user: "Lisa P."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(featuredItems.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(featuredItems.length / 3)) % Math.ceil(featuredItems.length / 3));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Items</h2>
          <p className="text-xl text-slate-600">Discover amazing pieces from our community</p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(featuredItems.length / 3) }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-6 px-4">
                    {featuredItems.slice(slideIndex * 3, slideIndex * 3 + 3).map((item) => (
                      <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-slate-100">
                        <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 text-center">
                          <div className="text-6xl mb-4">{item.image}</div>
                          <div className="bg-emerald-600 text-white text-sm px-3 py-1 rounded-full inline-block">
                            {item.points} Points
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                          <div className="flex justify-between text-sm text-slate-600 mb-3">
                            <span>{item.category}</span>
                            <span>Size: {item.size}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500">by {item.user}</span>
                            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                              {item.condition}
                            </span>
                          </div>
                          <button className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-slate-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(featuredItems.length / 3) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-emerald-600' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};