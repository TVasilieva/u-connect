import { profileName } from "../../utils/profileName";
import "./style.scss";

const ProfileIcon = () => {
  const image = "";
  const name = "Tonya Vasilieva";
  const style = {
    backgroundColor: image ? "#FFF" : "pink",
  };

  return (
    <div className="profile-icon" style={style}>
      {image ? (
        <img src={require("../../assets/logo.png")} alt="Tonya" />
      ) : (
        <p>{profileName(name)}</p>
      )}
    </div>
  );
};

export default ProfileIcon;
