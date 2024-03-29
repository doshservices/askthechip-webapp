import axios from "axios";
import Service from "./Service";
import { Header } from "./home";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import React, { useState, useEffect } from "react";
import { api } from "../contexts";

const ServicesMobile = () => {

  const { token } = useAuth()

  const [getAcc, setGetAcc] = useState([])
  const [getAdmin, setGetAdmin] = useState([])
  const [getConsulting, setGetConsulting] = useState([])
  const [getFinacial, setGetFinacial] = useState([])
  const [getLegal, setGetLegal] = useState([])
  const [getMarketing, setGetMarketing] = useState([])
  const [getMentorship, setGetMentorship] = useState([])
  const [getTechnology, setGetTechnology] = useState([])
  const [getTraining, setGetTraining] = useState([])

  const accountingProviders = async () => {
    const url = `${api}/api/users/search/services?services=ACCOUNTING`
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
  const adminProviders = async () => {
    const url = `${api}/api/users/search/services?services=Administrative`
    await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log(response.data.data);
      setGetAdmin(response.data.data)
    }).catch((error) => {
      // console.log(error);
      throw error
    })
  }
  const consultingProviders = async () => {
    const url = `${api}/api/users/search/services?services=Consulting`
    await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log(response.data.data);
      setGetConsulting(response.data.data)
    }).catch((error) => {
      // console.log(error);
      throw error
    })
  }
  const finacialProviders = async () => {
    const url = `${api}/api/users/search/services?services=FINACIAL`
    await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log(response.data.data);
      setGetFinacial(response.data.data)
    }).catch((error) => {
      // console.log(error);
      throw error
    })
  }
  const legalProviders = async () => {
    const url = `${api}/api/users/search/services?services=legal`
    await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log(response.data.data);
      setGetLegal(response.data.data)
    }).catch((error) => {
      // console.log(error);
      throw error
    })
  }
  const marketingProviders = async () => {
    const url = `${api}/api/users/search/services?services=marketing`
    await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log(response.data.data);
      setGetMarketing(response.data.data)
    }).catch((error) => {
      // console.log(error);
      throw error
    })
  }
  const mentorshipProviders = async () => {
    const url = `${api}/api/users/search/services?services=mentorship`
    await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log(response.data.data);
      setGetMentorship(response.data.data)
    }).catch((error) => {
      // console.log(error);
      throw error
    })
  }
  const techProviders = async () => {
    const url = `${api}/api/users/search/services?services=technology`
    await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log(response.data.data);
      setGetTechnology(response.data.data)
    }).catch((error) => {
      // console.log(error);
      throw error
    })
  }
  const trainingProviders = async () => {
    const url = `${api}/api/users/search/services?services=training`
    await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log(response.data.data);
      setGetTraining(response.data.data)
    }).catch((error) => {
      // console.log(error);
      throw error
    })
  }

  useEffect(() => {
    accountingProviders();
    adminProviders();
    consultingProviders();
    finacialProviders()
    legalProviders();
    marketingProviders();
    mentorshipProviders();
    techProviders();
    trainingProviders()
  }, [])

  return (
    <div className="grid grid-cols-12">
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
        <div className="mx-4 grid grid-cols-12">
          {getAdmin.length > 0 ?
            <>
              <Service serviceData={getAdmin} type="ADMINISTRATIVE" />
            </>
            : null
          }
        </div>
        <div className="mx-4 grid grid-cols-12">
          {getConsulting.length > 0 ?
            <>
              <Service serviceData={getConsulting} type="CONSULTING" />
            </>
            : null
          }
        </div>
        <div className="mx-4 grid grid-cols-12">
          {getFinacial.length > 0 ?
            <>
              <Service serviceData={getFinacial} type="FINACIAL" />
            </>
            : null
          }
        </div>
        <div className="mx-4 grid grid-cols-12">
          {getLegal.length > 0 ?
            <>
              <Service serviceData={getLegal} type="LEGAL" />
            </>
            : null
          }
        </div>
        <div className="mx-4 grid grid-cols-12">
          {getMarketing.length > 0 ?
            <>
              <Service serviceData={getMarketing} type="MARKETING" />
            </>
            : null
          }
        </div>
        <div className="mx-4 grid grid-cols-12">
          {getMentorship.length > 0 ?
            <>
              <Service serviceData={getMentorship} type="MENTORSHIP" />
            </>
            : null
          }
        </div>
        <div className="mx-4 grid grid-cols-12">
          {getTechnology.length > 0 ?
            <>
              <Service serviceData={getTechnology} type="TECHNOLOGY" />
            </>
            : null
          }
        </div>
        <div className="mx-4 grid grid-cols-12">
          {getTraining.length > 0 ?
            <>
              <Service serviceData={getTraining} type="TRAINING" />
            </>
            : null
          }
        </div>
      </div>
    </div>
  );
};

export default ServicesMobile;
