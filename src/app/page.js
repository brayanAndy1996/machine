'use client'

import MainPage from "./pages/MainPage";
import DescriptionPage from "./pages/DescriptionPage";
import WhyPage from "./pages/WhyPage";
import Temario from "./pages/Temario";
import ProfesPage from './pages/Profes'
import TransformaPage from './pages/TransformaPage'
import PreguntasPage from './pages/PreguntasPage'
import UnetePage from './pages/UnetePage'
import EducacionOnlinePage from './pages/EducacionOnline'
import AccesoPage from './pages/Acceso'
import AprendizajePage from './pages/Aprendizaje'
import CertificatePage from './pages/Certificate'
import PromocionesPage from './pages/Promociones'
import LideresPage from './pages/Lideres'
import SoportePage from './pages/Soporte'


export default function Home() {
  
  return (
    <div>
      <MainPage/>
      <DescriptionPage/>
      <WhyPage/>
      <Temario/>
      <EducacionOnlinePage/>
      <AccesoPage/>
      <AprendizajePage/>
      <CertificatePage/>
      <PromocionesPage/>
      <ProfesPage/>
      <TransformaPage/>
      <LideresPage/>
      <PreguntasPage/>
      <SoportePage/>
      <UnetePage/>
    </div>
  );
}

