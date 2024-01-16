import axios from "axios";
import Service from "./Service";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { Header, Share } from "./home";
import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import { useWindowWidth } from "../utils/windowWidth";
import { api } from "../contexts";
const Services = () => {

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
  const [darkMode, setDarkMode] = useState("All Posts");

  const handleAllPost = () => {
    if (darkMode !== "All Posts") {
      setDarkMode("All Posts");
    }
  };
  const handleLightMode = () => {
    if (darkMode !== "White Board") {
      setDarkMode("White Board");
    }
  };
  const handleDarkMode = () => {
    if (darkMode !== "Black Board") {
      setDarkMode("Black Board");
    }
  };

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
  const width = useWindowWidth()
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

  const Wrapper = ({ children }) => {
    return (
      <div className="services__wrapper">{children}</div>
    )
  }

  return (
    <div className="pageLayout services xsm:gap-[2rem] xsm:pr-[2rem] xs:pr-[4rem]">
      <SideNav />
      <div className="xsm:pt-4 pageLayout__wrapper__container">
        {width < 480 ?
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            handleAllPost={handleAllPost}
            handleDarkMode={handleDarkMode}
            handleLightMode={handleLightMode}
          /> : <></>
        }
        <Share />
        {getAcc.length > 0 ?
          <Wrapper>
            <Service serviceData={getAcc} type="Accounting" />
          </Wrapper>
          : null
        }
        {getAdmin.length > 0 ?
          <Wrapper>
            <Service serviceData={getAdmin} type="Admistrative" />
          </Wrapper>
          : null
        }
        {getConsulting.length > 0 ?
          <Wrapper>
            <Service serviceData={getConsulting} type="Consulting" />
          </Wrapper>
          : null
        }
        {getFinacial.length > 0 ?
          <Wrapper>
            <Service serviceData={getFinacial} type="Finacial" />
          </Wrapper>
          : null
        }
        {getLegal.length > 0 ?
          <Wrapper>
            <Service serviceData={getLegal} type="Legal" />
          </Wrapper>
          : null
        }
        {getMarketing.length > 0 ?
          <Wrapper>
            <Service serviceData={getMarketing} type="Marketing" />
          </Wrapper>
          : null
        }
        {getMentorship.length > 0 ?
          <Wrapper>
            <Service serviceData={getMentorship} type="Mentorship" />
          </Wrapper>
          : null
        }
        {getTechnology.length > 0 ?
          <Wrapper>
            <Service serviceData={getTechnology} type="Technology" />
          </Wrapper>
          : null
        }
        {getTraining.length > 0 ?
          <Wrapper>
            <Service serviceData={getTraining} type="Training" />
          </Wrapper>
          : null
        }
      </div>
    </div>
  );
};

export default Services;
