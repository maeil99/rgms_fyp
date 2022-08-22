import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Home from '../components/views/home'

const HomePage: NextPage = () => {
  const { theme } = useTheme()
  return <Home theme={theme !== undefined ? theme : 'light'} />
}

export default HomePage
