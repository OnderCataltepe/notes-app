import Grid from '@mui/material/Grid';
import Note from './Note';
import { useTheme } from '@mui/material/styles';
import { useAppSelector } from '../../store/hooks/reduxHooks';
import { useEffect, useState } from 'react';
import type { NoteData } from '../../store/reducers/noteSlice';

const NoteContainer = (): JSX.Element => {
  const values = useAppSelector((state) => state.note.values);
  const [noteList, setNoteList] = useState<NoteData[]>([]);
  const theme = useTheme();

  useEffect(() => {
    setNoteList(values);
  }, [values]);

  return (
    <Grid
      container
      spacing={2}
      sx={{ p: 2, backgroundColor: `${theme.palette.common.bg5}`, minHeight: '100vh' }}>
      {noteList.length > 0 &&
        noteList.map((item, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Note item={item} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default NoteContainer;
