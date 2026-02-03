import React from 'react';
import { Button } from '@nextui-org/react';

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Hero Content */}
        <div className="px-12 pb-10 bg-white">
          <div className="flex items-end gap-10 py-[60px] rounded-2xl">
            {/* Left side - Heading */}
            <h1 className="flex-1 text-text-primary font-playfair text-[84px] font-bold leading-[90px] tracking-[-3px] capitalize">
              destinations you've only imagined.
            </h1>
            
            {/* Right side - Description */}
            <div className="flex flex-col justify-end items-end gap-10">
              <p className="w-[433px] text-text-secondary font-geist text-2xl font-normal leading-9">
                Explore new horizons, experience cultures, and create lasting memories.
              </p>
              <Button 
                className="bg-surface-accent text-surface-page font-geist font-medium text-base px-6 py-[14px] h-[46px] rounded-lg"
              >
                Explore Now
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[481px] px-12 pb-10 bg-white">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Scenic landscape"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              style={{ width: '1123px' }}
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-white text-sm font-normal leading-5 mb-2 font-geist">
                Featured Destination
              </div>
              <h3 className="text-white text-4xl font-bold leading-[48px] tracking-[-1.5px] capitalize font-playfair mb-3">
                Cappadocia, Turkey
              </h3>
              <p className="text-white text-lg font-normal leading-[30px] mb-4 font-geist">
                Experience the magic of hot air balloons and ancient cave dwellings.
              </p>
              <button className="flex items-center gap-2 text-white font-geist text-sm font-medium hover:opacity-80 transition-opacity">
                <span>View Destination</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.92 11.62C17.8724 11.4972 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73757 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z" fill="white"/>
                </svg>
              </button>
            </div>

            {/* WhatsApp Button */}
            <div className="absolute right-12 bottom-6 flex items-center gap-3 px-3 py-0 pr-[10px] pl-3 rounded-[56px] bg-surface-accent">
              <span className="text-[#FAF8F8] font-geist text-lg font-semibold">Say hi</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.4896 16.991C22.7553 17.0017 23.0499 17.0138 23.3296 17.6336C23.661 18.3697 24.3851 20.2099 24.4796 20.399C24.573 20.5851 24.6358 20.8036 24.5119 21.0516C24.3876 21.2998 24.3254 21.4558 24.1385 21.6732C23.9515 21.8905 23.7464 22.1588 23.5789 22.3258C23.3918 22.5113 23.1964 22.7127 23.4139 23.085C23.6319 23.4576 24.3814 24.677 25.4908 25.6643C26.9166 26.9333 28.1182 27.3279 28.4919 27.5141C28.8654 27.7003 29.0829 27.6685 29.3008 27.4198C29.5186 27.1712 30.2328 26.3324 30.4819 25.9596C30.7309 25.5869 30.9799 25.6492 31.3218 25.7735C31.6639 25.8979 33.499 26.7992 33.8725 26.9856C34.246 27.172 34.4952 27.2641 34.5884 27.4198C34.6816 27.5757 34.6809 28.3216 34.37 29.1915C34.0588 30.0611 32.5361 30.8997 31.8515 30.9619C31.167 31.0239 30.5252 31.2709 27.3728 30.0302C23.5816 28.538 21.1864 24.6611 20.9971 24.4076C20.8108 24.1587 19.4736 22.3869 19.4736 20.5541C19.4737 18.7216 20.4382 17.8204 20.78 17.4475C21.1218 17.075 21.5262 16.9823 21.775 16.9823L22.4896 16.991Z" fill="#FAF8F8"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M27.0627 8.96155C31.0581 8.96357 34.8087 10.5154 37.629 13.3323C40.45 16.1494 42.001 19.8942 42 23.8766C41.996 32.0937 35.2952 38.7804 27.0627 38.7804H27.0564C24.5569 38.7794 22.1007 38.1538 19.919 36.9666L12 39.0385L14.119 31.3155C12.81 29.0502 12.1222 26.4805 12.1253 23.8654C12.1288 15.6477 18.8291 8.96174 27.0627 8.96155ZM27.0676 11.4788C20.2194 11.4789 14.6502 17.0356 14.6475 23.8654C14.6442 26.1976 15.3024 28.4835 16.5457 30.4582L16.841 30.9271L15.5867 35.4977L20.285 34.2682L20.7391 34.5362C22.6448 35.665 24.8306 36.2619 27.0589 36.2631H27.0627C33.9057 36.2631 39.475 30.7057 39.478 23.8753C39.483 22.2476 39.165 20.6352 38.541 19.1311C37.917 17.6268 37.001 16.2599 35.8452 15.1114C34.6955 13.9568 33.3271 13.0415 31.8205 12.418C30.314 11.7945 28.6985 11.475 27.0676 11.4788Z" fill="#FAF8F8"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
