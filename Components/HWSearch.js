"use client";
import { useState,useEffect } from 'react';

const FilterBox = ({ title }) => {
  const [selectImage, setSelectImage] = useState('Kidney')
  return (
    <div 
        className='mt-4 text-center'>
      <div 
        className='flex flex-wrap gap-4 items-baseline'>
        <div
            className='hwFilterBox'  
            style={{
          border: selectImage === 'Kidney' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage === 'Kidney' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage === 'Kidney' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage('Kidney')}
        >
          <img
          className=''
          src={selectImage === 'Kidney' ? '../images/search/kidney_active.svg' : '../images/search/kidney.svg'}
          alt='React Image' />
          <span className={`${
            selectImage === 'Kidney' ? 'text-[#6E2FEB]' : 'text-[#101426]'
          }`}>Kidney</span>
        </div>

        <div className='hwFilterBox' style={{
          border: selectImage === 'Lungs' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage === 'Lungs' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage === 'Lungs' ? '#F5F0FF' : '#ffff',
        }}
          onClick={() => setSelectImage('Lungs')}
        >
          <img
          className=''
          src={selectImage === 'Lungs' ? '../images/search/lungs_active.svg' : '../images/search/lungs.svg'}
          alt='React Image' />
          <span className={`${
            selectImage === 'Lungs' ? 'text-[#6E2FEB]' : 'text-[#101426]'
          }`}>Lungs</span>
        </div>
        <div 
        className='hwFilterBox' 
        style={{
          border: selectImage === 'Liver' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage === 'Liver' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage === 'Liver' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage('Liver')}
        >
          <img
          className=''
          src={selectImage === 'Liver' ? '../images/search/liver_active.svg' : '../images/search/liver.svg'}
          alt='React Image' />
          <span className={`${
            selectImage === 'Liver' ? 'text-[#6E2FEB]' : 'text-[#101426]'
          }`}>Liver</span>
        </div>
        <div 
        className='hwFilterBox' 
        style={{
          border: selectImage === 'Pancreas' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage === 'Pancreas' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage === 'Pancreas' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage('Pancreas')}
        >
          
          <img
          className=''
          src={selectImage === 'Pancreas' ? '../images/search/pancreas_active.svg' : '../images/search/pancreas.svg'}
          alt='React Image' />
          <span className={`${
            selectImage === 'Pancreas' ? 'text-[#6E2FEB]' : 'text-[#101426]'
          }`}>Pancreas</span>
        </div>
        {title}
      </div>
    </div>
  );
};


const Filter = ({ title }) => {
  const [selectImage1, setSelectImage1] = useState('Lungs')
  return (
    <div className='mt-4'>
      <div 
      className='flex flex-row flex-wrap gap-4 items-baseline'
      >
        <div 
        className='hwFilterBox' 
        style={{
          border: selectImage1 === 'Lungs' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage1 === 'Lungs' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage1 === 'Lungs' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage1('Lungs')}
        >
          <img
          className=''
          src={selectImage1 === 'Lungs' ? '../images/search/lungs_active.svg' : '../images/search/lungs.svg'}
          alt='React Image' />
          <span className={`${
            selectImage1 === 'Lungs' ? 'text-[#6E2FEB]' : 'text-[#101426]'
          }`}>Lungs</span>
        </div>
        <div 
        className='hwFilterBox' 
        style={{
          border: selectImage1 === 'Liver' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage1 === 'Liver' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage1 === 'Liver' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage1('Liver')}
        >
          <img 
          className=''
          src={selectImage1 === 'Liver' ? '../images/search/liver_active.svg' : '../images/search/liver.svg'}
          alt='React Image' />
          <span className={`${
          selectImage1 === 'Liver' ? 'text-[#6E2FEB]' : 'text-[#101426]'
          }`}>Liver</span>
        </div>
        <div 
        className='hwFilterBox' 
        style={{
          border: selectImage1 === 'Pancreas' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage1 === 'Pancreas' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage1 === 'Pancreas' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage1('Pancreas')}
        >
          <img 
            className=''
            src={selectImage1 === 'Pancreas' ? '../images/search/pancreas_active.svg' : '../images/search/pancreas.svg'}
            alt='React Image' />
            <span className={`${
            selectImage1 === 'Pancreas' ? 'text-[#6E2FEB]' : 'text-[#101426]'
            }`}>Pancreas</span>
        </div>
        <div 
        className='hwFilterBox' 
        style={{
          border: selectImage1 === 'Bile duct' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage1 === 'Bile duct' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage1 === 'Bile duct' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage1('Bile duct')}
        >
          <img 
          className=''
          src={selectImage1 === 'Bile duct' ? '../images/search/bile_duct_active.svg' : '../images/search/bile_duct.svg'}
          alt='React Image' />
          <span className={`${
          selectImage1 === 'Bile duct' ? 'text-[#6E2FEB]' : 'text-[#101426]'
          }`}>Bile duct</span>
        </div>
        <div 
        className='hwFilterBox' 
        style={{
          border: selectImage1 === 'Adrenal' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage1 === 'Adrenal' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage1 === 'Adrenal' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage1('Adrenal')}
        >
          <img 
          className=''
          src={selectImage1 === 'Adrenal' ? '../images/search/adrenal_active.svg' : '../images/search/adrenal.svg'}
          alt='React Image' />
          <span className={`${
          selectImage1 === 'Adrenal' ? 'text-[#6E2FEB]' : 'text-[#101426]'
          }`}>Adrenal</span>
        </div>
        <div 
        className='hwFilterBox' 
        style={{
          border: selectImage1 === 'Rectum' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage1 === 'Rectum' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage1 === 'Rectum' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage1('Rectum')}
        >
          <img 
          className=''
          src={selectImage1 === 'Rectum' ? '../images/search/rectum_active.svg' : '../images/search/rectum.svg'}
          alt='React Image' />
          <span className={`${
          selectImage1 === 'Rectum' ? 'text-[#6E2FEB]' : 'text-[#101426]'
          }`}>Rectum</span>
        </div>
        <div 
        className='hwFilterBox' 
        style={{
          border: selectImage1 === 'Breast' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage1 === 'Breast' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage1 === 'Breast' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage1('Breast')}
        >
          <img 
            className=''
            src={selectImage1 === 'Breast' ? '../images/search/breast_active.svg' : '../images/search/breast.svg'}
            alt='React Image' />
            <span className={`${
            selectImage1 === 'Breast' ? 'text-[#6E2FEB]' : 'text-[#101426]'
            }`}>Breast</span>
        </div>
        <div 
        className='hwFilterBox' 
        style={{
          border: selectImage1 === 'Small intestine' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage1 === 'LSmall intestine' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage1 === 'Small intestine' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage1('Small intestine')}
        >
          <img 
            className=''
            src={selectImage1 === 'Small intestine' ? '../images/search/small_intestine_active.svg' : '../images/search/small_intestine.svg'}
            alt='React Image' />
            <span className={`${
            selectImage1 === 'Small intestine' ? 'text-[#6E2FEB]' : 'text-[#101426]'
            }`}>Small intestine</span>
        </div>
        <div 
        className='hwFilterBox' 
        style={{
          border: selectImage1 === 'Stomach' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage1 === 'Stomach' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage1 === 'Stomach' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage1('Stomach')}
        >
          <img 
          className=''
          src={selectImage1 === 'Stomach' ? '../images/search/stomach_active.svg' : '../images/search/stomach.svg'}
          alt='React Image' />
          <span className={`${
          selectImage1 === 'Stomach' ? 'text-[#6E2FEB]' : 'text-[#101426]'
          }`}>Stomach</span>
        </div>
        <div 
        className='hwFilterBox' 
        style={{
          border: selectImage1 === 'Colon' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
          color: selectImage1 === 'Colon' ? '#6E2FEB' : '#101426',
          backgroundColor: selectImage1 === 'Colon' ? '#F5F0FF' : '#ffff'
        }}
          onClick={() => setSelectImage1('Colon')}
        >
          <img 
          className=''
          src={selectImage1 === 'Colon' ? '../images/search/colon_active.svg' : '../images/search/colon.svg'}
          alt='React Image' />
          <span className={`${
          selectImage1 === 'Colon' ? 'text-[#6E2FEB]' : 'text-[#101426]'
          }`}>Colon</span>
        </div>
        {title}
      </div>
    </div>
  )
};

const HWSearch = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Transplant');
  const [selectedMutiple, setselectedMutiple] = useState('Doctor');
  const [selectedZip, setSelectedZip] = useState();
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setSelectedZip(tab);
    if (tab === 0) {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleInputChange = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className='sm:min-h-[466px]'>
      <div className='flex gap-4 border-b px-8'>
        <div
          className={`
          sm:px-0 text-base py-2 text-${selectedTab === 0 ? 'rgba(16, 20, 38, 0.8)' : '#6e2feb font-bold border-b-2 border-[#6e2feb]'} text-base cursor-pointer`}
          onClick={() => handleTabClick(1)}>
          <span style={{ color: selectedTab === 0 ? 'rgba(16, 20, 38, 0.8)' : '#6e2feb' }}>Search by Filters</span>
        </div>
        <div
          className={`
          sm:px-0 text-base ml-4 py-2 text-${selectedTab === 1 ? 'rgba(16, 20, 38, 0.8)' : '#6e2feb font-bold border-b-2 border-[#6e2feb]'} text-base cursor-pointer`}
          onClick={() => handleTabClick(0)}
        >
          <span style={{ color: selectedTab === 1 ? 'rgba(16, 20, 38, 0.8)' : '#6e2feb' }}>Search by Doctor or Hospital</span>
        </div>
      </div>

      {showInput ? (
        <div className='pt-6 px-8'>
          <p className='font-normal text-lg font-normal'>Type a doctor’s or a hospital’s name to find relevant results.</p>
          <input
            className='w-full rounded-md bg-[#F7F9FC] border border-[#c5cee0] p-3 my-5'
            type="text"
            placeholder="Start typing"
            onClick={() => setSelectedZip('text')}
            onInput={handleInputChange}
          />
          {isLoading && <p>Loading...</p>}
        </div>
      ) : (
        <div className='py-4 hwOType px-8 sm:px-8'>
          <h3 className='font-bold text-[#101426] text-base'>Type</h3>
          <div className='sm:flex grid grid-cols-2 place-content-stretch gap-4 my-2 max-w-[270px] items-center'>
            <div
             className='h-[48px] px-5 py-3 cursor-pointer rounded-lg text-center text-sm'
              style={{
                border: selectedOption === 'Transplant' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                color: selectedOption === 'Transplant' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                backgroundColor: selectedOption === 'Transplant' ? '#F5F0FF' : '#ffff'
              }}
              onClick={() => setSelectedOption('Transplant')}
            >
              Transplant
            </div>
            <div
             className='h-[48px] px-5 py-3 cursor-pointer rounded-lg text-center text-sm'
              style={{
                border: selectedOption === 'Cancer' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                color: selectedOption === 'Transplant' ? 'rgb(16 20 28 / 80%)' : '#6E2FEB',
                backgroundColor: selectedOption === 'Cancer' ? '#F5F0FF' : '#ffff'
              }}
              onClick={() => setSelectedOption('Cancer')}
            >
              Cancer
            </div>
          </div>

          <div className='my-2 flex-wrap'>
            <h3 className='mt-4 mb-2 font-bold text-[#101426] text-base'>Searching For</h3>
            <ul className='flex flex-wrap gap-4 items-center'>
              <li 
              className='flex-none h-[48px] px-5 py-3 text-sm cursor-pointer rounded-md min-w-[90px] text-center'
                style={{
                  border: selectedMutiple === 'Doctor' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                  color: selectedMutiple === 'Doctor' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                  backgroundColor: selectedMutiple === 'Doctor' ? '#F5F0FF' : '#ffff'
                }}
                onClick={() => setselectedMutiple('Doctor')}>
                Doctor</li>

              <li 
              className='flex-none h-[48px] px-5 py-3 text-sm cursor-pointer rounded-md min-w-[90px] text-center'
              style={{
                border: selectedMutiple === 'Hospital' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                color: selectedMutiple === 'Hospital' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                backgroundColor: selectedMutiple === 'Hospital' ? '#F5F0FF' : '#ffff'
              }}
                onClick={() => setselectedMutiple('Hospital')}
              >
                Hospital</li>
              <li className='min-w-[15px] flex-none'>in <span className='hidden'>Zipcodes</span></li>
              <li className='sm:flex-grow'>
                <input
                className='sm:max-w-[170px] h-[48px] max-w-[145px] rounded-md p-3 shadow-none focus:shadow-none'
                  type="text"
                  placeholder="Select ZIP codes"
                  style={{
                    border: selectedZip === 'input' ? '1px solid #C5CEE0' : '1px solid rgb(110, 47, 235)',
                  }}
                  onClick={() => setSelectedZip('input')}
                />
              </li>
            </ul>
          </div>
          {selectedTab === 1 ? (
            <div className='flex'>
              {selectedOption === 'Cancer' || selectedMutiple === 'Hospital' || (
                <div className='transplantBox mb-2'>
                  <h3 className='font-bold text-[#101426] text-base mt-2'>Organ</h3>
                  {/* Render 4 boxes for Transplant */}
                  <FilterBox title="" />
                </div>
              )}
              {selectedOption === 'Transplant' || selectedMutiple === 'Hospital' || (
                <div className='cancerBox mb-2'>
                  {/* Render 10 boxes for Cancer */}
                  <h3 className='font-bold text-[#101426] text-base mt-2'>Organ</h3>
                  <Filter title="" />
                </div>
              )}
            </div>
          ) : (
            <div className='flex flex-wrap'>
              <div className='w-[50%] p-4'>
                <FilterBox title="" />
              </div>
            </div>
          )}
        </div>
      )}
      <div className='px-8 mb-2'>
        <a href='/Searchresults/' 
      className='inline-block text-center px-3 py-3 rounded-md bg-[#6e2feb] shadow-2xl
      hover:bg-[#3c1faf] ease-in duration-300 font-bold text-[#fff] cursor-pointer w-[100%]'
      >Search</a>
     </div>
      
      <div className=''>
      </div>
    </div>
  );
};

export default HWSearch;