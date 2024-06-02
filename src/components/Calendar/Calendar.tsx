// src/components/Calendar.tsx
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Box, Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { green, grey } from '@mui/material/colors';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavigateBefore } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const gymData = [
  { date: '2024-08-01', attended: true },
  { date: '2024-08-03', attended: true },
  { date: '2024-08-05', attended: true },
  { date: '2024-08-08', attended: true },
  // ... mais dados
];

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Dayjs | null>(null);
  const [data, setData] = useState(gymData);

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

  const handleMarkAsAttended = () => {
    if (selectedDay) {
      const newData = [...data];
      const dateStr = selectedDay.format('YYYY-MM-DD');
      const existingEntry = newData.find(entry => entry.date === dateStr);

      if (existingEntry) {
        existingEntry.attended = true;
      } else {
        newData.push({ date: dateStr, attended: true });
      }

      setData(newData);
    }

    setOpen(false);
  };

  const start = selectedDate.startOf('month');
  const end = selectedDate.endOf('month');
  const days = [];
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
