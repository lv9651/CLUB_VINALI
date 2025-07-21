import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Stack,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegistroVinali = () => {
  const navigate = useNavigate();

  const handleRegistro = () => {
    // Validación o llamada API simulada
    navigate('/dashboard'); // Asegúrate de que esta ruta exista
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
          <Box
            component="img"
            src="/vinali.png"
            alt="Logo Vinali"
            sx={{ height: 60, mb: 2 }}
          />
          <Typography variant="h5" fontWeight="bold" color="#0D5E6A" mb={1}>
            Crea tu cuenta
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={4}>
            Únete al Club Vinali y empieza a acumular beneficios
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Nombre completo"
              fullWidth
              variant="outlined"
              size="medium"
            />
            <TextField
              label="Correo electrónico"
              fullWidth
              variant="outlined"
              size="medium"
              type="email"
            />
            <TextField
              label="Contraseña"
              fullWidth
              variant="outlined"
              size="medium"
              type="password"
            />
            <TextField
              label="Confirmar contraseña"
              fullWidth
              variant="outlined"
              size="medium"
              type="password"
            />
          </Stack>

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 4,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
              backgroundColor: '#15afc6',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#1090a5',
              },
            }}
            onClick={handleRegistro}
          >
            Registrarme
          </Button>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2">
            ¿Ya tienes una cuenta?{' '}
            <span
              onClick={() => navigate('/login-vinali')}
              style={{
                color: '#15afc6',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Iniciar sesión
            </span>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegistroVinali;