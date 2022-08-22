interface IPageProps {
  theme: string
}
const Home = ({ theme }: IPageProps): JSX.Element => {
  // ? the theme only used for revert color in images
  console.log({ theme })
  return (
    <div>
      <p className={''}>Home</p>
    </div>
  )
}

export default Home
