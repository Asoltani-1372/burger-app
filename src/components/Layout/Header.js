import {Fragment} from 'react'

import mealsimage from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = props => {
  return 
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>cart</button>
            </header>
            <div classname={['main-image']}>
                <img src={mealsimage}/>
            </div>

        </Fragment>
}

export default Header