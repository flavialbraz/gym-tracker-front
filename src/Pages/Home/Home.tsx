
import Typography from '@mui/material/Typography';
import Calendar from '../../components/Calendar/Calendar';
import './home.css';

function Home() {
  return (
    <>
      <div className="home-screen">
      <Typography variant="h4" gutterBottom>
        Bem vindo ao seu tracker fit 😊
      </Typography>
        <Calendar />
      </div>
    </>
  );
}

export default Home;
