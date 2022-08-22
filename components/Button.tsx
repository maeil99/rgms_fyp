/* eslint-disable react/require-default-props */
interface IButtonProps {
  btnName: string
  classStyles?: string
  handleClick?: () => void
}

const Button = ({ btnName, classStyles = '', handleClick }: IButtonProps): JSX.Element => (
  <button
    type="button"
    className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
)

export default Button
