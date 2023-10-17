import React from 'react'
import { Link } from 'gatsby'
import { useDarkMode } from './ThemeSwitcher'
import Toggle from './Toggle'

// const Navbar = class extends React.Component {
const Navbar = ({ open, toggle }) => {
  const [theme, toggleTheme] = useDarkMode()

  const toggleHamburger = () => {

  }

  return (
    <nav
      id="header"
      className="navbar"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="navbar-col">
        <Link
          to="/"
          id="logo"
          className="navbar-item"
          title="← Back to the homepage"
        >
          {/* <img src={logo} alt="Design &amp; Code — tips" style={{ width: "107px" }} /> */}
          <svg
            viewBox="0 0 107 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1208 10.4955C14.8168 10.4955 16.2868 10.8234 17.5306 11.4792C18.7744 12.1124 19.792 12.9944 20.5836 14.1251C21.3977 15.2332 21.997 16.4996 22.3814 17.9243C22.7659 19.3491 22.9581 20.8303 22.9581 22.3681C22.9581 24.5391 22.6076 26.5292 21.9065 28.3383C21.2281 30.1249 20.1652 31.5609 18.7179 32.6464C17.2705 33.7093 15.4048 34.2407 13.1208 34.2407H4.30109C4.12017 34.2407 3.96187 34.1729 3.82618 34.0372C3.69049 33.9015 3.62265 33.7432 3.62265 33.5623V11.1739C3.62265 10.993 3.69049 10.8347 3.82618 10.699C3.96187 10.5633 4.12017 10.4955 4.30109 10.4955H13.1208ZM12.7815 32.8839C14.8621 32.8839 16.5355 32.4203 17.802 31.4931C19.091 30.5432 20.0295 29.2768 20.6175 27.6938C21.2281 26.0882 21.5334 24.3129 21.5334 22.3681C21.5334 20.9886 21.3638 19.6657 21.0245 18.3992C20.7079 17.1328 20.1991 16.0134 19.4981 15.041C18.797 14.0459 17.8924 13.2657 16.7843 12.7004C15.6762 12.135 14.3419 11.8523 12.7815 11.8523H4.84383L5.04736 11.581V33.1891L4.84383 32.8839H12.7815ZM33.7699 34.5799C32.1642 34.5799 30.7508 34.2068 29.5296 33.4605C28.3084 32.6916 27.3586 31.7079 26.6802 30.5093C26.0018 29.3108 25.6625 28.0556 25.6625 26.744C25.6625 25.7942 25.8548 24.867 26.2392 23.9624C26.6463 23.0352 27.2456 22.1985 28.0371 21.4522C28.8512 20.7059 29.8802 20.1293 31.124 19.7222L32.1755 20.7738C30.3664 21.1808 29.066 21.9384 28.2745 23.0465C27.483 24.132 27.0873 25.308 27.0873 26.5744C27.0873 27.7051 27.3473 28.7793 27.8675 29.797C28.3876 30.8146 29.1452 31.6401 30.1402 32.2733C31.1579 32.9065 32.3678 33.2231 33.7699 33.2231C35.3755 33.2231 36.7437 32.9856 37.8744 32.5107C39.0051 32.0358 39.9436 31.3913 40.6899 30.5772C41.4362 29.763 42.0355 28.8585 42.4878 27.8634C42.9401 26.8458 43.268 25.8168 43.4715 24.7765C43.5167 24.5956 43.5959 24.4599 43.7089 24.3695C43.8446 24.2564 44.0029 24.1999 44.1839 24.1999C44.3874 24.1999 44.557 24.279 44.6927 24.4373C44.8284 24.573 44.8736 24.7539 44.8284 24.9801C44.6474 26.156 44.2856 27.3207 43.7429 28.474C43.2001 29.6047 42.4765 30.6337 41.5719 31.5609C40.6673 32.4881 39.5592 33.2231 38.2475 33.7658C36.9585 34.3086 35.4659 34.5799 33.7699 34.5799ZM45.8121 34.105C45.7443 34.105 45.6764 34.0937 45.6086 34.0711C45.5407 34.0259 45.4729 33.992 45.405 33.9693C44.0934 32.9969 42.8044 32.0358 41.538 31.086C40.2942 30.1362 39.0164 29.062 37.7048 27.8634C36.4158 26.6649 35.025 25.2175 33.5324 23.5214C32.7409 22.6169 32.0285 21.7123 31.3953 20.8077C30.7621 19.8805 30.2533 18.9759 29.8688 18.0939C29.507 17.1894 29.3261 16.3187 29.3261 15.482C29.3261 14.4417 29.5636 13.5258 30.0385 12.7343C30.536 11.9202 31.237 11.287 32.1416 10.8347C33.0462 10.3824 34.1204 10.1562 35.3642 10.1562C37.015 10.1562 38.338 10.4842 39.333 11.14C40.3281 11.7732 41.0404 12.5082 41.4701 13.3449C41.4927 13.3675 41.5153 13.424 41.538 13.5145C41.5832 13.5823 41.6058 13.6615 41.6058 13.752C41.6058 13.865 41.5379 14.0007 41.4023 14.159C41.2892 14.2947 41.1309 14.3625 40.9274 14.3625C40.8143 14.3625 40.7012 14.3399 40.5881 14.2947C40.4977 14.2269 40.4185 14.1477 40.3507 14.0572C39.921 13.3788 39.3217 12.7908 38.5528 12.2933C37.8066 11.7732 36.7437 11.5131 35.3642 11.5131C33.849 11.5131 32.6957 11.8863 31.9042 12.6325C31.1353 13.3562 30.7508 14.3286 30.7508 15.5498C30.7508 16.2282 30.9204 16.9745 31.2596 17.7886C31.5989 18.6028 32.0625 19.4395 32.6504 20.2989C33.2384 21.1582 33.9055 22.0063 34.6518 22.843C35.6242 23.9511 36.6306 25.0027 37.6709 25.9977C38.7111 26.9928 39.7401 27.92 40.7577 28.7793C41.7754 29.616 42.7478 30.3736 43.675 31.0521C44.6022 31.7305 45.439 32.3298 46.1852 32.8499C46.2983 32.9178 46.3775 32.9969 46.4227 33.0874C46.4679 33.1778 46.4905 33.2796 46.4905 33.3927C46.4905 33.551 46.4227 33.7093 46.287 33.8676C46.1739 34.0259 46.0156 34.105 45.8121 34.105ZM68.3004 12.4629C68.4813 12.5986 68.5831 12.7569 68.6057 12.9378C68.6283 13.0961 68.5831 13.2657 68.47 13.4467C68.3569 13.605 68.2099 13.6954 68.029 13.718C67.8707 13.718 67.7124 13.6728 67.5541 13.5823C66.6043 12.9265 65.564 12.4064 64.4333 12.0219C63.3252 11.6375 62.1379 11.4453 60.8715 11.4453C59.4242 11.4453 58.0673 11.7166 56.8009 12.2594C55.5571 12.7795 54.4603 13.5258 53.5105 14.4982C52.5607 15.4707 51.8144 16.624 51.2717 17.9583C50.7289 19.2925 50.4575 20.7625 50.4575 22.3681C50.4575 23.9737 50.7289 25.4437 51.2717 26.7779C51.8144 28.1122 52.5607 29.2655 53.5105 30.2379C54.4603 31.2104 55.5571 31.968 56.8009 32.5107C58.0673 33.0308 59.4242 33.2909 60.8715 33.2909C62.1379 33.2909 63.3252 33.0987 64.4333 32.7142C65.5414 32.3298 66.5704 31.821 67.5202 31.1878C67.6785 31.0747 67.8481 31.0295 68.029 31.0521C68.2099 31.0747 68.3569 31.1651 68.47 31.3234C68.5831 31.4817 68.6283 31.6514 68.6057 31.8323C68.5831 32.0132 68.4926 32.1602 68.3343 32.2733C67.7916 32.6577 67.1018 33.0308 66.2651 33.3927C65.451 33.7545 64.5803 34.0372 63.6531 34.2407C62.7259 34.4669 61.7987 34.5799 60.8715 34.5799C59.2433 34.5799 57.7168 34.2746 56.2921 33.6641C54.8674 33.0535 53.6123 32.2054 52.5268 31.1199C51.4413 30.0118 50.5819 28.7228 49.9487 27.2528C49.3381 25.7603 49.0328 24.132 49.0328 22.3681C49.0328 20.6042 49.3381 18.9872 49.9487 17.5173C50.5819 16.0247 51.4413 14.7357 52.5268 13.6502C53.6123 12.5421 54.8674 11.6827 56.2921 11.0721C57.7168 10.4615 59.2433 10.1562 60.8715 10.1562C62.251 10.1562 63.574 10.3598 64.8404 10.7668C66.1294 11.1739 67.2827 11.7393 68.3004 12.4629Z"
              className="light-color"
            />
            <rect
              x="78.46"
              y="4.43213"
              width="28.1826"
              height="17.4906"
              rx="2.42299"
              className="light-color"
            />
            <path
              d="M83.785 10.3548H86.5635C86.6896 10.3548 86.7921 10.3982 86.8709 10.4849C86.9576 10.5716 87.001 10.6741 87.001 10.7923C87.001 10.9184 86.9576 11.0248 86.8709 11.1115C86.7921 11.1904 86.6896 11.2298 86.5635 11.2298H83.785C83.6667 11.2298 83.5643 11.1864 83.4775 11.0997C83.3908 11.013 83.3475 10.9066 83.3475 10.7805C83.3475 10.6622 83.3908 10.5637 83.4775 10.4849C83.5643 10.3982 83.6667 10.3548 83.785 10.3548ZM85.0264 8.74682C85.1604 8.74682 85.2708 8.79411 85.3575 8.8887C85.4442 8.9754 85.4875 9.08576 85.4875 9.21976V14.9305C85.4875 15.1197 85.5151 15.2616 85.5703 15.3562C85.6255 15.4508 85.6964 15.5178 85.7831 15.5572C85.8777 15.5887 85.9684 15.6045 86.0551 15.6045C86.1339 15.6045 86.2009 15.5927 86.2561 15.569C86.3191 15.5375 86.3901 15.5217 86.4689 15.5217C86.5477 15.5217 86.6187 15.5611 86.6817 15.64C86.7527 15.7109 86.7881 15.8055 86.7881 15.9237C86.7881 16.0656 86.7054 16.1878 86.5398 16.2902C86.3743 16.3848 86.1891 16.4321 85.9841 16.4321C85.8738 16.4321 85.7358 16.4242 85.5703 16.4085C85.4127 16.3927 85.255 16.3415 85.0974 16.2548C84.9397 16.1681 84.8057 16.0262 84.6954 15.8291C84.5929 15.6242 84.5417 15.3404 84.5417 14.9778V9.21976C84.5417 9.08576 84.589 8.9754 84.6835 8.8887C84.7781 8.79411 84.8924 8.74682 85.0264 8.74682ZM89.2271 15.9474C89.2271 16.0814 89.1798 16.1957 89.0852 16.2902C88.9985 16.3848 88.8882 16.4321 88.7542 16.4321C88.6123 16.4321 88.498 16.3848 88.4113 16.2902C88.3246 16.1957 88.2812 16.0814 88.2812 15.9474V10.6977C88.2812 10.5637 88.3246 10.4533 88.4113 10.3666C88.5059 10.2721 88.6202 10.2248 88.7542 10.2248C88.8882 10.2248 88.9985 10.2721 89.0852 10.3666C89.1798 10.4533 89.2271 10.5637 89.2271 10.6977V15.9474ZM88.7542 9.43258C88.5571 9.43258 88.4113 9.39317 88.3167 9.31435C88.2221 9.23552 88.1748 9.11335 88.1748 8.94782V8.78229C88.1748 8.61676 88.2261 8.49458 88.3285 8.41576C88.431 8.33693 88.5768 8.29752 88.766 8.29752C88.9552 8.29752 89.0971 8.33693 89.1916 8.41576C89.2862 8.49458 89.3335 8.61676 89.3335 8.78229V8.94782C89.3335 9.11335 89.2823 9.23552 89.1798 9.31435C89.0852 9.39317 88.9434 9.43258 88.7542 9.43258ZM93.9412 10.2248C94.4772 10.2248 94.958 10.3588 95.3837 10.6268C95.8093 10.8948 96.1443 11.2652 96.3887 11.7382C96.6409 12.2111 96.767 12.755 96.767 13.3698C96.767 13.9768 96.6409 14.5207 96.3887 15.0015C96.1443 15.4744 95.8093 15.8488 95.3837 16.1247C94.9659 16.3927 94.493 16.5267 93.9649 16.5267C93.6732 16.5267 93.3973 16.4834 93.1372 16.3967C92.885 16.3021 92.6524 16.1838 92.4396 16.042C92.2347 15.8922 92.0613 15.7267 91.9194 15.5454C91.7775 15.3562 91.675 15.1709 91.612 14.9897L91.8721 14.8241V18.3121C91.8721 18.4461 91.8287 18.5604 91.742 18.655C91.6553 18.7495 91.541 18.7968 91.3991 18.7968C91.2651 18.7968 91.1508 18.7495 91.0563 18.655C90.9696 18.5683 90.9262 18.454 90.9262 18.3121V10.7568C90.9262 10.6228 90.9696 10.5125 91.0563 10.4258C91.1508 10.3312 91.2651 10.2839 91.3991 10.2839C91.541 10.2839 91.6553 10.3312 91.742 10.4258C91.8287 10.5125 91.8721 10.6228 91.8721 10.7568V11.8091L91.6947 11.7145C91.7499 11.5175 91.8445 11.3283 91.9785 11.147C92.1204 10.9657 92.2899 10.8081 92.4869 10.6741C92.6919 10.5322 92.9165 10.4218 93.1609 10.343C93.4131 10.2642 93.6732 10.2248 93.9412 10.2248ZM93.8348 11.0997C93.4407 11.0997 93.0899 11.1982 92.7825 11.3953C92.483 11.5924 92.2465 11.8604 92.0731 12.1993C91.9076 12.5382 91.8248 12.9284 91.8248 13.3698C91.8248 13.8034 91.9076 14.1935 92.0731 14.5404C92.2465 14.8872 92.483 15.1591 92.7825 15.3562C93.0899 15.5532 93.4407 15.6518 93.8348 15.6518C94.2289 15.6518 94.5757 15.5532 94.8753 15.3562C95.1748 15.1591 95.4113 14.8872 95.5847 14.5404C95.7581 14.1935 95.8448 13.8034 95.8448 13.3698C95.8448 12.9284 95.7581 12.5382 95.5847 12.1993C95.4113 11.8604 95.1748 11.5924 94.8753 11.3953C94.5757 11.1982 94.2289 11.0997 93.8348 11.0997ZM97.846 15.4626C97.7751 15.3601 97.7436 15.2537 97.7514 15.1434C97.7593 15.0251 97.8263 14.9227 97.9524 14.8359C98.0313 14.7808 98.1219 14.7571 98.2244 14.765C98.3347 14.7729 98.4333 14.8241 98.52 14.9187C98.7407 15.1788 98.9929 15.3877 99.2767 15.5454C99.5604 15.6951 99.9073 15.77 100.317 15.77C100.506 15.7621 100.696 15.7306 100.885 15.6754C101.074 15.6202 101.232 15.5257 101.358 15.3917C101.492 15.2498 101.559 15.0645 101.559 14.8359C101.559 14.6152 101.492 14.4418 101.358 14.3157C101.224 14.1817 101.05 14.0753 100.837 13.9965C100.625 13.9098 100.392 13.8349 100.14 13.7718C99.8797 13.7009 99.6235 13.6221 99.3713 13.5354C99.119 13.4408 98.8904 13.3265 98.6855 13.1925C98.4884 13.0506 98.3269 12.8772 98.2007 12.6722C98.0825 12.4594 98.0234 12.2032 98.0234 11.9037C98.0234 11.549 98.118 11.2416 98.3072 10.9815C98.5042 10.7213 98.7643 10.5203 99.0875 10.3785C99.4186 10.2366 99.7772 10.1656 100.163 10.1656C100.384 10.1656 100.613 10.1932 100.849 10.2484C101.094 10.2957 101.33 10.3824 101.559 10.5085C101.787 10.6268 101.988 10.7923 102.162 11.0051C102.233 11.0839 102.272 11.1825 102.28 11.3007C102.288 11.4189 102.237 11.5254 102.126 11.6199C102.039 11.683 101.941 11.7106 101.831 11.7027C101.728 11.6948 101.641 11.6554 101.57 11.5845C101.405 11.3874 101.196 11.2376 100.944 11.1352C100.699 11.0248 100.428 10.9696 100.128 10.9696C99.9388 10.9696 99.7536 10.9972 99.5723 11.0524C99.391 11.1076 99.2373 11.2022 99.1112 11.3362C98.9929 11.4623 98.9338 11.6396 98.9338 11.8682C98.9417 12.0811 99.0126 12.2545 99.1466 12.3885C99.2806 12.5225 99.4619 12.6328 99.6905 12.7195C99.9191 12.7984 100.171 12.8772 100.447 12.956C100.699 13.0191 100.94 13.0939 101.168 13.1807C101.405 13.2595 101.618 13.3659 101.807 13.4999C101.996 13.6339 102.146 13.8073 102.256 14.0201C102.367 14.2251 102.422 14.4852 102.422 14.8005C102.422 15.1631 102.319 15.4784 102.114 15.7464C101.909 16.0065 101.637 16.2075 101.299 16.3494C100.967 16.4834 100.609 16.5504 100.223 16.5504C99.789 16.5504 99.3594 16.4676 98.9338 16.3021C98.516 16.1365 98.1534 15.8567 97.846 15.4626Z"
              className="dark-color"
            />
            <path
              d="M78.46 18.6299L82.731 21.9228L78.46 26.1938V18.6299Z"
              className="light-color"
            />
          </svg>
        </Link>
        {/* Hamburger menu */}
        <div
          className={`navbar-burger burger ${open ? 'opened' : 'closed'}`}
          data-target="navMenu"
          role="menuitem"
          tabIndex={0}
          onKeyPress={() => toggle}
          onClick={() => toggle}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        id="navMenu"
        className={`${open ? 'opened' : 'closed'}`}
      >
        <Link
          className="navbar-item"
          to="/design"
          activeClassName="active"
          partiallyActive={true}
        >
          Design
        </Link>
        <Link
          className="navbar-item"
          to="/code"
          activeClassName="active"
          partiallyActive={true}
        >
          Code
        </Link>
        <Link
          className="navbar-item"
          to="/inspiration"
          activeClassName="active"
          partiallyActive={true}
        >
          Inspiration
        </Link>
        <Link
          className="navbar-item"
          to="/tools"
          activeClassName="active"
          partiallyActive={true}
        >
          Tools
        </Link>
        <Link
          className="navbar-item"
          to="/podcasts"
          activeClassName="active"
          partiallyActive={true}
        >
          Podcasts
        </Link>
        {/* <Link className="navbar-item" to="/about" activeClassName="active">
            About
          </Link> */}
        {/* <Link className="navbar-item" to="/subscribe" activeClassName="active">
            Subscribe
          </Link>
          <Link className="navbar-item" to="/disclaimer" activeClassName="active">
            Disclaimer
          </Link> */}
        {/* ---
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
          <Link className="navbar-item" to="/contact/examples">
            Form Examples
          </Link> */}
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <button id="menuToggle" onClick={toggle}>Menu</button>
      </div>
      <div className="navbar-col navbar-secondary">
        <a
          className="navbar-item"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <span className="icon">
              <img src={github} alt="Github" />
            </span> */}
          GH
        </a>
        <a
          className="navbar-item"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <span className="icon">
              <img src={github} alt="Github" />
            </span> */}
          IG
        </a>
        <a
          className="navbar-item"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <span className="icon">
              <img src={github} alt="Github" />
            </span> */}
          TW
        </a>
      </div>
    </nav>
  )
  // }
}

export default Navbar
