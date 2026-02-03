import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'plane',
      title: 'Flight Booking',
      description: 'Find the best routes and prices with ease for your next destination.',
    },
    {
      id: 2,
      icon: 'building',
      title: 'Hotel Reservation',
      description: 'Stay at handpicked hotels that blend comfort with exceptional hospitality.',
    },
    {
      id: 3,
      icon: 'briefcase',
      title: 'Tailored Tours',
      description: 'Personalized travel experiences designed to match your unique style.',
    },
    {
      id: 4,
      icon: 'package',
      title: 'Visa Assistance',
      description: 'Hassle-free visa processing to open doors to your destinations.',
    },
  ];

  const renderIcon = (iconType) => {
    const icons = {
      plane: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.9167 19.4167C48.0472 18.8814 47.9729 18.3166 47.7084 17.8333C47.0332 16.6617 46.1333 15.635 45.0603 14.8121C43.9874 13.9891 42.7625 13.3861 41.4559 13.0377C40.1494 12.6893 38.7869 12.6023 37.4466 12.7817C36.1064 12.9612 34.8148 13.4035 33.6459 14.0833L29.1667 16.6667L18.75 11.7708C18.4539 11.6174 18.1252 11.5373 17.7917 11.5373C17.4582 11.5373 17.1295 11.6174 16.8334 11.7708L10.5834 15.375C10.2745 15.5532 10.0165 15.8076 9.83412 16.114C9.65173 16.4204 9.55104 16.7685 9.54169 17.125C9.5316 17.4841 9.61455 17.8397 9.78246 18.1573C9.95038 18.4749 10.1976 18.7436 10.5 18.9375L17.375 23.2708L13.75 25.3542L3.79169 26.5625C3.39137 26.612 3.01403 26.7767 2.70549 27.0365C2.39695 27.2963 2.17047 27.6401 2.05355 28.0262C1.93663 28.4123 1.9343 28.824 2.04684 29.2113C2.15938 29.5987 2.38195 29.945 2.68753 30.2083L10.0625 36.5833C11.0335 37.51 12.2769 38.0995 13.6089 38.2645C14.9408 38.4296 16.2906 38.1616 17.4584 37.5L46.875 20.6875C47.1257 20.5574 47.3474 20.3776 47.5265 20.1591C47.7055 19.9406 47.8383 19.688 47.9167 19.4167Z" fill="#2D2533"/>
        </svg>
      ),
      building: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.1667 16.6667H31.2501C31.8026 16.6667 32.3325 16.4472 32.7232 16.0565C33.1139 15.6658 33.3334 15.1359 33.3334 14.5833C33.3334 14.0308 33.1139 13.5009 32.7232 13.1102C32.3325 12.7195 31.8026 12.5 31.2501 12.5H29.1667C28.6142 12.5 28.0843 12.7195 27.6936 13.1102C27.3029 13.5009 27.0834 14.0308 27.0834 14.5833C27.0834 15.1359 27.3029 15.6658 27.6936 16.0565C28.0843 16.4472 28.6142 16.6667 29.1667 16.6667ZM29.1667 25H31.2501C31.8026 25 32.3325 24.7805 32.7232 24.3898C33.1139 23.9991 33.3334 23.4692 33.3334 22.9167C33.3334 22.3641 33.1139 21.8342 32.7232 21.4435C32.3325 21.0528 31.8026 20.8333 31.2501 20.8333H29.1667C28.6142 20.8333 28.0843 21.0528 27.6936 21.4435C27.3029 21.8342 27.0834 22.3641 27.0834 22.9167C27.0834 23.4692 27.3029 23.9991 27.6936 24.3898C28.0843 24.7805 28.6142 25 29.1667 25ZM18.7501 16.6667H20.8334C21.386 16.6667 21.9159 16.4472 22.3066 16.0565C22.6973 15.6658 22.9167 15.1359 22.9167 14.5833C22.9167 14.0308 22.6973 13.5009 22.3066 13.1102C21.9159 12.7195 21.386 12.5 20.8334 12.5H18.7501C18.1975 12.5 17.6676 12.7195 17.2769 13.1102C16.8862 13.5009 16.6667 14.0308 16.6667 14.5833C16.6667 15.1359 16.8862 15.6658 17.2769 16.0565C17.6676 16.4472 18.1975 16.6667 18.7501 16.6667ZM18.7501 25H20.8334C21.386 25 21.9159 24.7805 22.3066 24.3898C22.6973 23.9991 22.9167 23.4692 22.9167 22.9167C22.9167 22.3641 22.6973 21.8342 22.3066 21.4435C21.9159 21.0528 21.386 20.8333 20.8334 20.8333H18.7501C18.1975 20.8333 17.6676 21.0528 17.2769 21.4435C16.8862 21.8342 16.6667 22.3641 16.6667 22.9167C16.6667 23.4692 16.8862 23.9991 17.2769 24.3898C17.6676 24.7805 18.1975 25 18.7501 25Z" fill="#2D2533"/>
        </svg>
      ),
      briefcase: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.5834 13.5417H33.3334V11.4583C33.3334 9.80074 32.6749 8.21103 31.5028 7.03893C30.3307 5.86682 28.741 5.20834 27.0834 5.20834H22.9167C21.2591 5.20834 19.6694 5.86682 18.4973 7.03893C17.3252 8.21103 16.6667 9.80074 16.6667 11.4583V13.5417H10.4167C8.75915 13.5417 7.16943 14.2002 5.99733 15.3723C4.82523 16.5444 4.16675 18.1341 4.16675 19.7917V38.5417C4.16675 40.1993 4.82523 41.789 5.99733 42.9611C7.16943 44.1332 8.75915 44.7917 10.4167 44.7917H39.5834C41.241 44.7917 42.8307 44.1332 44.0028 42.9611C45.1749 41.789 45.8334 40.1993 45.8334 38.5417V19.7917C45.8334 18.1341 45.1749 16.5444 44.0028 15.3723C42.8307 14.2002 41.241 13.5417 39.5834 13.5417Z" fill="#2D2533"/>
        </svg>
      ),
      package: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5834 29.1667H18.7501C19.3026 29.1667 19.8325 28.9472 20.2232 28.5565C20.6139 28.1658 20.8334 27.6359 20.8334 27.0833C20.8334 26.5308 20.6139 26.0009 20.2232 25.6102C19.8325 25.2195 19.3026 25 18.7501 25H14.5834C14.0309 25 13.501 25.2195 13.1103 25.6102C12.7196 26.0009 12.5001 26.5308 12.5001 27.0833C12.5001 27.6359 12.7196 28.1658 13.1103 28.5565C13.501 28.9472 14.0309 29.1667 14.5834 29.1667Z" fill="#2D2533"/>
        </svg>
      ),
    };
    return icons[iconType] || icons.plane;
  };

  return (
    <section className="w-full bg-surface-page py-[100px] px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-[50px]">
          <h2 className="text-text-primary font-playfair text-5xl font-bold leading-[62px] tracking-[-2px] capitalize">
            Step Into Your Gateway<br />To Smooth, Stress-Free,<br />and Seamless Travel
          </h2>
          <p className="text-text-secondary font-geist text-2xl font-normal leading-9 max-w-[400px]">
            Experience a world of convenience with our curated suite of travel services.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-start gap-8">
              <div className="text-text-primary">
                {renderIcon(service.icon)}
              </div>
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-text-primary font-geist text-2xl font-semibold leading-[30px]">
                  {service.title}
                </h3>
                <p className="text-text-secondary font-geist text-lg font-normal leading-[30px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
