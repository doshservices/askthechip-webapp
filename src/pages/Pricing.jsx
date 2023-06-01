import { useState } from "react";
import { Navbar } from "../components";
import { pricingData } from "../data";
import underline from "./../assets/images/underline.svg";
import { Link, useNavigate } from "react-router-dom";
// import card from "./../assets/icons/card.svg";
// import checkCircle from "./../assets/icons/check-circle.svg";
// import dots from "./../assets/icons/dots.svg";

const Pricing = () => {
  const navigateTo = useNavigate();
  const [selectedVal, setSelectedVal] = useState("Pick a plan");
  const handleChange = (e) => {
    console.log(e.target.value)
    setSelectedVal(e.target.value);
  }
  const handleNavigate = (link) => {
    if(selectedVal !== "Pick a plan"){
      navigateTo(link)
    }
  }
  
  // const [modal, setModal] = useState(false);
  // const [cardNum, setCardNum] = useState("");
  // const [CVVNum, setCVVNum] = useState("");
  // const [expMonth, setExpMonth] = useState("");
  // const [expYear, setExpYear] = useState("");
  // const [pin, setPin] = useState("");

  // const handleCardNum = (event) => {
  //   const limit = 16;
  //   setCardNum(event.target.value.slice(0, limit));
  // };
  // const handleCVVNum = (event) => {
  //   const limit = 3;
  //   setCVVNum(event.target.value.slice(0, limit));
  // };
  // const handleExpMonth = (event) => {
  //   const limit = 2;
  //   setExpMonth(event.target.value.slice(0, limit));
  // };
  // const handleExpYear = (event) => {
  //   const limit = 2;
  //   setExpYear(event.target.value.slice(0, limit));
  // };
  // const handlePin = (event) => {
  //   const limit = 4;
  //   setPin(event.target.value.slice(0, limit));
  // };

  return (
    <div className="font-DMSans">
      <Navbar />
      <div className="pt-20">
        <div className="flex flex-col w-full items-center mb-10 mt-10">
          <h1 className="font-DMSans font-bold text-primary110 text-4xl md:text-5xl w-[90%] max-w-[13ch] text-center mb-2">
            Pick a plan that's right for you
          </h1>
          <div className="-z-10 -mt-4 md:-mt-5">
            <img src={underline} alt="underline" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] mb-8">
            {pricingData.map((data, index) => (
              <div
                key={index}
                className="max-w-[27.5rem] border border-[#00000015] rounded-lg mb-4"
              >
                <div
                  style={{ backgroundColor: data.priceBg }}
                  className={`w-full h-[10px] rounded-tl-lg rounded-tr-lg`}
                ></div>
                <div className="flex justify-between flex-col min-h-[44rem] px-[1.875rem] pt-10 pb-8">
                  <div>
                    <div className="mb-4">
                      <h2 className="text-[#333] text-[1.375rem] font-semibold py-1">
                        {data.title}
                      </h2>
                      <p className="max-w-[30ch] mt-4">{data.subtitle}</p>
                    </div>
                    <div className="h-[1px] w-full bg-[#2d2d2d80] opacity-50 mt-10"></div>
                    {data.title === "Custom" ?
                      (
                        <div className="h-[120px]">
                          <select onChange={handleChange} className="border border-[#A25DDC] outline-none mt-6 h-[70px] rounded-lg w-full text-lg font-bold">
                            <option defaultValue={"Pick a plan"}>Pick a plan</option>
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="annually">Annually</option>
                            <option value="biannually">Bi-anually</option>
                          </select>
                        </div>
                      ) :
                      <div className="flex items-center my-8 mt-10">
                        <span
                          style={{ color: data.priceBg }}
                          className={`text-[52px] md:text-[62px] font-semibold leading-6 mr-[0.625rem]`}
                        >
                         <s>N</s>{data.price}
                        </span>{" "}
                        <div className="flex flex-col">
                          <span>Per member</span>
                          <span>Per month</span>
                        </div>
                      </div>
                    }
                    <div className="h-[1px] w-full bg-[#2d2d2d80] opacity-50 mb-10"></div>
                    {data.desc.map((desc, index) => (
                      <div key={index} className="flex items-center mb-4">
                        <img src={desc.icon} alt={desc.text} />
                        <span className="ml-2">{desc.text}</span>
                      </div>
                    ))}
                  </div>
                  {data.title === "Custom" ?
                    <div className="mb-2">
                      <button onClick={()=>handleNavigate(data.link)} disabled={selectedVal === "Pick a plan"} className="bg-primary80 hover:scale-95 disabled:bg-primary80/40 transition duration-200 rounded-full text-white w-full py-2">
                        {/* <Link to={`/${data.link}`}> */}
                          {data.buttonVal}
                        {/* </Link> */}
                      </button>
                    </div>
                    :
                    <div className="mb-2">
                      <Link to={`/${data.link}`}>
                        <button className="bg-primary80 hover:scale-95 transition duration-200 rounded-full text-white w-full py-2">
                          {data.buttonVal}
                        </button>
                      </Link>
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
