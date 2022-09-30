import React from 'react';
import { Container } from './Banner.style';
import { Highlight, LinkButton } from '@components';

export const Banner = () => {
  return (
    <Container>
      <div>
        <h1>
          Doe e <Highlight>ajude pessoas</Highlight> em situação de rua
        </h1>
        <p className="big">
          Nos ajude a levar atendimento médico humanizado pra quem mais precisa.
        </p>
        <h4>Faça parte dessa ação!</h4>
        <LinkButton text="Doe qualquer valor" route="/doacao" />
      </div>
    </Container>
  );
};

export default Banner;
