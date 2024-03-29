import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CompanyPage() {
  let { title } = useParams();
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/auth/company/`)
    //axios.get(`https://localhost:8000/companies/${title}`)
      .then(response => {
         console.log(response.data);
        setCompanyData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [title]);


  if (!companyData) return <div className='flex justify-center items-center h-screen'><div className='font-extrabold text-5xl'>Loading...</div></div>
  

  return (
    <div >
        
      <div className="hero min-h-screen " style={{backgroundImage: 'url("Hero_bg.png")'}}>
      <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
      <h1 className="text-5xl font-bold">{companyData.info[0].Company_name}</h1>
      <p className="py-6">{companyData.info[0].Heading}</p>
      <p className="py-6">{companyData.info[0].Description}</p>
      <button className="btn btn-secondary">Take Test</button>
      </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;

