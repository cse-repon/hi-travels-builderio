import React, { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: '"The women-only tour was a life-changing experience. Safe, luxurious, and spiritually uplifting."',
      author: '– Sarah A.',
      rating: 5
    },
    {
      id: 2,
      quote: '"Booking my trip through Hi Travels was seamless. Every detail was perfectly handled."',
      author: '– Emily R.',
      rating: 5
    },
    {
      id: 3,
      quote: '"An unforgettable journey with amazing support throughout. Highly recommended!"',
      author: '– Jessica M.',
      rating: 5
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-surface-page py-[100px] px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {/* Left - Main testimonial */}
          <div className="p-8 rounded-2xl bg-surface-recessed flex flex-col justify-end items-start gap-8">
            <p className="text-text-primary font-geist text-2xl font-normal leading-9">
              {testimonials[currentSlide].quote}
            </p>
            <div className="flex justify-between items-center w-full">
              <p className="text-text-secondary font-geist text-xl font-normal leading-[34px]">
                {testimonials[currentSlide].author}
              </p>
              <div className="flex gap-1">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#D5A835" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Secondary testimonials */}
          <div className="space-y-4">
            {[1, 2].map((idx) => {
              const index = (currentSlide + idx) % testimonials.length;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-2xl bg-surface-recessed opacity-60 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setCurrentSlide(index)}
                >
                  <p className="text-text-primary font-geist text-lg font-normal leading-7 line-clamp-2">
                    {testimonials[index].quote}
                  </p>
                  <p className="text-text-secondary font-geist text-sm font-normal leading-6 mt-3">
                    {testimonials[index].author}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
