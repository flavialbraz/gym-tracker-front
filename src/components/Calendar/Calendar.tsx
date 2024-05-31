import React, { useState, useEffect } from 'react';
import DayOfMonth from './DayOfMonth';
import { Grid, Button } from '@material-ui/core';

const Calendar = () => {
  const [daysOfMonth, setDaysOfMonth] = useState<Date[]>([]);
  const [activeTab, setActiveTab] = useState<'month' | 'week'>('month');
  const [didGo, setDidGo] = useState<boolean[]>(new Array(31).fill(false));

  useEffect(() => {
    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => new Date(currentDate.getFullYear(), currentDate.getMonth(), index + 1));
    setDaysOfMonth(daysArray);
  }, []);

  const toggleTab = () => {
    setActiveTab(activeTab === 'month' ? 'week' : 'month');
  };

  const handleDayClick = (index: number) => {
    const updatedDidGo = [...didGo];
    updatedDidGo[index] = !updatedDidGo[index];
    setDidGo(updatedDidGo);
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <Grid item>
        <Button onClick={toggleTab}>{activeTab === 'month' ? 'Mês' : 'Semana'}</Button>
      </Grid>
      <Grid item container justify="center" spacing={1}>
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
          <Grid key={day} item>
            <div>{day}</div>
          </Grid>
        ))}
      </Grid>
      <Grid item container justify="center" spacing={1}>
        {daysOfMonth.map((day, index) => (
          <Grid key={index} item>
            <DayOfMonth data={day} didGo={didGo[index]} onClick={() => handleDayClick(index)} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Calendar;
