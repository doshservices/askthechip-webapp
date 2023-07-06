import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { requestMentorship } from "../api";
import { notify, warn } from "../App";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import Loader from "./Loader/Loader";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  others: "",
};

const Mentorship = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [industry, setIndustry] = useState();
  const [loading, setLoading] = useState();
  const { user } = useAuth();
  const { firstName, lastName, email, others } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      ...formFields,
      industry,
    };
    console.log(data);
    try {
      const res = await fetch(
        `http://askthechip-endpoint-production.up.railway.app/api/users/request-mentorship`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        console.log(res.data);
        notify("Request submitted successfully");
        setFormFields(defaultFormFields);
      }
      if (!res.ok) {
        console.log(res.message);
        warn(res.message);
      }
      console.log(res);
    } catch (err) {
      console.log(err);
      warn("An error has occured");
    }
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-12 pl-8">
      <ToastContainer />
      <div className="col-span-11 md:col-span-9 xm:col-span-7 xl:col-span-6">
        <div className="font-DMSans text-2xl font-medium my-2 mt-5">
          Mentorship
        </div>
        <div>
          Kindly fill out the form below to request for mentorship session
        </div>
        <div className="mt-6 ml-0 md:ml-6 mr-0 md:mr-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <label htmlFor="firstName" className="font-DMSans text-sm mb-2">
                First Name
              </label>
              <div className="border border-[#2d2d2d] rounded-full">
                <input
                  className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={handleChange}
                  placeholder="First Name Here"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="lastName" className="font-DMSans text-sm mb-2">
                Last Name
              </label>
              <div className="border border-[#2d2d2d] rounded-full bg-transparent">
                <input
                  className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={handleChange}
                  placeholder="Last Name Here"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="font-DMSans text-sm mb-2">
                Email Address
              </label>
              <div className="border border-[#2d2d2d] rounded-full bg-transparent">
                <input
                  className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email Address Here"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="font-DMSans text-sm mb-2">
                Select Industry
              </label>
              <div className="border border-[#2d2d2d] rounded-full">
                <select
                  value={industry}
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
