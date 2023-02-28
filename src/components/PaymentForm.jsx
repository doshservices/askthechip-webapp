import {useState} from 'react';
import card from "./../assets/icons/card.svg";
import checkCircle from "./../assets/icons/check-circle.svg";
import dots from "./../assets/icons/dots.svg";
import ButtonNew from './ButtonNew';

const PaymentForm = () => {

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
        <div className="h-fit font-Inter w-full flex justify-center items-center">
                <div className="w-[80%] rounded-lg">
                  <div>
                    <h1 className="text-[#000] font-medium">Card Number</h1>
                    <h2 className="opacity-50">
                      Enter the 16-digit number on the card
                    </h2>
                    <div className="flex items-center bg-white border border-[#757575] rounded-lg px-2 md:px-4 mt-2 mb-4">
                      <img src={card} alt="Card" className="h-4 mx-0 md:mx-4" />
                      <input
                        type="number"
                        name="card_no"
                        id="card_no"
                        value={cardNum}
                        onChange={handleCardNum}
                        placeholder="2412 - 2412 - 2412 - 2412"
                        className="text-center w-full py-1 outline-none"
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
                      <h1 className="text-[#000] font-medium">CVV Number</h1>
                      <h2 className="opacity-50">
                        Enter the 3-digit number at the back of your card
                      </h2>
                    </div>
                    <div className="flex items-center bg-white border border-[#757575] rounded-lg px-2 md:px-4 mt-4 mb-6 max-w-[10ch] md:max-w-[12ch]">
                      <input
                        type="number"
                        name="cvv_no"
                        id="cvv_no"
                        value={CVVNum}
                        onChange={handleCVVNum}
                        className="text-center w-full outline-none py-[3px]"
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
                      <h1 className="text-[#000] font-medium">Expiry Date</h1>
                      <h2 className="opacity-50">
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
                          className="text-center w-full outline-none my-1 py-[3px]"
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
                          className="text-center w-full outline-none py-[3px]"
                          placeholder="Year"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-full">
                      <h1 className="text-[#000] font-medium">Pin</h1>
                      <h2 className="opacity-50">
                        Enter your card pin
                      </h2>
                    </div>
                    <div className="flex items-center bg-white border border-[#757575] rounded-lg px-1 mt-4 mb-6 max-w-[12ch]">
                      <input
                        type="password"
                        name="pin"
                        id="pin"
                        value={pin}
                        onChange={handlePin}
                        className="text-center w-full outline-none font-bold py-[3px]"
                        placeholder="Pin"
                      />
                    </div>
                  </div>
                  <div className='flex mt-20 items-end justify-end my-4'>
                    <ButtonNew intent={`primary`} 
                        className="w-fit px-8 font-Inter text-lg py-[0.4rem]"
                    >
                        Save
                    </ButtonNew>
                </div>
                </div>
              </div>
    </div>
  )
}

export default PaymentForm;