export default function Card(props) {
  return (
    props.cards.map((card) => {
      return (
      <li className="element" key = {card._id}>
        <button type="button" className="element__delete-button"></button>
        <img className="element__image" src = {card.link} alt = {card.name} onClick = {() => {
          props.onCardClick({
          openCard: card,
          isOpen: true
          })
        }} />
        <div className="element__info">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like">
            <button className="element__like-button" type="button"></button>
            <p className="element__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </li>
      )
    })
  )
}
