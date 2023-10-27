'use client';
import React from 'react';
import ReactDOM from 'react-dom';
import HWSearch from "@/Components/HWSearch";
import {motion,useAnimation} from 'framer-motion';

import TrendingSlider from './HwBannerSlide'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SearchSlider = () => {
  return (
    <>
      <section id="hwSearchFilter" 
      className="py-[0px] sm:py-[60px] bg-gradient-to-b from-[#8E4AE6] to-[#3C1FAF]">
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <div className="max-w-[1145px] mx-auto flex flex-col sm:grid sm:grid-cols-2 shadow-2xl">
          <div 
          className="bg-gradient-to-b from-[#8E4AE6] to-[#3C1FAF] 
          text-white pb-4 px-0 sm:px-4 sm:p-10 sm:shadow-xl sm:rounded-s-lg">
            <div className="mt-6 mb-4 sm:mt-10">
              <TrendingSlider/>
            </div>
          </div>

          <div className="hwSearchFilterRight bg-[#ffffff] py-6 sm:mx-0 sm:py-6 text
           sm:rounded-s-lg">
            <div className="hwSearchFilterForm">
               <HWSearch />
            </div>
          </div>
        </div>
        </motion.div>
      </section>
    </>
  );
};

export default SearchSlider