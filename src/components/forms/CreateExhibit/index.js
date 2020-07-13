import React, { useState } from 'react';

import {
  Container,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';

export default function CreateExhibit() {
  const [type, setType] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box mt={3} mb={5}>
      <Container maxWidth="xs">
        <Typography gutterBottom variant="h2">
          New Exhibit
        </Typography>

        <form>
          <TextField
            fullWidth
            name="title"
            id="title"
            label="Exhibit Title"
            type="text"
            required
          />

          <TextField
            fullWidth
            name="description"
            id="desc"
            label="Description"
            type="text"
            multiline
            rows={4}
            required
          />

          <FormControl fullWidth required name="type">
            <InputLabel id="type">Type</InputLabel>

            <Select labelId="type" value={type} onChange={handleChange}>
              <MenuItem value="Permanent">Permanent</MenuItem>
              <MenuItem value="Temporary">Temporary</MenuItem>
            </Select>
          </FormControl>

          {type === 'Temporary' && (
            <TextField
              fullWidth
              name="endDate"
              id="date"
              label="End Date"
              type="date"
              defaultValue="2020-08-24"
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}

          <Button fullWidth variant="contained" color="primary" type="submit">
            Create
          </Button>
        </form>
      </Container>
    </Box>
  );
}
