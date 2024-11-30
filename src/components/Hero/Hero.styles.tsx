import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }
`;

export const HeroForm = styled.form`
  height: 360px;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`;

export const HeroContent = styled.div`
  position: relative;
  color: #eee;
`;

export const HeroTitle = styled.h2`
  font-family: 'Gloock', serif;
  font-size: 48px;
`;

export const MediaQueries = styled.media`
  @media (max-width: 768px) {
    ${FormContainer} {
      height: auto;
      padding: 24px 0;
    }

    ${HeroTitle} {
      font-size: 32px;
    }
  }
`;
