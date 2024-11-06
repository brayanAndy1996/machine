'use client'

import MainPage from "./pages/MainPage";
import DescriptionPage from "./pages/DescriptionPage";
import WhyPage from "./pages/WhyPage";
import Temario from "./pages/Temario";
import ProfesPage from './pages/Profes'
import TransformaPage from './pages/TransformaPage'
import PreguntasPage from './pages/PreguntasPage'
import UnetePage from './pages/UnetePage'


export default function Home() {
  return (
    <div>
      <MainPage/>
      <DescriptionPage/>
      <WhyPage/>
      <Temario/>
      <ProfesPage/>
      <TransformaPage/>
      <PreguntasPage/>
      <UnetePage/>
    </div>
  );
}
