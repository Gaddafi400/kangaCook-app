import { Box } from '@mui/material';
import { useHomeDataQuery } from '../services/queries/kangacook.query';
import HomeCard from '../components/HomeCard';

type Props = object;

const Home = (_props: Props) => {
  const { isLoading, data, error } = useHomeDataQuery();

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
      <HomeCard
        companyName={data?.company_name || ''}
        description={data?.description || ''}
        features={data?.features || []}
        data={data?.data || []}
      />
    </div>
  );
};

export default Home;
