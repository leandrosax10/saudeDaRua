import { ButtonPartners, PhotoPartners } from './components';
import { PartnersText, SpanColor, ContainerPartners } from './Partners.style';

///** TODO:
// - refatorar function para function component ok
// - mesma utilização errada do styled-component aqui, um p dentro de outro p
// - renomear o component DIV PARTNERS ok

const Partners = () => {
  return (
    <ContainerPartners>
      <PartnersText>
        Empresas que nos <SpanColor>apoiam</SpanColor>
      </PartnersText>

      <PhotoPartners />

      <ButtonPartners />
    </ContainerPartners>
  );
};

export default Partners;
