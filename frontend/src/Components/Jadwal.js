
import Formulir from './Formulir';

function Jadwal() {
    const Jadwal= {
      color: "white",
      padding: "60px",
    };

    return (
   <>
   <h1 style={Jadwal}>Lihat jadwal bus keberangkatan/tiba anda disini</h1>
    <Formulir/>
    </>
    );

  }


  export default Jadwal;
