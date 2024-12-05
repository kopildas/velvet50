import Card_2 from "./Card_2";
import Card_3 from "./Card_3";
import Card_4 from "./Card_4";
import "./PromotionCard.css";
const PromotionCard = () => {
  return (
    <div className="flex gap-3 items-center justify-around px-20 prm_crd">
      <div className="felx flex-col items-start justify-start">
        <p className="card_2_p">Students</p>
        <Card_3 />
      </div>
      <div>
        <p className="card_2_p">Heign Schools & Trade Schools</p>
        <Card_4 />
      </div>
    </div>
  );
};

export default PromotionCard;
