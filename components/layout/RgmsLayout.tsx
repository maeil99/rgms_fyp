/* eslint-disable import/no-unresolved */
import React from 'react'
import Footer from '../navigation/Footer'
import Navbar from '../navigation/Navbar'

interface IPageProps {
  children: React.ReactNode
}

const RGMSLayout = ({ children }: IPageProps): JSX.Element => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default RGMSLayout
