
import Calendar from '../../components/Calendar/Calendar';
import './home.css';

function Home() {
  return (
    <>
      <div className="home-screen">
        <h1>Bem-vindo ao seu tracker</h1>
        <Calendar />
      </div>
    </>
  );
}

export default Home;
