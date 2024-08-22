import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHomeDataQuery } from '../services/queries/kangacook.query';

const Header = () => {
  const { data } = useHomeDataQuery();

  return (
    <AppBar
      position="static"
      sx={{
        background: '#FFFFFF',
        borderBottom: '2px solid #f05324',
        height: '80px',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Box
              component="img"
              sx={{
                display: { xs: 'none', md: 'block' },
                width: '100px',
                height: '40px',
                marginTop: '12px',
                cursor: 'pointer',
              }}
              alt="kangaCook Logo"
              src={data?.logo}
            />
          </Link>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <Box
              component="img"
              sx={{
                display: { xs: 'block', md: 'none' },
                margin: 'auto',
                width: '42px',
                height: '24px',
                marginTop: '26px',
                cursor: 'pointer',
              }}
              alt="kangaCook Logo"
              src={data?.logo}
            />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
