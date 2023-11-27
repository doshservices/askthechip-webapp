import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { notify, warn } from "../App";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import Loader from "./Loader/Loader";
import axios from "axios";
import { FileUploadInput, SideNav } from ".";
import { useWindowWidth } from "../utils/windowWidth";
import { Header } from "./home";

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

  const width = useWindowWidth();

  return (
    <div className="pageLayout bg-light">
      <SideNav />
      <div className="pageLayout__wrapper__container">
        {width < 480 ?
          <Header /> : <></>
        }
        <section className="mentorship">
          <ToastContainer />
          <h2>Mentorship</h2>
          <p>Kindly fill out the form below to request for mentorship session</p>
          <form onSubmit={handleSubmit}>
            <div className="layout">
              <div className="feild__wrapper">
                <label htmlFor="Linkedin Profile URL">
                  Linkedin Profile URL
                </label>
                <input
                  type="text"
                  name="Linkedin Profile URL"
                  id="Linkedin Profile URL"
                  // value={Linkedin Profile URL}
                  onChange={handleChange}
                  placeholder="Enter your linkedin profile url here"
                  required
                />
              </div>
              <div className="feild__wrapper">
                <label htmlFor="phoneNumber">
                  Why do you need a mentor?
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="email"
                  // value={phoneNumber}
                  onChange={handleChange}
                  placeholder="Answer Here"
                  required
                />
              </div>
            </div>
            <div className="feild__wrapper">
              <label htmlFor="email">
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
            <div className="mb-[1.5rem]">
              <label htmlFor="Upload CV">Upload CV</label>
              <FileUploadInput />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="others" className="mb-[5px]">
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
          </form>
        </section>
      </div>
    </div>
  );
};

export default Mentorship;
