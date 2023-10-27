"use client"
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import FilterPagination from '../Home/FilterPagination';
import SubmitCaseForReview from '@/Components/SubmitCaseForReview';
const Searchresults = () => {
  return (
    <>
      <section id="searchresults" className="mb-1">
        <FilterPagination />
        <SubmitCaseForReview />
      </section>
    </>
  );
}
export default Searchresults;
