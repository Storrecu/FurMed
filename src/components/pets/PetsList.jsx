import Pet from './Pet';
import '../../styles/layout/PetList.scss';

const PetsList = () => {
  return (
    <>
      <section className="section-pets">
        <h4 className="section-pets-title">Tus mascotas</h4>
        <Pet />
      </section>
    </>
  );
};

export default PetsList;
