// Write your code here.
import './index.css'

const CardList = props => {
  const {bannerList} = props
  const {heading, paragraph, className} = bannerList

  return (
    <li className={'${className} banner-card-item'}>
      <div>
        <h1 className="heading"> {heading} </h1>
        <p className="paragraph"> {paragraph} </p>
        <button className="showbutton" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default CardList
