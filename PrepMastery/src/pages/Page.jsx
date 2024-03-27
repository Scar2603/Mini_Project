import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Page() {
  let { title } = useParams();
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    axios.get(`https://localhost:8000/companies/${title}`)
      .then(response => {
        setCompanyData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [title]);

  console.log(title);

  if (!companyData) return <div className='flex justify-center items-center h-screen'><div className='font-extrabold text-5xl'>Loading...</div></div>
  

  return (
    <div>
      <h1>{companyData.name}</h1>
      <p>{companyData.description}</p>
      
    </div>
  );
}

export default Page;