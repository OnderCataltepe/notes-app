import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../store/hooks/reduxHooks';
import { deleteNote } from '../../store/reducers/noteSlice';

interface DialogProps {
  noteId: string;
  open: boolean;
  onClose: () => void;
}

const DeleteConfirm = ({ noteId, open, onClose }: DialogProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const deleteNoteConfirm = () => {
    dispatch(deleteNote(noteId));
    onClose();
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '50%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}>
      <DialogTitle>Warning!</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this note?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={deleteNoteConfirm}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirm;
