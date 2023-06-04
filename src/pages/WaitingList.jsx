import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react';

import WaitingListComponent from '../components/WaitingListComponent';
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const WaitingList = () => {
  const token = useSelector((state) => state.auth.token)
  const navigate = useNavigate()
  React.useEffect(()=> {
    if(token){
        const {role} = jwtDecode(token)
        if(role !== "superadmin"){
            navigate(`/`)
        }
    }
},[navigate,token])


  return (
    <>
      <div>
          <Helmet>
              <title>Waiting List</title>
              <meta name="description" content="Ini adalah deskripsi halaman saya" />
          </Helmet>
      </div>
      <div className="className='bg-white md:bg-[#F4F7FF]'">
        <div className="header pb-24">
            <Header />
        </div>
      </div>
      <main>
          <WaitingListComponent />
          <div className="w-full flex items-center justify-center">
              <div className="text-black text-xl font-semibold underline"></div>
          </div>
      </main>
      <div className="footer">
          <Footer />
      </div>
    </>
  )
}

export default WaitingList