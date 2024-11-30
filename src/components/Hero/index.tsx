import React from 'react';
import {
  FormContainer,
  HeroForm,
  HeroContent,
  HeroTitle,
  MediaQueries
} from './Hero.styles';

const Hero = () => (
  <MediaQueries>
    <FormContainer>
      <HeroForm>
        <HeroContent>
          <HeroTitle>
            As melhores vagas para tecnologia, design e artes visuais.
          </HeroTitle>
        </HeroContent>
      </HeroForm>
    </FormContainer>
  </MediaQueries>
);

export default Hero;
