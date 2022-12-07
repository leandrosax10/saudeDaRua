import { Layout } from '@components';
import {
  Donation,
  Home,
  Medicines,
  SignUp,
  SignUpSuccess,
  Volunteers,
  PrivacyPolicy,
  SignUpFail,
} from '@pages';
import { Route, Routes } from 'react-router-dom';
import { Scroll } from '../components/Scroll';

const AppRoutes = () => (
  <Scroll>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="doacao" element={<Donation />} />
        <Route path="seja-voluntario" element={<Volunteers />} />
        <Route path="doe-medicamentos" element={<Medicines />} />
        <Route path="inscreva-se" element={<SignUp />} />
        <Route path="inscreva-se/sucesso" element={<SignUpSuccess />} />
        <Route path="politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="inscreva-se/falha" element={<SignUpFail />} />
      </Route>
    </Routes>
  </Scroll>
);

export default AppRoutes;
