import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import type { User } from "@supabase/supabase-js";

type AppHeadProps = {
  user: User
}

export default function AppHead({
  user
}: AppHeadProps) {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        width: '100%',
        boxSizing: 'border-box',
      }}
      component="header"
    >
      <AppBar>
        <Toolbar>
          <IconButton
            sx={{ mr: 2 }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Typography
          component="div"
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Meet Recording
        </Typography>
      </AppBar>
    </Box>
  );
}
