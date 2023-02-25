import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pricingData } from "../data";
import logo from "./../assets/ask.svg";
import underline from "./../assets/images/underline.svg";
import card from "./../assets/icons/card.svg";
import checkCircle from "./../assets/icons/check-circle.svg";
import dots from "./../assets/icons/dots.svg";

const Pricing = () => {
  const [modal, setModal] = useState(false);
  const [cardNum, setCardNum] = useState("");
  const [CVVNum, setCVVNum] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [pin, setPin] = useState("");


  const handleCardNum = (event) => {
    const limit = 16;
    setCardNum(event.target.value.slice(0, limit));
  };
  const handleCVVNum = (event) => {
    const limit = 3;
    setCVVNum(event.target.value.slice(0, limit));
  };
  const handleExpMonth = (event) => {
    const limit = 2;
    setExpMonth(event.target.value.slice(0, limit));
  };
  const handleExpYear = (event) => {
    const limit = 2;
    setExpYear(event.target.value.slice(0, limit));
  };
  const handlePin = (event) => {
    const limit = 4;
    setPin(event.target.value.slice(0, limit));
  };

  return (
    <div>
      <div className="h-16 ml-4 mt-4 md:ml-8">
        <Link to="/">
          <img src={logo} alt="Ask the chip" />
        </Link>
      </div>
      <div className="text-[#000B33]">
        <div className="flex flex-col w-full items-center mb-6">
          <h1 className="font-Inter text-[48px] max-w-[13ch] z-10 text-center font-bold mb-2">
            Pick a plan that's right for you
          </h1>
          <div className="-mt-8">
            <img src={underline} alt="underline" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] place-items-center mb-8">
            {pricingData.map((data) => (
              <div className="border border-[#000B33] rounded-lg px-8 py-4 mb-4">
                <div className="my-4">
                  <h2 className="bg-[#F1F1F1] rounded-lg text-[#160F0F] font-semibold w-fit px-2 py-1">
                    {data.title}
                  </h2>
                  <p className="max-w-[30ch] mt-4">{data.subtitle}</p>
                </div>
                <div className="h-[1.5px] w-full bg-[#00000050] mt-10"></div>
                <div className="my-8 mt-12">
                  <span className="text-[72px] font-semibold leading-6">
                    ${data.price}
                  </span>{" "}
                  <br />
                  per member, per month
                </div>
                <div className="h-[2px] w-full bg-[#00000050] mb-10"></div>
                {data.desc.map((desc) => (
                  <div className="flex mb-4">
                    <img src={desc.icon} alt={desc.text} />
                    <span className="ml-2">{desc.text}</span>
                  </div>
                ))}
                <div className="mb-2">
                  <button
                    onClick={() => setModal(!modal)}
                    className="bg-[#000] hover:scale-95 transition duration-200 rounded text-white w-full py-2"
                  >
                    Start a 14-day free trial
                  </button>
                </div>
              </div>
            ))}
          </div>
          {modal && (
            <div className="bg-[#ffffff99] z-20 w-screen h-screen fixed top-0 flex items-center justify-center">
              <div className="h-fit w-[90%] max-w-[600px] z-30 bg-[#F7F9FA] border border-[#09CEB4] py-4 rounded-lg flex justify-center items-center">
                <div className="w-[90%] max-w-[450px] z-30 bg-[#F7F9FA] py-4 rounded-lg">
                  <div>
                    <h1 className="text-[#000]">Card Number</h1>
                    <h2 className="opacity-50 text-sm">
                      Enter the 16-digit number on the card
                    </h2>
                    <div className="flex items-center bg-white border border-[#757575] rounded-lg px-4 mt-2 mb-4">
                      <img src={card} alt="Card" className="h-4 mx-4" />
                      <input
                        type="number"
                        name="card_no"
                        id="card_no"
                        value={cardNum}
                        onChange={handleCardNum}
                        placeholder="2412 - 2412 - 2412 - 2412"
                        className="text-center w-full outline-none"
                      />
                      <img
                        src={checkCircle}
                        alt="check circle"
                        className="h-4"
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-full">
                      <h1 className="text-[#000]">CVV Number</h1>
                      <h2 className="opacity-50 text-sm">
                        Enter the 3-digit number at the back of your card
                      </h2>
                    </div>
                    <div className="flex items-center bg-white border border-[#757575] rounded-lg px-4 mt-4 mb-6 max-w-[12ch]">
                      <input
                        type="number"
                        name="cvv_no"
                        id="cvv_no"
                        value={CVVNum}
                        onChange={handleCVVNum}
                        className="text-center w-full outline-none"
                        placeholder="CVV"
                      />
                      <img
                        src={dots}
                        alt="check circle"
                        className="-mt-2 -mb-1"
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-full">
                      <h1 className="text-[#000]">Expiry Date</h1>
                      <h2 className="opacity-50 text-sm">
                        Enter the expiry date of the card
                      </h2>
                    </div>
                    <div className="flex">
                      <div className="flex items-center bg-white border border-[#757575] rounded-lg px-2 mt-4 mb-6 max-w-[12ch]">
                        <input
                          type="number"
                          name="expiry_month"
                          id="expiry_month"
                          value={expMonth}
                          onChange={handleExpMonth}
                          className="text-center w-full outline-none my-1"
                          placeholder="Mon"
                        />
                      </div>
                      <div className="mt-2 mb-2 mx-1 font-medium text-[30px]">
                        /
                      </div>
                      <div className="flex items-center bg-white border border-[#757575] rounded-lg px-2 mt-4 mb-6 max-w-[12ch]">
                        <input
                          type="number"
                          name="expiry_year"
                          id="expiry_year"
                          value={expYear}
                          onChange={handleExpYear}
                          className="text-center w-full outline-none"
                          placeholder="Year"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-full">
                      <h1 className="text-[#000]">Pin</h1>
                      <h2 className="opacity-50 text-sm">
                        Enter your card pin
                      </h2>
                    </div>
                    <div className="flex items-center bg-white border border-[#757575] rounded-lg px-1 mt-4 mb-6 max-w-[7ch]">
                      <input
                        type="password"
                        name="pin"
                        id="pin"
                        value={pin}
                        onChange={handlePin}
                        className="text-center w-full outline-none font-bold"
                        placeholder="Pin"
                      />
                    </div>
                  </div>
                  <div className="opacity-50 my-3">
                    You will be charged after your 14 day free trial period
                  </div>
                  <div>
                    <button onClick={() => setModal(!modal)} className="text-white bg-[#09CEB4] w-full py-2 rounded-2xl hover:scale-95 transition duration-200">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
