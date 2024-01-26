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
  const [darkMode, setDarkMode] = useState("All Posts");
  const [serviceProviders, setServiceProviders] = useState([])

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

  const getAllServiceProviders = async () => {
    const url = `${api}/api/users/services`
    try {
      const res = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      setServiceProviders(res?.data?.data)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    getAllServiceProviders()
  }, [])


  const width = useWindowWidth()

  const Wrapper = ({ children }) => {
    return (
      <div className="services__wrapper">{children}</div>
    )
  }

  return (
    <div className="pageLayout services xsm:gap-[2rem] pb-[8rem] xsm:pr-[2rem] xs:pr-[4rem]">
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
        {serviceProviders?.length > 0 ? (
          <>

            {serviceProviders?.filter(provider => provider.serviceType === "ACCOUNTING").length > 0 ? (
              <Wrapper>
                <Service
                  serviceData={serviceProviders?.filter(provider => provider.serviceType === "ACCOUNTING")}
                  type="Accounting"
                />
              </Wrapper>
            ) : null
            }

            {serviceProviders?.filter(provider => provider.serviceType === "ADMINISTRATIVE").length > 0 ? (
              <Wrapper>
                <Service
                  serviceData={serviceProviders?.filter(provider => provider.serviceType === "ADMINISTRATIVE")}
                  type="Admistrative"
                />
              </Wrapper>
            )
              : null
            }

            {serviceProviders?.filter(provider => provider.serviceType === "CONSULTING").length > 0 ? (
              <Wrapper>
                <Service
                  serviceData={serviceProviders?.filter(provider => provider.serviceType === "CONSULTING")}
                  type="Consulting"
                />
              </Wrapper>
            ) : null
            }

            {serviceProviders?.filter(provider => provider.serviceType === "LEGAL").length > 0 ? (
              <Wrapper>
                <Service
                  serviceData={serviceProviders?.filter(provider => provider.serviceType === "LEGAL")}
                  type="Legal"
                />
              </Wrapper>
            ) : null
            }

            {serviceProviders?.filter(provider => provider.serviceType === "MARKETING").length > 0 ? (
              <Wrapper>
                <Service
                  serviceData={serviceProviders?.filter(provider => provider.serviceType === "MARKETING")}
                  type="Marketing"
                />
              </Wrapper>
            ) : null
            }

            {serviceProviders?.filter(provider => provider.serviceType === "MENTORSHIP").length > 0 ? (
              <Wrapper>
                <Service
                  serviceData={serviceProviders?.filter(provider => provider.serviceType === "MENTORSHIP")}
                  type="Mentorship"
                />
              </Wrapper>
            ) : null
            }

            {serviceProviders?.filter(provider => provider.serviceType === "TECHNOLOGY").length > 0 ? (
              <Wrapper>
                <Service
                  serviceData={serviceProviders?.filter(provider => provider.serviceType === "TECHNOLOGY")}
                  type="Technology"
                />
              </Wrapper>
            )
              : null
            }

            {serviceProviders?.filter(provider => provider.serviceType === "TRAINING").length > 0 ? (
              <Wrapper>
                <Service
                  serviceData={serviceProviders?.filter(provider => provider.serviceType === "TRAINING")}
                  type="Training"
                />
              </Wrapper>
            )
              : null
            }
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Services;
