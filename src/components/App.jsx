//imports dependencias, images, componentes, styles
// import { useEffect, useState } from 'react';
// import callToApi from '../services/api';
// import ls from '../services/localStorage';
// import PropTypes from "prop-types";
import { Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import Landing from './Landing';
import Header from './common/Header';
import Footer from './common/Footer';
import Login from './log/Login';
import Register from './log/Register';
import Profile from './log/Profile';
import BreedInfo from './pets/BreedInfo';
import PetsList from './pets/PetsList';
import Pet from './pets/Pet';
import PetInfo from './pets/PetInfo';
import PetInfoVet from './pets/PetInfoVet';

function App() {
  //states

  //effects

  //handlers from events

  //renders

  //html
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="profile/*" element={<Profile />}></Route>
          <Route path="breedInfo" element={<BreedInfo />}></Route>
          <Route path="petsList" element={<PetsList />} />
          <Route path="pet" element={<Pet />}></Route>
          <Route path="petInfo" element={<PetInfo />}></Route>
          <Route path="petInfoVet" element={<PetInfoVet />}></Route>
        </Routes>
        <Footer />
      </main>
    </>
  );
}
// NombreDeMiComponente.propTypes = {
//   nombreDeMiPropDeTipoStringOpcional: PropTypes.string,
//   nombreDeMiPropDeTipoStringObligatoria: PropTypes.string.isRequired,
// };
export default App;
