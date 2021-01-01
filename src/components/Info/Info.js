import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContents} from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} imageMain={infoContents.image} />
    {infoContents.contentInfo}
    {infoContents.contentContact}
    <h2>{infoContents.contentInfoTitle}</h2>
    <p>{infoContents.contentInfoText}</p>
    <h2>{infoContents.contentContactTitle}</h2>
    <p>{infoContents.contentContactText}</p>
    <ul>
      <li>{infoContents.contentContactTel}</li>
      <li>{infoContents.contentContactEmail}</li>
      <li>{infoContents.contentContactCountry}</li>
    </ul>
  </Container>
);

export default Info;