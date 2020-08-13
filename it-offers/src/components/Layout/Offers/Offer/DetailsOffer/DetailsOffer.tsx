import React, {useEffect} from "react";
import {useHistory, useParams} from "react-router";
import style from "./DetailsOffer.module.css";
import {MdPeople, MdShowChart, MdTimelapse} from "react-icons/md";
import {AiFillFile} from "react-icons/ai";
import imageNO from "../../../../../assets/no-offer.f50329e6.png"
import {useDispatch, useSelector} from "react-redux";
import Technologies from "./Technologies/Technologies";
import Spinner from "../../../../Spinner/Spinner";
import SmallBoxes, {SmallBoxesProps} from "./SmallBoxes/SmallBoxes";
import {findById, OfType, selectOffer,} from "../../../../../slices/oneOfferSlice/oneOfferSlice";

interface SmallBoxes extends SmallBoxesProps {}

const DetailsOffer: React.FC = () => {
  let isLoading = true;
  let noOffer = false;
  const dispatch = useDispatch();
  let { offerID } = useParams();
  useEffect(() => {
    dispatch(findById(offerID));
    console.log("dispatch offer");

  }, [dispatch, offerID]);

  let offer: OfType;
  offer = useSelector(selectOffer);
  isLoading = offer.isLoading;


  const hist = useHistory();
  const back = () => {
    hist.goBack();
  };

  const lvlExp: any | string = {
    1: "Junior",
    2: "Mid",
    3: "Senior",
  };


  /*    return (
      <div className={style.noPath}>
        <img
          src={imageNO}
          alt="Sorry, we couldn't find this offer."
          className={style.imageNO}
        ></img>
        <div>Sorry, we couldn't find this offer</div>
        <div onClick={back} className={style.back}>
          Go Back
        </div>
      </div>
    );
  } */
  const smallBoxes: Array<SmallBoxes> = [
    {
      icon: <MdPeople color={"rgb(251, 140, 0)"} />,
      titleFromOffer: `${offer.companySize}`,
      title: "Company size",
    },
    {
      icon: <AiFillFile color={"rgb(171, 71, 188)"} />,
      titleFromOffer: `${offer.employmentType}`,
      title: "EMP. type",
    },
    {
      icon: <MdShowChart color={"rgb(55, 71, 79)"} />,
      titleFromOffer: `${lvlExp[`${offer.experienceLevel}`]}`,
      title: "EXP. lvl",
    },
    {
      icon: <MdTimelapse color={"rgb(68, 138, 255)"} />,
      titleFromOffer: "New",
      title: "Added",
    },
  ];

  if (isLoading) {
    return (
        <main className={style.Content}>
          <Spinner/>
        </main>
    );
  }
  else if (!isLoading && noOffer) {
    return (
        <div className={style.noPath}>
          <img
              src={imageNO}
              alt="Sorry, we couldn't find this offer."
              className={style.imageNO}
          ></img>
          <div>Sorry, we couldn't find this offer</div>
          <div onClick={back} className={style.back}>
            Go Back
          </div>
        </div>
    );
  } else {
    return (
      <main className={style.Content}>
        <div className={style.headOffer}>
          <div className={style[`${offer.mainTechnology}`]}>
            <div className={style.headerContent}>
              <div className={style.logo}>
                <div className={style.logoInside}>LOGO</div>
              </div>
              <div className={style.title}>
                <div className={style.subtitle1}>
                  {offer.salaryFrom} - {offer.salaryTo} {offer.currency}{" "}
                  net/month
                </div>
                <div className={style.subtitle2}>{offer.title}</div>
                <div className={style.subtitle1}>
                  {offer.street} {offer.city}
                </div>
              </div>
            </div>
            <div className={style.boxes}>
              {smallBoxes.map((box, index) => (
                <SmallBoxes
                  key={index}
                  icon={box.icon}
                  title={box.title}
                  titleFromOffer={box.titleFromOffer}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={style.offerDetail}>
          <div className={style.section}>
            <div className={style.descriptionTitle}>Tech stack</div>
            <div className={style.technologies}>
              {offer.technology.map((t) => (
                <Technologies
                  key={`${t._id}`}
                  tech={`${t.tech}`}
                  level={t.level as number}
                />
              ))}
            </div>
          </div>

          <div className={style.section}>
            <div className={style.descriptionTitle}>Description</div>
            <div className={style.description}>{offer.jobDescription}</div>
          </div>
        </div>
      </main>
    );
  }
};

export default DetailsOffer;
