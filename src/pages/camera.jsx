
import '../css/camera.css'
import FileUploadComponent from './FileUploadComponent';
import { Block, Navbar, Page, NavRight, Link } from 'framework7-react'
import React, { useState, useEffect, useRef } from 'react';
import { FaBell } from "react-icons/fa";

const Camera = () => {



  return (
    <Page name="camera">
      <Navbar title="NutriSync">
        <NavRight>
          <Link iconIos="f7:bell" iconMd="material:bell" panelOpen="left">
            <FaBell className='bellIcon'/>
          </Link>
        </NavRight>
      </Navbar>

        <div className='Cam'>
            <Block>
              <p>Upload the food photo here: </p>
            </Block>
            <Block>
                <FileUploadComponent />
            </Block>
        </div>
      
    </Page>
  );
};






export default Camera