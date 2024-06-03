
import Typography from '@mui/material/Typography';
import Calendar from '../../components/Calendar/Calendar';
import './home.css';
import { grey } from '@mui/material/colors';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <div className="home-screen">
      <Typography variant="h4" 
      sx={{
      color: grey[300],
    }}
    gutterBottom>
        Bem vindo ao seu tracker fit 😊
      </Typography>
        <Calendar />

        <Footer />
      </div>
    </>
  );
}

export default Home;
