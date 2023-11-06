import axios from "axios";
import Service from "./Service";
import { Header } from "./home";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import React, { useState, useEffect } from "react";

const ServicesMobile = () => {

  const { token } = useAuth()

  const [getAcc, setGetAcc] = useState([])

  const accountingProviders = async () => {
    const url = `https://askthechip-hvp93.ondigitalocean.app/api/users/search/services?services=ACCOUNTING`
    await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log(response.data.data);
      setGetAcc(response.data.data)
    }).catch((error) => {
      // console.log(error);
      throw error
    })
  }

  useEffect(() => {
    accountingProviders();
  }, [])

  return (
    <div className="grid grid-cols-12 bg-light">
      <div className="flex md:hidden flex-col col-span-12 xm:pr-16 border-r border-[#EBEEF0]">
        <div className="mb-3">
          <Header />
        </div>
        <div className="text-dark2D font-DMSans mx-4 text-lg font-medium mb-3">
          Services
        </div>
        <div className="mx-4 grid grid-cols-12">
          {getAcc.length > 0 ?
            <>
              <Service serviceData={getAcc} type="ACCOUNTING" />
            </>
            : null
          }
        </div>
      </div>
    </div>
  );
};

export default ServicesMobile;
