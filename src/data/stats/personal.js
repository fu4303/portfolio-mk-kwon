import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-03-02T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'creation',
    label: 'Years of Creation',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 6,
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=11aOsB8TVhtQvkRV-MurYcZkIxP928Su9&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Adelaide, SA',
  },
];

export default data;
