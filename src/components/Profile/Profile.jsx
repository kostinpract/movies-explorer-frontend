import "./Profile.css";
import ProfileInput from "../ui-components/ProfileInput/ProfileInput";
import Title from "../ui-components/Title/Title";

function Profile() {
  return (
    <section className="profile-section">
      <div className="profile-section__container">
        <Title extraClass="profile-section__title" content="Привет, Виталий!" />
        <form className="profile-section__form" action="">
          <div className="profile-section__inputs-container">
            {" "}
            <ProfileInput inputTitle="Имя" value="Виталий" />
            <div className="profile-section__dividing-line" />
            <ProfileInput inputTitle="E-mail" value="pochta@yandex.ru" />
          </div>
          <button className="profile-section__submit-button">
            Редактировать
          </button>
        </form>
        <button type="button" className="profile-section__logout-btn">
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
