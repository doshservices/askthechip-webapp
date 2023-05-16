import { useState } from 'react';

function FileUploadInput() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <label className="w-full flex flex-col items-center px-4 py-6 bg-light rounded-lg shadow tracking-wide border-[0.4px] border-[#2d2d2d]/50 cursor-pointer">
                <svg width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 31.9969C7.63333 31.9969 5.16667 30.9635 3.1 28.8969C1.03333 26.8302 0 24.3635 0 21.4969C0 18.8969 0.825 16.6052 2.475 14.6219C4.125 12.6385 6.25 11.4469 8.85 11.0469C9.51667 7.81354 11.0833 5.17188 13.55 3.12187C16.0167 1.07187 18.8667 0.046875 22.1 0.046875C25.8667 0.046875 29.025 1.40521 31.575 4.12187C34.125 6.83854 35.4 10.0969 35.4 13.8969V15.0969C37.8 15.0302 39.8333 15.8052 41.5 17.4219C43.1667 19.0385 44 21.0802 44 23.5469C44 25.8469 43.1667 27.8302 41.5 29.4969C39.8333 31.1635 37.85 31.9969 35.55 31.9969H23.5C22.7 31.9969 22 31.6969 21.4 31.0969C20.8 30.4969 20.5 29.7969 20.5 28.9969V16.0969L16.35 20.2469L14.2 18.0969L22 10.2969L29.8 18.0969L27.65 20.2469L23.5 16.0969V28.9969H35.55C37.05 28.9969 38.3333 28.4635 39.4 27.3969C40.4667 26.3302 41 25.0469 41 23.5469C41 22.0469 40.4667 20.7635 39.4 19.6969C38.3333 18.6302 37.05 18.0969 35.55 18.0969H32.4V13.8969C32.4 10.9302 31.3917 8.38021 29.375 6.24687C27.3583 4.11354 24.8667 3.04688 21.9 3.04688C18.9333 3.04688 16.4333 4.11354 14.4 6.24687C12.3667 8.38021 11.35 10.9302 11.35 13.8969H10.4C8.33333 13.8969 6.58333 14.6219 5.15 16.0719C3.71667 17.5219 3 19.3135 3 21.4469C3 23.5135 3.73333 25.2885 5.2 26.7719C6.66667 28.2552 8.43333 28.9969 10.5 28.9969H17.5V31.9969H10.5Z" fill="#068978" />
                </svg>
                <span className="font-DMSans mt-2 text-sm text-[#2d2d2d]/50 leading-normal">
                    {selectedFile ? selectedFile.name : 'Click here or drop files to upload'}
                </span>
                <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
}

export default FileUploadInput;
