import "../PromotionCard/Card_3.css";
import Tik_mark_svg from "./Tik_mark_svg";

const Card_3 = () => {
  return (
    <div className="card_3_box rounded-[40px] bg-red-00 relative card_3_img_box">
      <div className="absolute mb-8 ml-8  bottom-0 left-0 bg-red-00 flex flex-col items-start justify-center w-auto gap-2">
        <p className="std_reg_txt">
          Student Register <br />
          here
        </p>
        <div className=" prv_sm_bx_1 flex gap-2">
          <Tik_mark_svg /> <p className="prb_txt_p">Affordable monthly plans</p>
        </div>
        <div className=" prv_sm_bx_1 flex gap-2">
          <Tik_mark_svg />
          <p className="prb_txt_p">Earn While in School</p>
        </div>
        <div className=" prv_sm_bx_1 flex gap-2">
          <Tik_mark_svg />
          <p className="prb_txt_p">Free Marketing and Promotion</p>
        </div>
        <div className=" prv_sm_bx_2 mt-10 mb-5 gap-2 border-[2px] border-[#FFFFFF] flex items-center justify-center">
          <p className="prb_txt_p_2">Register Now</p>
        </div>
      </div>
    </div>
  );
};

export default Card_3;
