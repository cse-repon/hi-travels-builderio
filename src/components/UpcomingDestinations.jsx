import React from 'react';
import { Button } from '@nextui-org/react';

const UpcomingDestinations = () => {
  const destinations = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Spiritual Journey',
      date: 'Starting at 03.2025',
      category: 'SPIRITUAL'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Beach Escape',
      date: 'Starting at 02.2025',
      category: 'ADVENTURE'
    }
  ];

  return (
    <section className="w-full bg-surface-page py-[100px] px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-end gap-[50px] mb-[50px]">
          {/* Left - Description */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="mb-8">
              <h2 className="text-text-primary font-playfair text-5xl font-bold leading-[62px] tracking-[-2px] capitalize mb-4">
                Upcoming Destinations You Can't Miss
              </h2>
              <p className="text-text-secondary font-geist text-2xl font-normal leading-9">
                Reserve your spot and start your next journey with Hi travels.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-text-primary hover:bg-text-primary hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9999 11H9.4099L12.7099 7.71C12.8982 7.5217 13.004 7.2663 13.004 7C13.004 6.7337 12.8982 6.4783 12.7099 6.29C12.5216 6.1017 12.2662 5.99591 11.9999 5.99591C11.7336 5.99591 11.4782 6.1017 11.2899 6.29L6.2899 11.29C6.19886 11.3851 6.12749 11.4972 6.0799 11.62C5.97988 11.8635 5.97988 12.1365 6.0799 12.38C6.12749 12.5028 6.19886 12.6149 6.2899 12.71L11.2899 17.71C11.3829 17.8037 11.4935 17.8781 11.6153 17.9289C11.7372 17.9797 11.8679 18.0058 11.9999 18.0058C12.1319 18.0058 12.2626 17.9797 12.3845 17.9289C12.5063 17.8781 12.6169 17.8037 12.7099 17.71C12.8036 17.617 12.878 17.5064 12.9288 17.3846C12.9796 17.2627 13.0057 17.132 13.0057 17C13.0057 16.868 12.9796 16.7373 12.9288 16.6154C12.878 16.4936 12.8036 16.383 12.7099 16.29L9.4099 13H16.9999C17.2651 13 17.5195 12.8946 17.707 12.7071C17.8945 12.5196 17.9999 12.2652 17.9999 12C17.9999 11.7348 17.8945 11.4804 17.707 11.2929C17.5195 11.1054 17.2651 11 16.9999 11Z" fill="currentColor"/>
                </svg>
              </button>
              <button className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-text-primary bg-text-primary text-white hover:opacity-80 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.92 11.62C17.8724 11.4972 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73757 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right - Cards */}
          <div className="flex items-center gap-6 w-[867px]">
            {destinations.map((dest) => (
              <div 
                key={dest.id}
                className="w-[422px] h-[500px] p-6 flex flex-col justify-between rounded-2xl relative overflow-hidden group cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url(${dest.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                    <span className="text-white text-xs font-medium font-geist">{dest.category}</span>
                  </div>
                </div>

                <div>
                  <p className="text-white text-sm font-normal leading-5 mb-2 font-geist">{dest.date}</p>
                  <h3 className="text-white text-3xl font-bold leading-[42px] tracking-[-1px] capitalize font-playfair mb-4">
                    {dest.title}
                  </h3>
                  <button className="flex items-center gap-2 text-white font-geist text-sm font-medium hover:opacity-80 transition-opacity">
                    <span>Learn More</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.92 11.62C17.8724 11.4972 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73757 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z" fill="white"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingDestinations;
