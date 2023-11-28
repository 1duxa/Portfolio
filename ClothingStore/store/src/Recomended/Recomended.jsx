import Buttons from '../components/Buttons'
import './Recomended.css'

const Recomended = ({handleClick}) => {
  return (
    <div className='recomended'>
      <h2 className='recomended-title'>Recomended</h2>
      <div className="recomended-flex">
        
        <Buttons 
        onClickHandler={handleClick}
        value=""
        title="All"
        />
        <Buttons 
        onClickHandler={handleClick}
        value="Nike"
        title="Nike"
        />
        <Buttons 
        onClickHandler={handleClick}
        value="Adidas"
        title="Adidas"
        />
        <Buttons 
        onClickHandler={handleClick}
        value="Puma"
        title="Puma"
        />
        <Buttons 
        onClickHandler={handleClick}
        value="Vans"
        title="Vans"
        />
      </div>
    </div>
  )
}

export default Recomended