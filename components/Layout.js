import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useUser } from '@auth0/nextjs-auth0/client';
import { setSession, clearSession } from 'utils/session';
import { MoonLoader } from 'react-spinners';
import { css } from '@emotion/react';


const Layout = ({ children }) => {
  const { user, error, isLoading } = useUser();


  //LOADER STYLE
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen flex-col ">
        <MoonLoader color={'#1E2E2D'} loading={isLoading} css={override} size={50} />
        <div>Loading...</div>
      </div>
    );
  }



  if (error) return <div>{error.message}</div>;

  if (user) {

    //setSession(user);

    return (
      <>
       {/* <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }} > */}
        <Navigation sessionId={setSession(user)} />
        {children}
        <Footer />
       {/* </div> */}
      </>
    );
  }

  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );

};

export default Layout;