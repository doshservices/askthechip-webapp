const Mentorship = () => {
  return (
    <div className='grid grid-cols-12 pl-8'>
      <div className="col-span-4">
        <div className="font-Inter text-2xl font-medium my-2">
          Request for Mentorship
        </div>
        <div className="mt-6">
          <div className="flex flex-col w-full mb-4">
              <label htmlFor="industry" className="mb-2 font-Inter text-left w-full mx-auto">
                Select Industry
              </label>
            <select className="outline-none border-[0.3px] border-[#757575] rounded-lg py-1.5 px-2 w-[90%]" name="industry" id="industry">
                <option>Manufacturing</option>
                <option>Technology</option>
                <option>Entertainment</option>
            </select>
          </div>
          <div className="flex flex-col w-full mb-4">
            <label htmlFor="full_name" className="mb-2 font-Inter text-left w-full mx-auto">
              Email address
            </label>
            <div className='flex w-full justify-start'>
              <input
                className="outline-none border border-[#757575] rounded-lg py-1 px-2 w-[90%]"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-4">
            <label htmlFor="phone_no" className="mb-2 font-Inter w-full mx-auto">
              Phone number
            </label>
            <div className='flex w-full justify-start'>
              <input
                className="outline-none border border-[#757575] rounded-lg py-1 px-2 w-[90%]"
                type="tel"
                name="phone_no"
                id="phone_no"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-4">
            <label htmlFor="full_name" className="mb-2 font-Inter text-left w-full mx-auto">
              Others
            </label>
            <div className='flex w-full justify-start'>
              <input
                className="outline-none border border-[#757575] rounded-lg py-1 px-2 w-[90%]"
                type="text"
                name="others"
                id="others"
                placeholder="Some values goes here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mentorship