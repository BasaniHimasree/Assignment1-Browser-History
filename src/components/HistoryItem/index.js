import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onClickButton = () => {
    onDelete(id)
  }
  return (
    <li className="item">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button onClick={onClickButton} data-testid="delete" className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
