import "../Hero/Hero.css";
const Number_box = ({ number, text }) => {
  return (
    <div className="flex flex-col  img_box">
      <p className="number_box_number ">{number}</p>
      <p className="numebr_box_text">{text}</p>
    </div>
  );
};

export default Number_box;
