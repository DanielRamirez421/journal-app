import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"

export const AddEntryButton = () => {
  return (
    <IconButton
        size="large"
        sx={{ 
          color: "white",
          backgroundColor: "secondary.main",
          position: "fixed",
          bottom: 50,
          right: 50,
          ':hover': {
            backgroundColor: "secondary.main",
            opacity: 0.9,
          }
        }}
      >
        <AddOutlined fontSize="30"/>
      </IconButton>
  )
}
