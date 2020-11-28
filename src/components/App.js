import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Card from "./Card";
import {api} from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, openEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, openAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, openEditAvatar] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCardsArray] = React.useState([]);
  const [selectedCard, handleCardClick] = React.useState({
    openCard: {},
    isOpen: false
  })

  const closeAllPopups = () => {
    openEditProfile(false);
    openAddPlace(false);
    openEditAvatar(false);
    handleCardClick({
      openCard: {},
      isOpen: false
    });
  }

  React.useEffect(() => {
    api.getInitialCards()
    .then((cards) => setCardsArray(cards))
    .catch((err) => console.log(err))
  }, []);

  React.useEffect(() => {
    api.getUserInfo()
    .then((userInfo) => {
      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      setUserAvatar(userInfo.avatar);
    })
    .catch((err) => console.log(err))
  }, []);

  return (
  <>
  <div className="page">
    <Header />
    <Main onEditProfile = {openEditProfile} onAddPlace = {openAddPlace} onEditAvatar = {openEditAvatar}
    profileName = {userName} profileDescription = {userDescription} userAvatar = {userAvatar}
    cardList = {cards.map((card) => <Card card = {card} onCardClick = {handleCardClick} />)} />
    <Footer />
  </div>
  <PopupWithForm name = "popup_edit" title = "Редактировать профиль" isOpen = {isEditProfilePopupOpen}
  onClose = {closeAllPopups} buttonText = "Сохранить">
        <input id="input-name" type="text" placeholder="Введите Ваше имя" className="popup__input popup__input_name"
        name="name" minLength={2} maxLength={40} required />
        <span id="input-name-error" className="popup__input_error"></span>
        <input id="input-job" type="text" placeholder="Введите Вашу профессию" className="popup__input popup__input_job"
        name="job"minLength={2} maxLength={200} required />
        <span id="input-job-error" className="popup__input_error"></span>
  </PopupWithForm>
  <PopupWithForm name = "popup_add-card" title = "Новое место" isOpen = {isAddPlacePopupOpen}
  onClose = {closeAllPopups} buttonText = "Создать">
        <input id="input-title" type="text" placeholder="Название" className="popup__input popup__input_title"
        name="name" minLength={2} maxLength={30} required />
        <span id="input-title-error" className="popup__input_error"></span>
        <input id="input-src" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_src"
        name="link" required />
        <span id="input-src-error" className="popup__input_error"></span>
  </PopupWithForm>
  <PopupWithForm name = "popup_delete-card" title = "Вы уверены?" onClose = {closeAllPopups} buttonText = "Да" />
  <PopupWithForm name = "popup__edit-avatar" title = "Обновить аватар" isOpen = {isEditAvatarPopupOpen}
  onClose = {closeAllPopups} buttonText = "Сохранить">
        <input id="input-src" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_src"
        name="link" required />
        <span id="input-src-error" className="popup__input_error"></span>
  </PopupWithForm>
  <ImagePopup card = {selectedCard} onClose = {closeAllPopups} />
  </>
  );
}

export default App;
