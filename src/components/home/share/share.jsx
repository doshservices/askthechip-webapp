import profileImg from "../../../assets/Medium.png";

export const Share = () => {
  return (
    <section className="px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={profileImg} alt="share" />
          <p>Share</p>
        </div>
        <button className="flex items-center">
          <span> select board</span>
          <svg
            width="14"
            height="7"
            viewBox="0 0 14 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 6.75L0.75 0.5H13.25L7 6.75Z" fill="black" />
          </svg>
        </button>
      </div>
    </section>
  );
};
