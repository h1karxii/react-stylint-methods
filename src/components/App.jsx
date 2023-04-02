import { useState } from 'react'
import classNames from 'classnames/bind'
import { ReactComponent as Logo } from 'assets/logo.svg'
import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  const [isClockwise, setIsClockwise] = useState(true)

  return (
    <div className={cx('app')}>
      <Logo
        className={cx('app__logo', {
          'app__logo--clockwise': isClockwise,
          'app__logo--counterclockwise': !isClockwise,
        })}
        alt="logo"
      />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button
        type="button"
        className={cx('app__button')}
        onClick={() => {
          setIsClockwise(!isClockwise)
        }}
      >
        Turn around
      </button>
    </div>
  )
}

export default App
