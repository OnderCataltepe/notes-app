import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { addNote } from '../../../store/reducers/noteSlice';
import type { NoteData } from '../../../store/reducers/noteSlice';
import { useAppDispatch } from '../../../store/hooks/reduxHooks';
import { getDate } from '../../../utils/index';

const AddButton = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const addHandler = (): void => {
    const noteDate = getDate();
    const newNote: NoteData = {
      id: uuidv4(),
      title: '',
      body: '',
      createdDate: noteDate,
      modifiedDate: noteDate
    };
    dispatch(addNote(newNote));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Button
        data-testid="add-button"
        onClick={addHandler}
        sx={{ color: 'green' }}
        variant="text"
        startIcon={<AddIcon />}>
        Add Note
      </Button>
    </Box>
  );
};

export default AddButton;
