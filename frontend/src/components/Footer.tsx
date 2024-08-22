import { FC, ReactElement } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'white',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        borderTop: '1.5px solid #f05324',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              KangaCook
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 2,
                marginY: '1rem',
              }}
            >
              <Link
                href="https://www.facebook.com/kangacook"
                target="_blank"
                rel="noopener"
                color="inherit"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href="https://www.twitter.com/kangacook"
                target="_blank"
                rel="noopener"
                color="inherit"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/kangacook"
                target="_blank"
                rel="noopener"
                color="inherit"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              Developed by - Gaddafi Adamu
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
