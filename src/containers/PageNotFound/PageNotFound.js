import React from 'react';

import Rochelle from "../../images/rochelle.gif";
import { Header, ButtonLink, Center } from "../../components";

const PageNotFound = () => (
  <Center>
    <Header>Ops!</Header>
    <div>
      <img src={Rochelle} alt="Rochelle" width="300" />
    </div>
    <ButtonLink to="/">Voltar para o início</ButtonLink>
  </Center>
);

export default PageNotFound;
