import React, { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import axios from 'axios';
import { Box, Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { green, grey } from '@mui/material/colors';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavigateBefore } from '@mui/icons-material';

interface AttendanceData {
  date: string;
  attended: boolean;
}

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Dayjs | null>(null);
  const [data, setData] = useState<AttendanceData[]>([]); // Estado para armazenar os dados do backend
  const apiUrl = 'https://full-tracker-back.vercel.app/api/attendance';

  useEffect(() => {
    fetchGymData();
  }, []);

  const fetchGymData = async () => {
    try {
      const response = await axios.get<AttendanceData[]>(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados da academia:', error);
    }
  };

  const handlePrevMonth = () => {
    setSelectedDate(selectedDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setSelectedDate(selectedDate.add(1, 'month'));
  };

  const handleDateClick = (date: Dayjs) => {
    setSelectedDay(date);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMarkAsAttended = async () => {
    if (selectedDay) {
      const dateStr = selectedDay.format('YYYY-MM-DD');
      try {
        await axios.put(`${apiUrl}/${dateStr}`, { attended: true });
        fetchGymData(); // Atualizar os dados após a marcação
      } catch (error) {
        console.error('Erro ao marcar treino:', error);
      }
    }
    setOpen(false);
  };

  const start = selectedDate.startOf('month');
  const end = selectedDate.endOf('month');
  const days: Dayjs[] = [];
  for (let day = start; day.isBefore(end) || day.isSame(end, 'day'); day = day.add(1, 'day')) {
    days.push(day);
  }

  const renderDay = (date: Dayjs) => {
    const isAttended = data.some(d => dayjs(d.date).isSame(date, 'day'));
    return (
      <Box
        key={date.format('YYYY-MM-DD')}
        onClick={() => handleDateClick(date)}
        sx={{
          width: 50,
          height: 50,
          margin: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isAttended ? green[400] : 'grey.900',
          color: isAttended ? 'white' : 'grey.600',
          borderRadius: '10%',
          fontSize: isAttended ? 14 : 10,
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        {date.format('D')}
      </Box>
    );
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button onClick={handlePrevMonth} sx={{ color: grey[300] }}>
          <NavigateBefore />
        </Button>
        <Typography variant="h5" sx={{ 
          fontWeight: 'bold',
          paddingBottom: 1,
          fontSize: 18,
          color: grey[400]}} gutterBottom>
          {selectedDate.format('MMMM YYYY')}
        </Typography>
        <Button onClick={handleNextMonth} sx={{ color: grey[300] }}>
          <NavigateNextIcon />
        </Button>
      </Box>
      <Grid container justifyContent="center">
        {days.map(renderDay)}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Concluir dia</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja marcar o treino de {selectedDay ? selectedDay.format('DD/MM/YYYY') : ''} como concluído?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: grey[500] }}>
            Cancelar
          </Button>
          <Button onClick={handleMarkAsAttended} sx={{ color: green[400] }}>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;
