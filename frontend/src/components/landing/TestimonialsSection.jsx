// Testimonials Component
import { Star } from 'lucide-react';
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Sustainable Fashion Enthusiast",
      content: "ReWear has completely changed how I think about my wardrobe. I've found amazing pieces and given my clothes a second life!",
      avatar: "👩‍🦰",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Eco-Conscious Student",
      content: "The point system is genius! I've been able to refresh my wardrobe without spending money and help the environment.",
      avatar: "👨‍🎓",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Fashion Blogger",
      content: "As someone who writes about sustainable fashion, ReWear is exactly what the industry needs. Simple, effective, and impactful.",
      avatar: "👩‍💻",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Users Say</h2>
          <p className="text-xl text-slate-600">Real stories from our community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-100">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};