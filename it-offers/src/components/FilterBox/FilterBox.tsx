import React from "react";
import style from "./FilterBox.module.css";
import FilterItem from "./FilterItem/FilterItem";
import {AiFillHtml5} from "react-icons/ai";
import {DiDotnet, DiJava, DiJsBadge, DiPhp, DiPython, DiRuby, DiScala,} from "react-icons/di";
import {FaMobileAlt} from "react-icons/fa";
import {GoSearch} from "react-icons/go";
import {GiCheckedShield, GiOrbWand, GiVrHeadset} from "react-icons/gi";
import {MdVideogameAsset} from "react-icons/md";
import {IoLogoBitcoin} from "react-icons/io";
import {NavLink, useLocation} from "react-router-dom";
import {fetchOffersByTech,} from "../../slices/offer/offerSlice";
import {useDispatch} from "react-redux";
import {clearOffer} from "../../slices/oneOfferSlice/oneOfferSlice";

interface IconObject {
  icon: any;
  lang: string;
}

export const icons: Array<IconObject> = [
  { icon: "ALL", lang: "all" },
  {
    icon: (
      <svg width="20" height="22">
        <path
          fillRule="evenodd"
          d="M21.0040237,12.3608928 L20.2821902,12.3608928 L20.2821902,13.0827263 L19.5603566,13.0827263 L19.5603566,12.3608928 L18.8385231,12.3608928 L18.8385231,11.6390593 L19.5603566,11.6390593 L19.5603566,10.9172258 L20.2821902,10.9172258 L20.2821902,11.6390593 L21.0040237,11.6390593 L21.0040237,12.3608928 Z M18.2891631,12.3608928 L17.5673296,12.3608928 L17.5673296,13.0827263 L16.8454961,13.0827263 L16.8454961,12.3608928 L16.1172747,12.3608928 L16.1172747,11.6390593 L16.8391082,11.6390593 L16.8391082,10.9172258 L17.5609417,10.9172258 L17.5609417,11.6390593 L18.2891631,11.6390593 L18.2891631,12.3608928 Z M11.7734979,18.5188353 C8.18349408,18.5188353 5.25783263,15.5932377 5.25783263,12.00317 C5.25783263,8.4131662 8.18349408,5.48750475 11.7734979,5.48750475 C14.0923082,5.48750475 16.2514208,6.73314663 17.4140199,8.74533737 L14.5969528,10.3742537 C14.0156533,9.37135227 12.936097,8.74533737 11.7734979,8.74533737 C9.97849598,8.74533737 8.51566525,10.2081681 8.51566525,12.00317 C8.51566525,13.7981719 9.97849598,15.2610026 11.7734979,15.2610026 C12.936097,15.2610026 14.0156533,14.6350516 14.5969528,13.6320863 L17.4140199,15.2610026 C16.2514208,17.2668055 14.0923082,18.5188353 11.7734979,18.5188353 L11.7734979,18.5188353 Z M21.3042553,6.50956988 L21.3042553,6.50956988 C21.1509455,6.24127778 20.9337567,5.99853731 20.703792,5.86439127 L12.6230895,1.20121907 C12.1567723,0.932926975 11.3966114,0.932926975 10.9302941,1.20121907 L2.84959165,5.86439127 C2.38327443,6.13907127 2,6.7970257 2,7.3336099 L2,16.6663422 C2,16.9346982 2.09581861,17.2348659 2.24912838,17.503158 C2.40243815,17.7714501 2.61323908,18.0014148 2.84959165,18.1355608 L10.9302941,22.798733 C11.3966114,23.067089 12.1567723,23.067089 12.6230895,22.798733 L20.703792,18.1355608 C20.9337567,18.0014148 21.1509455,17.7714501 21.3042553,17.503158 C21.4575651,17.2348659 21.5533837,16.9410222 21.5533837,16.6663422 L21.5533837,7.3336099 C21.5469958,7.07170571 21.4511772,6.77786198 21.3042553,6.50956988 L21.3042553,6.50956988 Z"
          transform="translate(-2 -1)"
        ></path>
      </svg>
    ),
    lang: "cpp",
  },
  {
    icon: (
      <svg width="20" height="15">
        <path
          fillRule="evenodd"
          d="M16.2879401,6.96099622 L16.2879401,5.41518856 C16.2879401,5.04615186 15.8413642,4.86121886 15.580136,5.12203244 L12.8492644,7.85290402 C12.687137,8.01503138 12.687137,8.27750356 12.8492644,8.43921627 L15.580136,11.1700879 C15.8413642,11.4313161 16.2879401,11.2463831 16.2879401,10.8769317 L16.2879401,9.3356852 C18.0161928,9.3564176 19.4156298,10.76705 19.4156298,12.4998639 C19.4156298,14.2459466 17.9950458,15.6665305 16.2489631,15.6665305 C14.5028805,15.6665305 13.0827112,14.2459466 13.0827112,12.4998639 C13.0827112,9.44432297 10.5968965,6.95892298 7.54135559,6.95892298 C4.48622928,6.95892298 2,9.44432297 2,12.4998639 C2,15.5338432 4.45139885,18.0026572 7.4766705,18.0379023 L7.4766705,19.5845393 C7.4766705,19.9539906 7.92324638,20.1389236 8.1844746,19.8776954 L10.9153462,17.1468238 C11.0774735,16.9851111 11.0774735,16.7226389 10.9153462,16.5605116 L8.1844746,13.82964 C7.92324638,13.5688264 7.4766705,13.7537594 7.4766705,14.1227961 L7.4766705,15.6632134 C5.76085717,15.6283829 4.37510362,14.2243849 4.37510362,12.4998639 C4.37510362,10.7537813 5.79527295,9.33361196 7.54135559,9.33361196 C9.28743823,9.33361196 10.7076076,10.7537813 10.7076076,12.4998639 C10.7076076,15.5558195 13.1938368,18.0412195 16.2489631,18.0412195 C19.3040894,18.0412195 21.7903187,15.5558195 21.7903187,12.4998639 C21.7903187,9.4575917 19.3252365,6.98214327 16.2879401,6.96099622"
          transform="translate(-2 -5)"
        ></path>
      </svg>
    ),
    lang: "dev",
  },
  { icon: <DiJsBadge size={25} />, lang: "javascript" },
  { icon: <AiFillHtml5 size={25} />, lang: "html" },
  { icon: <DiPhp size={45} />, lang: "php" },
  { icon: <DiRuby size={25} />, lang: "ruby" },
  { icon: <DiPython size={30} />, lang: "python" },
  { icon: <DiJava size={35} />, lang: "java" },
  { icon: <DiDotnet size={40} />, lang: "net" },
  { icon: <DiScala size={40} />, lang: "scala" },
  { icon: <FaMobileAlt size={30} />, lang: "mobile" },
  { icon: <GoSearch size={25} />, lang: "testing" },
  { icon: <GiOrbWand size={30} />, lang: "UX" },
  { icon: <GiVrHeadset size={30} />, lang: "PM" },
  { icon: <MdVideogameAsset size={30} />, lang: "game" },
  { icon: <IoLogoBitcoin size={30} />, lang: "bitchain" },
  { icon: <GiCheckedShield size={30} />, lang: "security" },
];

const FilterBox: React.FC = () => {
  const dispatch = useDispatch();

  let location = useLocation();
  let curPath = location.pathname.substr(1);

  if (location.pathname === "/") {
    curPath = "all";
  }

  if (curPath.length > 5 && curPath.substr(0, 5) === "offer") {
    console.log("nie pobieram ofert");
  } else {
    try {
      console.log("Fetchuje oferty i czyszcze offer");
      dispatch(clearOffer());
      dispatch(fetchOffersByTech(curPath));

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main className={style.Content}>
      {icons.map((icon: IconObject) => {
        return (
          <NavLink
            isActive={(_, { pathname }) =>
              [`/${icon.lang}`, "/all", "/"].includes(pathname)
            }
            activeClassName={style[icon.lang]}
            key={`icon${icon.lang}`}
            to={`/${icon.lang}`}
          >
            <FilterItem language={`${icon.lang}`}>
              <div
                className={style.insideIcon}
                onClick={() => { dispatch(clearOffer)}}
              >
                {icon.icon}
              </div>
            </FilterItem>
          </NavLink>
        );
      })}
    </main>
  );
};

export default FilterBox;
