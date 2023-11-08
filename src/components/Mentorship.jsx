import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { notify, warn } from "../App";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import Loader from "./Loader/Loader";
import axios from "axios";

const defaultFormFields = {
  others: "",
};

const Mentorship = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [industry, setIndustry] = useState();
  const [loading, setLoading] = useState();
  const { user, token } = useAuth();
  const { others } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
  };

  const handleSubmit = async (e) => {
    // console.log(industry, formFields);
    e.preventDefault();
    setLoading(true);
    const data = {
      ...formFields,
      industry,
    };
    await axios.post(`https://askthechip-hvp93.ondigitalocean.app/api/users/request-mentorship`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }).then((response) => {
      // console.log(response);
      setFormFields(defaultFormFields);
      notify("Mentor Request successful");
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      warn("Something went wrong, try again!");
      setLoading(false);
    })
  };

  return (
    <div className="grid grid-cols-12 pl-8">
      <div className="col-span-11 md:col-span-9 xm:col-span-7 xl:col-span-6">
        <ToastContainer />
        <div className="font-DMSans text-2xl font-medium my-2 mt-5">
          Mentorship
        </div>
        <div>
          Kindly fill out the form below to request for mentorship session
        </div>
        <div className="mt-6 ml-0 md:ml-6 mr-0 md:mr-8">
          <form onSubmit={handleSubmit}>
            {/* <div className="flex flex-col mb-5">
              <label htmlFor="email" className="font-DMSans text-sm mb-2">
                Email
              </label>
              <div className="border border-[#2d2d2d] rounded-full bg-transparent">
                <input
                  className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email Here"
                  required
                />
              </div>
            </div> */}
            {/* <div className="flex flex-col mb-5">
              <label htmlFor="phoneNumber" className="font-DMSans text-sm mb-2">
                Phone Number
              </label>
              <div className="border border-[#2d2d2d] rounded-full bg-transparent">
                <input
                  className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                  type="tel"
                  name="phoneNumber"
                  id="email"
                  value={phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number Here"
                  required
                />
              </div>
            </div> */}
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="font-DMSans text-sm mb-2">
                Select Industry
              </label>
              <div className="border border-[#2d2d2d] rounded-full">
                <select
                  value={industry}
                  name="industry"
                  onChange={handleIndustryChange}
                  className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent"
                >
                  <option disabled defaultValue>
                    Select Industry
                  </option>
                  <option value="ACCOUNTING">Accounting</option>
                  <option value="ADMINISTRATIVE">Administrative</option>
                  <option value="CONSULTING">Consulting</option>
                  <option value="FINANCIAL">Financial</option>
                  <option value="LEGAL">Legal</option>
                  <option value="MARKETING">Marketing</option>
                  <option value="MENTORSHIP">Mentorship</option>
                  <option value="TECHNOLOGY">Technology</option>
                  <option value="TRAINING">Training</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="others" className="font-DMSans text-sm mb-2">
                Message
              </label>
              <textarea
                className="border border-[#2d2d2d] rounded-xl bg-transparent py-4 px-4 resize-none"
                placeholder="Message here"
                name="others"
                value={others}
                onChange={handleChange}
                id="others"
                cols="30"
                rows="5"
              />
            </div>
            <div className="flex justify-center my-[3.75rem]">
              <button
                disabled={loading}
                type="submit"
                className={
                  loading
                    ? `bg-primary80 text-[#f8f8f8] border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`
                    : `bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300`
                }
              >
                {loading ? <Loader /> : "Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
