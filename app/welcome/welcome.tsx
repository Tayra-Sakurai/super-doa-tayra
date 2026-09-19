import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function Welcome() {
  return (
    <Box component="main">
      <Typography
        variant="h1"
        component="h1"
      >
        ようこそ
      </Typography>
      <p>このサイトは</p>
    </Box>
  );
}
