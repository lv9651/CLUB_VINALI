import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Container,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginVinali = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí puedes hacer validación o llamada a API
    navigate('/dashboard-vinali');
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom right, #e0f7fa, #ffffff)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 6,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: { xs: 4, sm: 5 },
            borderRadius: 4,
            textAlign: 'center',
            backgroundColor: '#ffffff',
          }}
        >
          <Box mb={3}>
            <img
              src="/vinali.png"
              alt="Vinali"
              style={{ height: 60, marginBottom: 16 }}
            />
            <Typography variant="h5" fontWeight="bold" color="#0D5E6A" mb={1}>
              Bienvenida de nuevo
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Inicia sesión para acceder a tu cuenta
            </Typography>
          </Box>

          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Correo electrónico"
              variant="outlined"
              type="email"
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              variant="outlined"
            />
          </Stack>

          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              mt: 4,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
              backgroundColor: '#15afc6',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#1298aa',
              },
            }}
          >
            Iniciar sesión
          </Button>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2">
            ¿No tienes cuenta?{' '}
            <span
              onClick={() => navigate('/registro-vinali')}
              style={{
                color: '#15afc6',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Regístrate
            </span>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginVinali;