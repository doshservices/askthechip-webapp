import axios from "axios";
import Service from "./Service";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { Header, Share } from "./home";
import React, { useEffect, useState } from "react";

const Services = () => {

  const { token } = useAuth()

  const [getAcc, setGetAcc] = useState([])

  const searchProviders = async () => {
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
    searchProviders();
  }, [])

  return (
    <div className="grid grid-cols-12 bg-light">
      <div className="hidden md:flex flex-col col-span-12 h-screen pt-4 overflow-y-auto xm:pr-16 border-r border-[#EBEEF0]">
        <div className="ml-10 mb-11">
          <Share />
          <Header />
        </div>
        <div className="ml-10 grid grid-cols-12">
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

export default Services;
