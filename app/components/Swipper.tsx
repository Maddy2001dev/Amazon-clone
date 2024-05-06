'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import img from '/images/products/laptop1.png';
// Default theme
// import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import Image from 'next/image';

export default function Swipper() {
  return (
    <div>
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          autoplay: true,
          pagination: false,
        }}
      >
        <SplideSlide className="w-full ">
          <div className="h-[600px]">
            <Image
              priority
              src="/images/products/slide1.jpg"
              alt="Image 1"
              layout="fill"
              className="object-cover"
            />
          </div>
        </SplideSlide>
        <SplideSlide className="w-full">
          <div className="">
            <Image
              priority
              src="/images/products/slide2.jpg"
              alt="Image 2"
              layout="fill"
              className="object-cover"
            />
          </div>
        </SplideSlide>
        <SplideSlide className="w-full">
          <div className="">
            <Image
              priority
              src="/images/products/slide3.jpg"
              alt="Image 3"
              layout="fill"
              className="object-cover"
            />
          </div>
        </SplideSlide>
        <SplideSlide className="w-full">
          <div className="">
            <Image
              priority
              src="/images/products/slide4.jpg"
              alt="Image 4"
              layout="fill"
              className="object-cover"
            />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
