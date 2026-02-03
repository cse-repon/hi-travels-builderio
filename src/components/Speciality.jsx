import React from 'react';
import { Button } from '@nextui-org/react';

const Speciality = () => {
  const specialties = [
    {
      id: 1,
      title: 'Hajj And Umrah',
      description: 'Experience the spiritual journey of a lifetime with our curated Hajj and Umrah packages.',
      bgColor: 'bg-spirituals-card',
      accentColor: 'bg-spirituals-accent',
      textColor: 'text-white',
      buttonColor: 'border-spirituals-accent text-spirituals-accent',
      points: ['Safety & Comfort First', 'Sisterhood & Support', 'Cultural Immersion'],
    },
    {
      id: 2,
      title: 'Women Trips',
      description: 'Join our exclusive women-only travel experiences designed for adventure and connection.',
      bgColor: 'bg-women-card',
      accentColor: 'bg-women-accent',
      textColor: 'text-text-primary',
      buttonColor: 'border-women-recessed text-women-accent',
      points: ['Safety & Comfort First', 'Sisterhood & Support', 'Cultural Immersion'],
    },
    {
      id: 3,
      title: 'Student Services',
      description: 'Affordable travel packages designed for students seeking memorable adventures.',
      bgColor: 'bg-students-card',
      accentColor: 'bg-students-accent',
      textColor: 'text-text-primary',
      buttonColor: 'border-students-recessed text-students-accent',
      points: ['Safety & Comfort First', 'Sisterhood & Support', 'Cultural Immersion'],
    },
  ];

  return (
    <section className="w-full bg-surface-page py-[100px] px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-text-primary font-playfair text-5xl font-bold leading-[62px] tracking-[-2px] capitalize">
            Our speciality
          </h2>
          <p className="text-text-secondary font-geist text-2xl font-normal leading-9">
            To be added
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {specialties.map((specialty) => (
            <div 
              key={specialty.id}
              className={`p-6 rounded-2xl flex flex-col items-start gap-10 justify-center ${specialty.bgColor}`}
            >
              {/* Header */}
              <div className="flex justify-between items-center w-full">
                <h3 className={`font-playfair text-3xl font-bold leading-[42px] tracking-[-1px] capitalize ${specialty.textColor}`}>
                  {specialty.title}
                </h3>
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45.1871 0C45.1871 4.61726 48.9301 8.36029 53.5474 8.36029V10.8724C48.9331 10.8767 45.1871 14.6185 45.1871 19.2327H42.6749C42.6749 14.6197 38.9353 10.8802 34.3223 10.8802L0 10.8802V8.35259L34.3223 8.35258C38.9353 8.35258 42.6749 4.613 42.6749 0H45.1871Z" fill="currentColor"/>
                </svg>
              </div>

              {/* Description */}
              <div className="flex flex-col items-start gap-4">
                <p className={`font-geist text-lg font-normal leading-[30px] ${specialty.textColor}`}>
                  {specialty.description}
                </p>

                {/* Points */}
                <div className="flex flex-col items-start gap-3 mt-4">
                  {specialty.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${specialty.accentColor}`} />
                      <span className={`font-geist text-lg font-medium leading-[30px] ${specialty.textColor}`}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <Button 
                variant="bordered"
                className={`${specialty.buttonColor} border-2 font-geist font-medium text-base px-6 py-3 h-[46px] rounded-lg`}
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speciality;
