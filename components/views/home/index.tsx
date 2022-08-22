import React from 'react';

interface IPageProps {
  theme: string;
}
const Home = ({ theme }: IPageProps) => {
  // ? the theme only used for revert color in images
  console.log({ theme });
  return (
    <div>
      <p className={theme}>Home</p>
    </div>
  );
};

export default Home;
