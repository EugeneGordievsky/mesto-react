export default function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" alt="Аватар профиля" src = {props.userAvatar} />
        <button className="profile__avatar-button" type="button" onClick = {() => props.onEditAvatar(true)}></button>
        <div className="profile__info">
          <h1 className="profile__name">{props.profileName}</h1>
          <button className="profile__edit-button" type="button" onClick = {() => props.onEditProfile(true)}></button>
          <p className="profile__job">{props.profileDescription}</p>
        </div>
        <button className="add-button" type="button" onClick = {() => props.onAddPlace(true)}></button>
      </section>
      <section className="cards">
        <ul className ="elements">
          {props.cardList}
        </ul>
      </section>
    </main>
  )
}
