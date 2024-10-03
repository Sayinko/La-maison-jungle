import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={sun} alt="Luminosité requise" />
    ) : (
      <img src={water} alt="Arrosage requis" />
    ); //PAS COMPRIS
  return (
    <div>
      {range.map((el) =>
        scaleValue >= el ? <span key={el.toString()}>{scaleType}</span> : null
      )}
    </div>
  );
}

export default CareScale;
