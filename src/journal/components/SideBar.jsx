import PropTypes from "prop-types";
import {
  Box,
  Divider,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Grid,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { authSliceName } from "../../auth/store/authSlice";

export const SideBar = ({ drawerWidth }) => {

const { displayName } = useSelector(state => state[authSliceName]);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        // variant="temporary"
        // open={false}
        variant="permanent"
        // ModalProps={{
        //   keepMounted: false, // Better open performance on mobile.
        // }}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {["Enero", "Febrero", "Marzo", "Abril", "Mayo"].map(
            (month, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={month} />
                    <ListItemText secondary={"Non sit officia labore sunt dolor esse pariatur excepteur."}/>
                  </Grid>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number,
};

SideBar.defaultProps = {
  drawerWidth: 240,
};
