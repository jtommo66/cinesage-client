import RouletteWheel from "../../components/RouletteWheel/RouletteWheel";
import "./Roulette.scss";

const RoulettePage = () => {
  return (
    <main className="roulette-page">
      <div className="roulette-page__container">
        <RouletteWheel />
      </div>
    </main>
  );
};

export default RoulettePage;
