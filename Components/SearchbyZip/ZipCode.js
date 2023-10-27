import React, { useState, useEffect } from 'react';

const ZipCode = ({ zipCodes }) => {
  const [selectedZip, setSelectedZip] = useState('');
  const [searchedZipCodes, setSearchedZipCodes] = useState([]);
  const [selectedZipCodes, setSelectedZipCodes] = useState([]);
  const [counters, setCounters] = useState({});

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSelectedZip(input);

    if (/^\d{1,5}$/.test(input)) {
      const filteredZipCodes = zipCodes.filter((zipCode) =>
        zipCode.startsWith(input)
      );
      setSearchedZipCodes(filteredZipCodes);
    } else {
      setSearchedZipCodes([]);
    }
  };

  const handleZipCodeClick = (zipCode) => {
    setSelectedZipCodes((prevSelectedZipCodes) => {
      const newCounters = { ...counters };
      const currentCount = newCounters[zipCode] || 0;

      if (currentCount >= 0) {
        newCounters[zipCode] = currentCount + 1;
      } else {
        newCounters[zipCode] = 1;
      }

      setCounters(newCounters);

      return [...prevSelectedZipCodes, zipCode];
    });

    setSelectedZip('');
    setSearchedZipCodes([]);
  };

  const handleRemoveZipCode = (index) => {
    const removedZipCode = selectedZipCodes[index];

    setSelectedZipCodes((prevSelectedZipCodes) =>
      prevSelectedZipCodes.filter((_, i) => i !== index)
    );

    const newCounters = { ...counters };
    delete newCounters[removedZipCode];
    setCounters(newCounters);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Start typing"
        value={selectedZip}
        onChange={handleInputChange}
      />
      {searchedZipCodes.length > 0 && (
        <ul>
          {searchedZipCodes.map((zipCode) => (
            <li key={zipCode} onClick={() => handleZipCodeClick(zipCode)}>
              {zipCode}{' '}
              {counters[zipCode] > 1 && <span>+{counters[zipCode]}</span>}
            </li>
          ))}
        </ul>
      )}
      <div>
        <ul>
          {selectedZipCodes.slice(0, 2).map((zipCode, index) => (
            <li key={index}>
              {zipCode}{' '}
              {counters[zipCode] > 1 && <span>+{counters[zipCode]}</span>}
              <button onClick={() => handleRemoveZipCode(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MessageComponent = ({ counters }) => {
  let countPlusOne = 0;
  let countPlusTwo = 0;

  // Iterate over the keys and values in the 'counters' object
  for (const key in counters) {
    if (key !== 'zipCode') {
      const count = counters[key];
      if (count === 1) {
        countPlusOne++;
      } else if (count === 2) {
        countPlusTwo++;
      }
    }
  }
  const totalCount = countPlusOne + countPlusTwo;

  if (totalCount >= 3) {
    const hiddenZipCode = `+${countPlusOne - 2}`;
    return (
      <div>
        <p>{hiddenZipCode}</p>
      </div>
    );
  } else {
    return null;
  }
};

const ZipCode = () => {
  const [zipCodes, setZipCodes] = useState([]);

  useEffect(() => {
    const fetchZipCodes = async () => {
      try {
        const response = await fetch(
          'https://api.coc.houseworksinc.co/api/v1/doctors/zip_codes'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data.');
        }
        const data = await response.json();
        setZipCodes(data);
      } catch (error) {
        console.error('Error fetching zip codes:', error);
      }
    };
    fetchZipCodes();
  }, []);

  return (
    <div>
      <ZipCode zipCodes={zipCodes} />
      <MessageComponent counters={counters} />
    </div>
  );
};

export default ZipCode;
