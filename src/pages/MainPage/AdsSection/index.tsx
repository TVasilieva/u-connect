import "./style.scss";

const AdsSection = () => {
  return (
    <div className="ads__wrapper">
      <div className="ads">
        <img src={require("../../../assets/ads/computer.png")} alt="ads" />
        <p>
          У вас включён блокировщик рекламы. Будет здорово, если вы добавите
          vc.ru в исключения или купите plus-аккаунт — это поможет нам в
          развитии.
        </p>
        <button className="ads__button">Купить за 75 ₽ в месяц</button>
      </div>
    </div>
  );
};

export default AdsSection;
