import { Box, Button } from '@mui/material';
import { useKpisDataQuery } from '../services/queries/kangacook.query';
import { useNavigate } from 'react-router-dom';
import KpisTable from '../components/KpisTable';

const Kpis = () => {
  const navigate = useNavigate();
  const { isLoading, data, error } = useKpisDataQuery();

  if (error) {
    return <h1>Something went wrong: server error...</h1>;
  }

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        height="100vh"
      >
        <h1>Loading...</h1>
      </Box>
    );
  }

  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#fff',
          px: { xs: 0, md: 5 },
          my: { xs: '1.5rem' },
          mb: '20px',
        }}
      >
        <Box
          sx={{
            border: '3px solid #f05324',
            borderRadius: '10px',
            padding: { xs: '0.5rem', md: '1rem' },
            overflow: 'hidden',
          }}
        >
          <Button
            sx={{ color: 'black', borderColor: 'black' }}
            variant="outlined"
            size="small"
            onClick={() => navigate('/')}
          >
            Home
          </Button>
          <h1>KPIs Page</h1>
          {data && <KpisTable data={data} />}
        </Box>
      </Box>
    </div>
  );
};

export default Kpis;
