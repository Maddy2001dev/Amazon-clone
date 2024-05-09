'use client';
import { useOverlayContext } from '@/app/contexts/OverlayContext';

export default function Overlay() {
  const overlay = useOverlayContext();
  return (
    <>
      {overlay?.isOpen === true ? (
        <div
          onClick={() => overlay?.onClose()}
          className="
  justify-center items-start
  flex
  flex-row
  overflow-x-hidden
  overflow-y-auto
  fixed
  inset-0
  z-[49]
  outline-none
  focus:outline-none
  bg-[#000]
  opacity-[0.6]
  "
        ></div>
      ) : null}
    </>
  );
}
