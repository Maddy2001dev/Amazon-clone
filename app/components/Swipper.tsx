'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import img from '/images/products/laptop1.png';

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
          <Image
            priority
            src="/images/products/slide1.jpg"
            alt="Image 1"
            className="object-cover h-[600px] w-full"
            width={1500}
            height={600}
          />
        </SplideSlide>
        <SplideSlide className="w-full">
          <Image
            priority
            src="/images/products/slide2.jpg"
            alt="Image 2"
            className="object-cover h-[600px] w-full"
            width={1500}
            height={600}
          />
        </SplideSlide>
        <SplideSlide className="w-full">
          <Image
            priority
            src="/images/products/slide3.jpg"
            alt="Image 3"
            className="object-cover h-[600px] w-full"
            width={1500}
            height={600}
          />
        </SplideSlide>
        <SplideSlide className="w-full">
          <Image
            priority
            src="/images/products/slide4.jpg"
            alt="Image 4"
            className="object-cover h-[600px] w-full"
            width={1500}
            height={600}
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}
