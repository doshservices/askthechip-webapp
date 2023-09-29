export const UserSearch = ({ onChange, value, onClick }) => {
    return (
        <div className="flex relative mb-6 max-w-[500px]">
            <input value={value} onChange={onChange} className="w-full bg-transparent border-[1px] border-solid border-#E9E9E9 sm:bg-[#f4f4f4] focus:outline-1 focus:outline focus:outline-black/10 rounded-[10px] p-[10px] pr-[40px] border-black/10" type="text" placeholder="Search askthechip" />
            <svg onClick={onClick} className="absolute right-[15px] top-[13px] cursor-pointer" width="20" height="20" fill="#068978" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m21.407 19.753-4.41-4.41a8.148 8.148 0 0 0 1.633-4.903c0-4.516-3.674-8.19-8.19-8.19s-8.19 3.674-8.19 8.19 3.674 8.19 8.19 8.19a8.148 8.148 0 0 0 4.902-1.633l4.41 4.41a1.171 1.171 0 0 0 1.655-1.654ZM4.59 10.44a5.85 5.85 0 1 1 5.85 5.85 5.857 5.857 0 0 1-5.85-5.85Z"></path>
            </svg>
        </div>
    )
}