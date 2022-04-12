import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './create.css';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({

})

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [title,setTitle] = useState('');
  const [details,setDetails] = useState('')
  const [titleError,setTitleError] = useState(false);
  const [detailsError,setDetailsError] = useState(false);
  const [category,setCategory] = useState('money');

  const handleSubmit = e => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if(title == '') {
      setTitleError(true)
    } 
    if (details == '') {
      setDetailsError(true)
    }
    
    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers : {'Content-type' : 'application/json'},
        body : JSON.stringify({ title, details, category })
      })
        .then(() => history.push('/'))
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

      <form noValidate autoComplete='off' onSubmit={handleSubmit} className="FormContainer">
        <TextField
          onChange={e => setTitle(e.target.value)}
          label="Note Title"
          variant='outlined'
          color='secondary'
          fullWidth
          required
          margin='normal'
          display='block'
          error={titleError}
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
          error={detailsError}
        />
        

        <FormControl>
          <FormLabel>Note Category</FormLabel>
            <RadioGroup 
              value={category} 
              onChange={e => setCategory(e.target.value)}
            >
              <FormControlLabel control={<Radio />} value="money" label="Money" />
              <FormControlLabel control={<Radio />} value="ok" label="Ok" />
              <FormControlLabel control={<Radio />} value="gas" label="Gas" />
          </RadioGroup>
        </FormControl>

        <Button
          type='submit'
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
          className='submitBtn'
        >
          Submit
        </Button>
      </form>

    </Container>
  )
}
