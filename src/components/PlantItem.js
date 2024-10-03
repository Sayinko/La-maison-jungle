import "../styles/PlantItem.css";
import CareScale from "./CareScale";

function PlantItem({ id, cover, name, water, light }) {
  return (
    <div key={id} className="lmj-plant-item" onClick={handleClick}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="light" scaleValue={light} />
        <CareScale careType="water" scaleValue={water} />
      </div>
    </div>
  );
}

function handleClick(e) {
  console.log(`Ceci est mon event : `, e);
}

export default PlantItem;
