'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import img from '/images/products/laptop1.png';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import Image from 'next/image';

export default function Swipper() {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        rewind: true,
        autoplay: true,
      }}
    >
      <SplideSlide>
        <Image
          src="/images/products/laptop1.jpg"
          alt="Image 1"
          width={500}
          height={500}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/images/products/laptop1.jpg"
          alt="Image 2"
          width={500}
          height={500}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/images/products/laptop1.jpg"
          alt="Image 2"
          width={500}
          height={500}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/images/products/laptop1.jpg"
          alt="Image 2"
          width={500}
          height={500}
        />
      </SplideSlide>
    </Splide>
  );
}
