'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Coordinates {
  latitude: number;
  longitude: number;
}

export default function LocationNav() {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
    }

    function success(position: GeolocationPosition) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      // Fetch country based on coordinates
      fetchCountry(latitude, longitude);
    }

    function error() {
      console.log('Unable to retrieve your location');
    }
  }, []);

  async function fetchCountry(latitude: number, longitude: number) {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const addressComponents = data.results[0].address_components;
        const countryComponent = addressComponents.find((component: any) =>
          component.types.includes('country')
        );
        if (countryComponent) {
          setCountry(countryComponent.long_name);
        }
      }
    } catch (error) {
      console.log('Error fetching country:', error);
    }
  }

  return (
    <div className="mr-3 py-1 pr-1 cursor-pointer hover:border-[1px] hover:rounded-sm border-[1px] border-nav hover:border-white text-white flex items-center justify-center">
      <Image
        src="/images/icons/locationIcon.png"
        width={27}
        height={27}
        alt="location icon"
        className="self-end -mr-1.6 mt-[10px]"
      />
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <span className="text-[12px] mr-[4px] leading-[14px] font-[400] text-[#ccc]">
          Deliver to
        </span>
        <span className="text-[14px] max-w-0-[60px] leading-[15px] font-[700] text-ellipsis">
          Germany
        </span>
      </div>
    </div>
  );
}
// import Image from 'next/image';

// export default function LocationNav() {
//   return (
//     <div className="mr-3 cursor-pointer hover:border-[1px] hover:rounded-sm border-[1px] border-nav hover:border-white text-white flex flex-col items-center justify-center">
//       <p className="text-center text-[12px] opacity-75 ml-1">Deliver to</p>
//       <div className="flex items-center justify-center pr-2">
//         <Image
//           src="/images/icons/locationIcon.png"
//           width={27}
//           height={27}
//           alt="location icon"
//           className="mb-1"
//         />
//         <p className="font-semibold -mt-1">Germany</p>
//       </div>
//     </div>
//   );
// }
