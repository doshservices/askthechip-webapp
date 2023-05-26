import { useState } from 'react'
import { Navbar } from '../components'
import Back from "../assets/icons/back-button.svg";
import cancel from "../assets/icons/cancel-icon.svg";
import { countries } from '../data/countries';

const defaultFormFields = {
    cardNum: "",
    expiration: "",
    cvv: "",
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    city: ""
}

const Payment = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { cardNum, expiration, cvv, firstName, lastName, companyName, address, city } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }
    return (
        <div className="font-DMSans">
            <Navbar />
            <div className='pt-32 pb-20 px-20 text-dark2D'>
                <div className='flex'>
                    <div className='cursor-pointer'>
                        <img src={Back} alt="Back" />
                    </div>
                    <div className='text-primary110 font-bold text-3xl mx-auto'>Premium Plan Purchase</div>
                    <div className='cursor-pointer'>
                        <img src={cancel} alt="Back" />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-full md:w-1/2'>
                        <form className='mt-10 w-[80%] mx-auto'>
                            <div className="flex flex-col mb-5">
                                <label htmlFor="cardNum" className="font-DMSans text-sm mb-2">
                                    Card Number
                                </label>
                                <div className="border border-[#2d2d2d] rounded-full">
                                    <input
                                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                                        type="text"
                                        name="cardNum"
                                        id="cardNum"
                                        value={cardNum}
                                        onChange={handleChange}
                                        placeholder="Enter card number Here"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
                                <div className="flex flex-col mb-5">
                                    <label htmlFor="expiration" className="font-DMSans text-sm mb-2">
                                        Expiration
                                    </label>
                                    <div className="border border-[#2d2d2d] rounded-full">
                                        <input
                                            className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                                            type="text"
                                            name="expiration"
                                            id="expiration"
                                            value={expiration}
                                            onChange={handleChange}
                                            placeholder="MM/YY"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-5">
                                    <label htmlFor="lastName" className="font-DMSans text-sm mb-2">
                                        CVV
                                    </label>
                                    <div className="border border-[#2d2d2d] rounded-full bg-transparent">
                                        <input
                                            className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                                            type="text"
                                            name="cvv"
                                            id="cvv"
                                            value={cvv}
                                            onChange={handleChange}
                                            placeholder="***"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
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
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
                                <div className="flex flex-col mb-5">
                                    <label htmlFor="company" className="font-DMSans text-sm mb-2">
                                        Company's Name
                                    </label>
                                    <div className="border border-[#2d2d2d] rounded-full bg-transparent">
                                        <input
                                            className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                                            type="text"
                                            name="company"
                                            id="company"
                                            value={companyName}
                                            onChange={handleChange}
                                            placeholder="Enter your company name here"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-5">
                                    <label htmlFor="phone" className="font-DMSans text-sm mb-2">
                                        Billing Rate
                                    </label>
                                    <div className="border border-[#2d2d2d] rounded-full">
                                        <select className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent">
                                            <option disabled defaultValue>Select Billing Rate</option>
                                            <option value="monthly">Monthly</option>
                                            <option value="quarterly">Quarterly</option>
                                            <option value="annually">Annually</option>
                                            <option value="biannually">Bi-anually</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col mb-5">
                                <label htmlFor="address" className="font-DMSans text-sm mb-2">
                                    Address
                                </label>
                                <div className="border border-[#2d2d2d] rounded-full bg-transparent">
                                    <input
                                        className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                                        type="text"
                                        name="address"
                                        id="address"
                                        value={address}
                                        onChange={handleChange}
                                        placeholder="Email Address Here"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                                <div className="flex flex-col mb-2">
                                    <label htmlFor="country" className="font-DMSans text-sm mb-2">
                                        Country
                                    </label>
                                    <div className="border border-[#2d2d2d] rounded-full">
                                        <select className="rounded-full py-2 px-5 w-[96%] outline-none text-xs bg-transparent">
                                            <option disabled defaultValue>Select your country</option>
                                            {countries.map(country => (
                                                <option key={country} value={country}>{country}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label htmlFor="city" className="font-DMSans text-sm mb-2">
                                        City
                                    </label>
                                    <div className="flex border border-[#2d2d2d] rounded-full">
                                        <input
                                            className="rounded-full py-2 px-5 w-full outline-none text-xs bg-transparent"
                                            type="text"
                                            name="city"
                                            id="city"
                                            placeholder="Confirm new password"
                                            value={city}
                                            onChange={handleChange}
                                            minLength={8}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 flex items-end">
                        <div className='w-[80%] mx-auto'>
                            <div className='mb-20'>
                                <div className='flex justify-between'>
                                    <div>
                                        Basic Plan per member
                                    </div>
                                    <div>
                                        ($5000 x 12 months) $600
                                    </div>
                                </div>
                                <div className='flex justify-between text-dark2D/80'>
                                    <div>
                                        Annual plan 18% savings
                                    </div>
                                    <div>
                                        <s>$60</s>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between text-dark2D font-medium text-[22px]'>
                                <div>
                                    Total Due Now
                                </div>
                                <div>
                                    $0.0
                                </div>
                            </div>
                            <div className="flex justify-center mt-10 mb-2">
                                <button type="submit" className="bg-primary80 hover:bg-transparent text-[#f8f8f8] hover:text-primary80 border-primary80 border py-2 text-sm font-DMSans font-medium w-full text-center rounded-full transition duration-300">
                                    Create Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
