import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-smoke min-h-screen grow">
      <nav className="p-7 font-tertiary">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "flex text-base font-medium font-tertiary items-center gap-2 my-4 active"
                  : "flex text-base font-medium font-tertiary items-center gap-2 my-4"
              }
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="text-inherit"
                  d="M27.2251 7.185L14.5938 0.36875C14.2226 0.16875 13.7763 0.16875 13.4063 0.36875L0.781319 7.185C0.173819 7.515 -0.0524313 8.2725 0.275069 8.88C0.500069 9.29875 0.931319 9.53625 1.37507 9.53625C1.57507 9.53625 1.78007 9.48875 1.96882 9.38625L2.88632 8.89125L4.87382 22.9537C5.14382 24.4712 6.51132 25.5312 8.19882 25.5312H19.8013C21.4888 25.5312 22.8563 24.4712 23.1288 22.9212L25.1138 8.89L26.0351 9.3875C26.6413 9.71625 27.4001 9.49 27.7276 8.8825C28.0563 8.275 27.8276 7.51625 27.2226 7.18875L27.2251 7.185ZM14.0001 17.2912C11.7563 17.2912 9.93757 15.4725 9.93757 13.2287C9.93757 10.985 11.7563 9.16625 14.0001 9.16625C16.2438 9.16625 18.0626 10.985 18.0626 13.2287C18.0626 15.4725 16.2438 17.2912 14.0001 17.2912Z"
                  fill="#4FD6C4"
                />
              </svg>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="flex text-base font-medium font-tertiary items-center  gap-2 my-4"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.3738 18.7529C23.7407 18.7554 23.1273 18.9737 22.6348 19.3716L20.6238 18.212V16.7063C21.2494 16.4852 21.7766 16.05 22.1123 15.4778C22.4479 14.9055 22.5705 14.233 22.4583 13.5791C22.3462 12.9252 22.0064 12.332 21.4992 11.9044C20.9919 11.4767 20.3498 11.2422 19.6863 11.2422C19.0229 11.2422 18.3808 11.4767 17.8735 11.9044C17.3663 12.332 17.0265 12.9252 16.9144 13.5791C16.8022 14.233 16.9247 14.9055 17.2604 15.4778C17.5961 16.05 18.1233 16.4852 18.7488 16.7063V18.212L16.7379 19.3735C16.2457 18.9749 15.6323 18.7559 14.9988 18.7529C14.4112 18.7489 13.8369 18.9279 13.3555 19.265C12.8742 19.6021 12.5097 20.0807 12.3125 20.6343C12.1154 21.1879 12.0954 21.7891 12.2553 22.3546C12.4152 22.9201 12.7472 23.4218 13.205 23.7901C13.6629 24.1585 14.2241 24.3752 14.8107 24.4103C15.3973 24.4454 15.9803 24.297 16.4788 23.9859C16.9774 23.6747 17.3667 23.2161 17.5929 22.6737C17.819 22.1313 17.8708 21.532 17.741 20.9588L19.6863 19.8348L21.6317 20.9579C21.5063 21.5262 21.5604 22.1195 21.7865 22.6558C22.0127 23.192 22.3998 23.6449 22.8943 23.9517C23.3889 24.2586 23.9665 24.4044 24.5474 24.3689C25.1283 24.3335 25.684 24.1186 26.1375 23.7539C26.5911 23.3891 26.9202 22.8926 27.0795 22.3328C27.2389 21.7731 27.2205 21.1776 27.0269 20.6287C26.8333 20.0799 26.4741 19.6046 25.9989 19.2686C25.5237 18.9326 24.9559 18.7524 24.3738 18.7529ZM14.9988 22.5029C14.8134 22.5029 14.6322 22.4479 14.478 22.3449C14.3238 22.2419 14.2037 22.0955 14.1327 21.9242C14.0618 21.7529 14.0432 21.5644 14.0794 21.3825C14.1155 21.2006 14.2048 21.0336 14.3359 20.9025C14.467 20.7714 14.6341 20.6821 14.816 20.6459C14.9978 20.6097 15.1863 20.6283 15.3576 20.6993C15.5289 20.7702 15.6753 20.8904 15.7784 21.0446C15.8814 21.1987 15.9363 21.38 15.9363 21.5654C15.9363 21.814 15.8376 22.0525 15.6618 22.2283C15.4859 22.4041 15.2475 22.5029 14.9988 22.5029ZM19.6863 13.1279C19.8718 13.1279 20.053 13.1829 20.2072 13.2859C20.3614 13.3889 20.4815 13.5353 20.5525 13.7066C20.6234 13.8779 20.642 14.0664 20.6058 14.2483C20.5697 14.4302 20.4804 14.5972 20.3493 14.7283C20.2181 14.8594 20.0511 14.9487 19.8692 14.9849C19.6874 15.0211 19.4989 15.0025 19.3276 14.9315C19.1563 14.8606 19.0099 14.7404 18.9068 14.5862C18.8038 14.4321 18.7488 14.2508 18.7488 14.0654C18.7488 13.8168 18.8476 13.5783 19.0234 13.4025C19.1992 13.2267 19.4377 13.1279 19.6863 13.1279ZM24.3738 22.5029C24.1884 22.5029 24.0072 22.4479 23.853 22.3449C23.6988 22.2419 23.5787 22.0955 23.5077 21.9242C23.4368 21.7529 23.4182 21.5644 23.4544 21.3825C23.4905 21.2006 23.5798 21.0336 23.7109 20.9025C23.842 20.7714 24.0091 20.6821 24.1909 20.6459C24.3728 20.6097 24.5613 20.6283 24.7326 20.6993C24.9039 20.7702 25.0503 20.8904 25.1534 21.0446C25.2564 21.1987 25.3113 21.38 25.3113 21.5654C25.3113 21.814 25.2126 22.0525 25.0368 22.2283C24.8609 22.4041 24.6225 22.5029 24.3738 22.5029Z"
                  fill="black"
                />
                <path
                  d="M15 29.0637C12.2659 29.0608 9.64457 27.9733 7.71125 26.04C5.77793 24.1067 4.69048 21.4854 4.6875 18.7512V5.98438L14.9878 0.828125L24.7941 5.73781L23.955 7.41406L14.9878 2.92438L6.5625 7.14313V18.7512C6.56233 20.3183 6.99854 21.8544 7.82226 23.1874C8.64599 24.5205 9.82467 25.5978 11.2262 26.2987C12.6278 26.9996 14.1968 27.2963 15.7575 27.1556C17.3182 27.0149 18.8089 26.4424 20.0625 25.5022L21.1875 27.0012C19.4054 28.3457 17.2323 29.07 15 29.0637Z"
                  fill="black"
                />
              </svg>
              <span>Services</span>
            </NavLink>
          </li>
          <NavLink to="/notifications">
            <li className="flex text-base font-medium font-tertiary items-center  gap-2 my-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.1222 20.5866C27.0972 20.5666 24.4472 18.5366 24.4935 13.0491C24.5185 9.88406 23.4785 7.07156 21.5597 5.13031C19.841 3.38906 17.5135 2.42656 15.0072 2.41406H14.991C12.486 2.42656 10.1585 3.38906 8.43846 5.13156C6.52096 7.07281 5.47846 9.88406 5.50596 13.0491C5.55221 18.4616 2.98096 20.5078 2.87846 20.5866C2.55346 20.8278 2.42096 21.2491 2.54721 21.6341C2.67471 22.0191 3.03471 22.2778 3.43721 22.2778H9.58721C9.71471 25.1653 12.0835 27.4778 14.9997 27.4778C17.916 27.4778 20.2822 25.1653 20.4085 22.2778H26.561C26.9635 22.2778 27.3235 22.0203 27.4485 21.6353C27.5772 21.2516 27.4447 20.8291 27.1197 20.5878L27.1222 20.5866ZM15.001 25.5991C13.1197 25.5991 11.5885 24.1278 11.466 22.2766H18.536C18.411 24.1266 16.8822 25.6016 15.001 25.6016V25.5991ZM5.47596 20.4016C6.40096 18.9866 7.41096 16.6166 7.38096 13.0316C7.35846 10.3316 8.18596 8.05406 9.77221 6.44781C11.1385 5.06406 12.9972 4.29781 15.001 4.28906C17.0047 4.29906 18.8597 5.06406 20.226 6.44906C21.8135 8.05531 22.6422 10.3316 22.6197 13.0328C22.5897 16.6178 23.601 18.9891 24.526 20.4028H5.47596V20.4016Z"
                  fill="#0F1419"
                />
              </svg>

              <span>Notifications</span>
            </li>
          </NavLink>
          <NavLink to="/mentorship">
            <li className="flex text-base font-medium font-tertiary items-center gap-2 my-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 5.25H5C4.53587 5.25 4.09075 5.43437 3.76256 5.76256C3.43437 6.09075 3.25 6.53587 3.25 7V25C3.25 25.4641 3.43437 25.9092 3.76256 26.2374C4.09075 26.5656 4.53587 26.75 5 26.75H6.675C6.8161 26.7498 6.95428 26.7099 7.07368 26.6347C7.19309 26.5595 7.28886 26.4522 7.35 26.325C7.85618 25.2547 8.65594 24.3502 9.6562 23.7168C10.6565 23.0834 11.8161 22.7471 13 22.7471C14.1839 22.7471 15.3435 23.0834 16.3438 23.7168C17.3441 24.3502 18.1438 25.2547 18.65 26.325C18.7111 26.4522 18.8069 26.5595 18.9263 26.6347C19.0457 26.7099 19.1839 26.7498 19.325 26.75H27C27.4641 26.75 27.9092 26.5656 28.2374 26.2374C28.5656 25.9092 28.75 25.4641 28.75 25V7C28.75 6.53587 28.5656 6.09075 28.2374 5.76256C27.9092 5.43437 27.4641 5.25 27 5.25ZM9.75 18C9.75 17.3572 9.94061 16.7289 10.2977 16.1944C10.6548 15.6599 11.1624 15.2434 11.7563 14.9974C12.3501 14.7514 13.0036 14.687 13.634 14.8124C14.2645 14.9378 14.8436 15.2474 15.2981 15.7019C15.7526 16.1564 16.0621 16.7355 16.1876 17.366C16.313 17.9964 16.2486 18.6499 16.0026 19.2437C15.7566 19.8376 15.3401 20.3452 14.8056 20.7023C14.2711 21.0594 13.6428 21.25 13 21.25C12.1391 21.2467 11.3143 20.9032 10.7055 20.2945C10.0968 19.6857 9.75329 18.8609 9.75 18ZM27.25 25C27.25 25.0663 27.2237 25.1299 27.1768 25.1768C27.1299 25.2237 27.0663 25.25 27 25.25H19.7875C18.9124 23.6801 17.5213 22.4612 15.85 21.8C16.6476 21.2018 17.2367 20.3679 17.5339 19.4163C17.8312 18.4647 17.8215 17.4437 17.5062 16.4979C17.191 15.5521 16.5861 14.7295 15.7774 14.1466C14.9686 13.5637 13.9969 13.25 13 13.25C12.0031 13.25 11.0314 13.5637 10.2226 14.1466C9.41386 14.7295 8.80902 15.5521 8.49375 16.4979C8.17849 17.4437 8.16881 18.4647 8.46606 19.4163C8.76332 20.3679 9.35245 21.2018 10.15 21.8C8.4787 22.4612 7.08755 23.6801 6.2125 25.25H5C4.93468 25.247 4.87284 25.2196 4.8266 25.1734C4.78036 25.1272 4.75304 25.0653 4.75 25V7C4.75 6.9337 4.77634 6.87011 4.82322 6.82322C4.87011 6.77634 4.9337 6.75 5 6.75H27C27.0663 6.75 27.1299 6.77634 27.1768 6.82322C27.2237 6.87011 27.25 6.9337 27.25 7V25ZM24.75 10V22C24.75 22.1989 24.671 22.3897 24.5303 22.5303C24.3897 22.671 24.1989 22.75 24 22.75H22C21.8011 22.75 21.6103 22.671 21.4697 22.5303C21.329 22.3897 21.25 22.1989 21.25 22C21.25 21.8011 21.329 21.6103 21.4697 21.4697C21.6103 21.329 21.8011 21.25 22 21.25H23.25V10.75H8.75V12C8.75 12.1989 8.67098 12.3897 8.53033 12.5303C8.38968 12.671 8.19891 12.75 8 12.75C7.80109 12.75 7.61032 12.671 7.46967 12.5303C7.32902 12.3897 7.25 12.1989 7.25 12V10C7.25 9.80109 7.32902 9.61032 7.46967 9.46967C7.61032 9.32902 7.80109 9.25 8 9.25H24C24.1989 9.25 24.3897 9.32902 24.5303 9.46967C24.671 9.61032 24.75 9.80109 24.75 10Z"
                  fill="#0F1419"
                />
              </svg>
              <span>Mentorship</span>
            </li>
          </NavLink>
          <NavLink to="messages">
            <li className="flex text-base font-medium font-tertiary items-center gap-2 my-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.0625 3.77344H5.9375C4.04125 3.77344 2.5 5.31594 2.5 7.21344V22.8322C2.5 24.7297 4.04125 26.2734 5.9375 26.2734H24.0625C25.9587 26.2734 27.5 24.7297 27.5 22.8322V7.21344C27.5 5.31594 25.9587 3.77344 24.0625 3.77344ZM5.9375 5.64844H24.0625C24.925 5.64844 25.625 6.34844 25.625 7.21094V8.10344L15.5625 14.8122C15.2212 15.0372 14.78 15.0397 14.4375 14.8097L4.375 8.10344V7.21094C4.375 6.34844 5.075 5.64844 5.9375 5.64844ZM24.0625 24.3959H5.9375C5.075 24.3959 4.375 23.6959 4.375 22.8334V10.3009L13.425 16.3384C13.9037 16.6584 14.4525 16.8184 15 16.8184C15.55 16.8184 16.0963 16.6584 16.575 16.3397L25.625 10.3022V22.8297C25.625 23.6922 24.925 24.3922 24.0625 24.3922V24.3959Z"
                  fill="#0F1419"
                />
              </svg>
              <span>Messages</span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
