import Grid from '@mui/material/Grid';
import {
  Box,
  Container,
  IconButton,
  Typography,
  List,
  ListItem,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import { useNavigate } from 'react-router-dom';

interface HomeCardProps {
  companyName: string;
  description: string;
  features: string[];
  data: {
    key: string;
    label: string;
    icon: string;
    url: string;
  }[];
}

const HomeCard: React.FC<HomeCardProps> = ({
  companyName,
  description,
  features,
  data,
}) => {
  const navigate = useNavigate();

  const iconMap: Record<string, JSX.Element> = {
    TrendingUpIcon: <TrendingUpIcon />,
    SecurityIcon: <SecurityIcon />,
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        p: { xs: 0, md: 6 },
        my: { xs: '1.5rem' },
        mb: '20px',
        textAlign: 'left',
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            border: '3px solid #f05324',
            borderRadius: '10px',
            padding: { xs: '16px', md: '40px' },
            overflow: 'hidden',
            textAlign: 'left',
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '1.875rem',
                mb: '10px',
              }}
            >
              {companyName}
            </Typography>

            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '1.125rem', 
                mb: '20px',
              }}
            >
              {description}
            </Typography>

            <List
              sx={{
                mb: '20px',
                padding: 0,
                listStyle: 'none',
              }}
            >
              {features.map((item, i) => (
                <ListItem
                  key={i}
                  sx={{
                    padding: 0,
                    marginBottom: '10px',
                    '&::before': {
                      content: '"•"',
                      fontSize: '1.5rem',
                      color: '#f05324',
                      marginRight: '8px',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.125rem',
                      color: '#333',
                    }}
                  >
                    {item}
                  </Typography>
                </ListItem>
              ))}
            </List>

            <Box>
              {data.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  sx={{
                    fontSize: '1.875rem', 
                    cursor: 'pointer',
                    mb: '10px',
                  }}
                  onClick={() => navigate(`${item?.url}`)}
                >
                  <IconButton
                    sx={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: '1.875rem', 
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {iconMap[item.icon]}
                  </IconButton>
                  <Typography
                    sx={{
                      fontSize: '1.125rem', 
                      fontWeight: 'bold',
                      padding: '10px',
                      borderRadius: '10px',
                      ml: '10px',
                      color: '#1a2c25',
                      border: '2px solid #f05324',
                    }}
                    variant="body1"
                  >
                    {`Manage ${item.label}`}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeCard;
