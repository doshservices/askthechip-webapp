export const EmptyPost = ({ share }) => {
    return (
        <section className="bg-[#F8F8F8] mt-4 mx-4 xsm:mx-0 text-center py-6 px-4 max-w-[500px] xs:mx-auto" style={{ fontFamily: "DM Sans", color: "hsla(0, 0%, 18%, 0.8)" }}>
            <h2 className="font-[500] text-[1.05rem]">Nothing to see here. Be the first to create a post</h2>
            <p onClick={share} className="flex items-center justify-center text-[#068978] text-[.8rem] font-[500] pt-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.37533 15.8346V10.6263H4.16699V9.3763H9.37533V4.16797H10.6253V9.3763H15.8337V10.6263H10.6253V15.8346H9.37533Z" fill="#068978" />
                </svg>
                <span>Create Post</span>
            </p>
        </section>
    )
}
