import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContents} from '../../data/dataStore';


const FAQ = () => (
  <Container>
    <Hero titleText={faqContents.title} imageMain={faqContents.image} />
    <h2>{faqContents.questionTitle1}</h2>
    <p>{faqContents.questionContent1}</p>
    <h2>{faqContents.questionTitle2}</h2>
    <p>{faqContents.questionContent2}</p>
    <h2>{faqContents.questionTitle3}</h2>
    <p>{faqContents.questionContent3}</p>
  </Container>
);

export default FAQ;
