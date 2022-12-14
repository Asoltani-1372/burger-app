import {Fragment} from 'react'

import mealsimage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsimage} alt="a tavle full of delicious food!"/>
            </div>

        </Fragment>
    )    
}

export default Header