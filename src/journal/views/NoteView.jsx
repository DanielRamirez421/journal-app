import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, Typography, TextField } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid 
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography 
          fontSize={30}
          fontWeight={'light'}
        >28 de agosto, 2023</Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 1 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
          Guardar
        </Button>
      </Grid>
      <Grid container sx={{ mt: 1 }}>
        <TextField 
          type={'text'}
          variant={'filled'}
          fullWidth
          placeholder={'Enter a title'}
          label={'Title'}
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField 
          type={'text'}
          variant={'filled'}
          fullWidth
          multiline
          placeholder={'¿What are you thinking?'}
          minRows={5}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}
