import React from 'react';

const TripCategory = () => {
  const destinations = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Destination Escape',
      category: 'ADVENTURE'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cultural Journey',
      category: 'CULTURE'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3657318/pexels-photo-3657318.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Beach Relaxation',
      category: 'RELAXATION'
    }
  ];

  return (
    <section className="w-full bg-surface-page py-[100px] px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="mb-12 flex justify-center items-end gap-10">
          <h2 className="w-[724px] text-text-primary font-playfair text-5xl font-bold leading-[62px] tracking-[-2px] capitalize">
            Explore Handpicked Destinations and Find the Perfect Trip for You
          </h2>
          <p className="flex-1 text-text-secondary font-geist text-2xl font-normal leading-9">
            Embark on unforgettable journeys with hi travels as your guide.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-6 h-[400px]">
          {destinations.map((dest) => (
            <div 
              key={dest.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `url(${dest.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6 group-hover:from-black/70 transition-all duration-300">
                <h3 className="text-white text-2xl font-bold leading-[36px] tracking-[-0.5px] capitalize font-playfair mb-2">
                  {dest.title}
                </h3>
                <p className="text-white/80 text-sm font-medium font-geist">
                  {dest.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripCategory;
