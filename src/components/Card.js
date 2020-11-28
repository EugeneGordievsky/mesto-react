export default function Card(props) {
  return (
    <li className="element">
      <button type="button" className="element__delete-button"></button>
      <img className="element__image" src = {props.card.link} alt = {props.card.name} onClick = {() => {
        props.onCardClick({
        openCard: props.card,
        isOpen: true
        })
      }} />
      <div className="element__info">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like">
          <button className="element__like-button" type="button"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}
