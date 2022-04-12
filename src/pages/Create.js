import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import './create.css';

const useStyles = makeStyles({

})

export default function Create() {
  const classes = useStyles();
  const [title,setTitle] = useState('');
  const [details,setDetails] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    

    if (title && details) {
      console.log(title,details);
    } else {
      console.log(`value are missing`)
    }
  }

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new note
      </Typography>

      <form noValidate autoComplete='off'>
        <TextField
          onChange={e => setTitle(e.target.value)}
          label="Note Title"
          variant='outlined'
          color='secondary'
          fullWidth
          required
          margin='normal'
          display='block'
        />

        <TextField
          onChange={e => setDetails(e.target.value)}
          label="Details"
          variant='outlined'
          color='secondary'
          fullWidth
          required
          margin='normal'
          display='block'
          multiline
          rows={4}
        />

        <Button
          onSubmit={handleSubmit}
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
          className='test'
        >
          Submit
        </Button>
      </form>

    </Container>
  )
}
