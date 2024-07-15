import {useState} from 'react'
import {MainCont, Image, Text, Btn} from './styledComponents'

const Unlock = () => {
  const [isLocked, toggleLock] = useState(true)
  const onClickBtn = () => {
    toggleLock(prevState => !prevState)
  }
  return (
    <MainCont>
      {isLocked ? (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      <Text>
        {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Text>
      {isLocked ? (
        <Btn onClick={onClickBtn} isLocked>
          Unlock
        </Btn>
      ) : (
        <Btn onClick={onClickBtn}>Lock</Btn>
      )}
    </MainCont>
  )
}

export default Unlock
