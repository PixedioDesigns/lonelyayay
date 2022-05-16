import Link from "next/link";
import React from "react";

const Gallery = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Link href="photo-detail/sunset">
              <img
                src="/images/aa.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="photo-detail/sunset">
              <img
                src="/images/2.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
            <Link href="photo-detail/sunset">
              <img
                src="/images/3.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
            <Link href="photo-detail/sunset">
              <img
                src="/images/4.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
            <Link href="photo-detail/sunset">
              <img
                src="/images/5.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <Link href="photo-detail/sunset">
              <img
                src="/images/aa.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Link href="photo-detail/sunset">
              <img
                src="/images/2.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Link href="photo-detail/sunset">
              <img
                src="/images/3.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <Link href="photo-detail/sunset">
              <img
                src="/images/aa.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Link href="photo-detail/sunset">
              <img
                src="/images/2.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Link href="photo-detail/sunset">
              <img
                src="/images/3.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Link href="photo-detail/sunset">
              <img
                src="/images/4.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <Link href="photo-detail/sunset">
              <img
                src="/images/aa.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Link href="photo-detail/sunset">
              <img
                src="/images/2.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Link href="photo-detail/sunset">
              <img
                src="/images/3.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Link href="photo-detail/sunset">
              <img
                src="/images/4.png"
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
