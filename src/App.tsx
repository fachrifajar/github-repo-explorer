// custom components
import { Container } from "./components/Container";
import { InputField } from "./components/InputField";
import { Button } from "./components/Button";
// mui components
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SearchIcon } from "./utils/icons";

const App = () => {
  const theme = useTheme();
  return (
    <Container>
      <Grid container spacing={1} sx={{ mt: { xs: 3, sm: 10 } }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", sm: "3.5rem" },
              backgroundClip: "text",
              lineHeight: 1.2,
              color: "custom.contrastText",
              textAlign: { xs: "center", sm: "start" },
              // mt: 10,
              mb: 2,
            }}
          >
            Search Github Username
          </Typography>

          <InputField
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Button
            label="Search"
            sx={{ mt: 2, minWidth: "100px" }}
            disabled
            tooltipText="Please enter an username before searching"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
