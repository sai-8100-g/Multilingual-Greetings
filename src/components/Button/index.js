import {Li, LiButton} from './style'

const Button = props => {
  const {data, changeLanguage, isAcitve} = props
  const {buttonText, id} = data
  console.log(isAcitve)
  const onClickToLanguage = () => {
    changeLanguage(id)
  }
  return (
    <Li>
      <LiButton active={isAcitve} type="button" onClick={onClickToLanguage}>
        {buttonText}
      </LiButton>
    </Li>
  )
}

export default Button
