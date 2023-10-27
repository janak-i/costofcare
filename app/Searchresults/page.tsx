"use client"
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import FilterPagination from '../Home/FilterPagination';
import SubmitCaseForReview from '@/Components/SubmitCaseForReview';

import Example from '@/Components/navigation/Example'
//import HeadNav from '@/Components/HeaderNav';
//import { fadeIn } from './variants';
//import { motion } from "framer-motion"


const Searchresults = () => {
  return (
    <>
	 

	 <Example />
      <section
        id="searchresults"
        className="mb-1"
      >
        <FilterPagination />
        <SubmitCaseForReview />
      </section>
    </>
  );
}

export default Searchresults;