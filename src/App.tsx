// custom components
import { Container } from "./components/Container";
import { SearchForm } from "./features/searchUser/components/SearchForm";
import { CardResult } from "./features/searchUser/components/CardResult";
// mui components
import Grid from "@mui/material/Grid2";

const App = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: { xs: 3, sm: 3, md: 10 } }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SearchForm />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CardResult />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
