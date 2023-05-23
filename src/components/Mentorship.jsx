import { useState } from "react";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  type: "",
  password: "",
  confirmPassword: "",
  companyName: "",
  officeAddress: ""
}

const Mentorship = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [accountType, setAccountType] = useState("individual");
  const { firstName, lastName, email, phone, password, confirmPassword, companyName, officeAddress } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className="grid grid-cols-12 pl-8">
      <div className="col-span-11 md:col-span-9 xm:col-span-7 xl:col-span-6">
        <div className="font-Inter text-2xl font-medium my-2 mt-5">
          Mentorship
        </div>
        <div>
          Kindly fill out the form below to request for mentorship session
        </div>
        <div className="mt-6 ml-28">
          <form>
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
                <select className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent">
                  <option disabled selected>Select Industry</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Administrative">Administrative</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Technology">Technology</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="message" className="font-DMSans text-sm mb-2">
                Message
              </label>
              <textarea className="border border-[#2d2d2d] rounded-xl bg-transparent py-4 px-4" placeholder="Message here" name="message" id="message" cols="30" rows="5" />
            </div>
            <div className="flex justify-center mt-[3.75rem]">
              <button type="submit" className="bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300">
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
