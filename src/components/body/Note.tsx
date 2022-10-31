import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect, useRef } from 'react';
import { updateNote } from '../../store/reducers/noteSlice';
import type { NoteData } from '../../store/reducers/noteSlice';
import { useAppDispatch } from '../../store/hooks/reduxHooks';
import DeleteConfirm from '../modals/DeleteConfirm';

interface NProps {
  item: NoteData;
}

const Note = ({ item }: NProps): JSX.Element => {
  const bodyInputRef = useRef<HTMLInputElement>(null);
  const [updateToggle, setUpdateToggle] = useState<boolean>(false);
  const [deleteToggle, setDeleteToggle] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>('');
  const [bodyValue, setBodyValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const updateHandler = (): void => {
    setUpdateToggle(!updateToggle);
  };

  const deleteHandler = (): void => {
    setDeleteToggle(() => true);
  };

  const titleUpdate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitleValue(() => event.target.value);
  };

  const bodyUpdate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setBodyValue(() => event.target.value);
  };

  useEffect(() => {
    dispatch(updateNote({ ...item, title: titleValue }));
  }, [titleValue]);

  useEffect(() => {
    dispatch(updateNote({ ...item, body: bodyValue }));
  }, [bodyValue]);

  useEffect(() => {
    if (updateToggle) {
      bodyInputRef?.current?.focus();
    }
  }, [updateToggle]);

  return (
    <Card sx={{ width: '100%' }}>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: `${theme.palette.common.bg2}`,
          pb: 0
        }}>
        <TextField
          id="standard-basic"
          variant="standard"
          onChange={titleUpdate}
          value={item.title}
          sx={{
            width: '75%',
            input: {
              color: `${theme.palette.common.text}`,
              fontWeight: 'bold',
              letterSpacing: '2px'
            }
          }}
          InputProps={{
            readOnly: !updateToggle
          }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            sx={{ color: updateToggle ? '#64DD17' : 'gray', width: '40%' }}
            onClick={updateHandler}>
            <EditIcon />
          </IconButton>
          <IconButton sx={{ color: '#F44336', width: '40%' }} onClick={deleteHandler}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
      <CardContent
        sx={{
          backgroundColor: `${theme.palette.common.bg4}`,
          pb: 0,
          '& .MuiInput-underline::before': { borderBottom: 'none' }
        }}>
        <TextField
          id="standard-multiline-static"
          onChange={bodyUpdate}
          value={item.body}
          inputRef={bodyInputRef}
          sx={{
            width: '100%',
            textarea: {
              color: `${theme.palette.common.text}`
            }
          }}
          multiline
          rows={4}
          variant="standard"
          InputProps={{
            readOnly: !updateToggle
          }}
        />
      </CardContent>
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: `${theme.palette.common.bg2}`,
          color: `${theme.palette.common.text}`
        }}>
        <Typography variant="body2">
          Created: <span style={{ color: 'gray' }}>{item.createdDate}</span>
        </Typography>
        <Typography variant="body2">
          Modified: <span style={{ color: 'gray' }}>{item.modifiedDate}</span>
        </Typography>
      </CardContent>
      <DeleteConfirm noteId={item.id} open={deleteToggle} onClose={() => setDeleteToggle(false)} />
    </Card>
  );
};

export default Note;
