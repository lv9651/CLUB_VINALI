import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Stack,
  Divider,
  MenuItem,
  InputAdornment,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Person, Email, Badge, Lock, Visibility, VisibilityOff, ArrowBack } from '@mui/icons-material';

const RegistroVinali = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    tipoDocumento: 'DNI',
    numeroDocumento: '',
    contrasena: '',
    confirmarContrasena: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRegistro = async () => {
    setError('');
    setSuccess(false);

    if (form.contrasena !== form.confirmarContrasena) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('https://localhost:7257/api/Usuario/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          apellidoPaterno: form.apellidoPaterno,
          apellidoMaterno: form.apellidoMaterno,
          correo: form.correo,
          tipoDocumento: form.tipoDocumento,
          numeroDocumento: form.numeroDocumento,
          contrasena: form.contrasena,
        }),
      });

      if (!response.ok) throw new Error(await response.text() || 'Error en el registro');

      await response.json();
      setSuccess(true);

      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
        position: 'relative', // Necesario para el botón fijo
      }}
    >
      {/* Botón Atrás fijo */}
     {/* Botón Atrás */}
<Box
  onClick={() => navigate('/')}
  sx={{
    position: 'absolute',
    top: { xs: 16, sm: 24 },
    left: { xs: 16, sm: 24 },
    width: { xs: 50, sm: 60 },
    height: { xs: 50, sm: 60 },
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #15afc6, #1090a5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.35)',
    },
    zIndex: 10,
  }}
>
  <ArrowBack sx={{ color: '#fff', fontSize: { xs: 24, sm: 28 } }} />
</Box>

      <Container maxWidth="sm">
        <Paper
          elevation={6}
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
            sx={{ height: 65, mb: 2 }}
          />

          <Typography variant="h5" fontWeight="bold" color="#0D5E6A" mb={1}>
            Crea tu cuenta
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={4}>
            Únete al Club Vinali y disfruta de beneficios exclusivos
          </Typography>

          {/* Formulario */}
          <Stack spacing={2}>
            <TextField
              label="Nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              fullWidth
              InputProps={{ startAdornment: <InputAdornment position="start"><Person /></InputAdornment> }}
            />
            <TextField
              label="Apellido paterno"
              name="apellidoPaterno"
              value={form.apellidoPaterno}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Apellido materno"
              name="apellidoMaterno"
              value={form.apellidoMaterno}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Correo electrónico"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              fullWidth
              type="email"
              InputProps={{ startAdornment: <InputAdornment position="start"><Email /></InputAdornment> }}
            />
            <TextField
              select
              label="Tipo de documento"
              name="tipoDocumento"
              value={form.tipoDocumento}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="DNI">DNI</MenuItem>
              <MenuItem value="CE">Carnet de extranjería</MenuItem>
              <MenuItem value="PAS">Pasaporte</MenuItem>
            </TextField>
            <TextField
              label="Número de documento"
              name="numeroDocumento"
              value={form.numeroDocumento}
              onChange={handleChange}
              fullWidth
              InputProps={{ startAdornment: <InputAdornment position="start"><Badge /></InputAdornment> }}
            />
            <TextField
              label="Contraseña"
              name="contrasena"
              value={form.contrasena}
              onChange={handleChange}
              fullWidth
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Confirmar contraseña"
              name="confirmarContrasena"
              value={form.confirmarContrasena}
              onChange={handleChange}
              fullWidth
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>,
              }}
            />
          </Stack>

          <Button
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              mt: 4,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
              backgroundColor: '#15afc6',
              borderRadius: 2,
              '&:hover': { backgroundColor: '#1090a5' },
            }}
            onClick={handleRegistro}
          >
            {loading ? 'Registrando...' : 'Registrarme'}
          </Button>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2">
            ¿Ya tienes una cuenta?{' '}
            <span
              onClick={() => navigate('/login')}
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

      {/* Mensajes */}
      <Snackbar
        open={!!error}
        autoHideDuration={3000}
        onClose={() => setError('')}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => setError('')}>{error}</Alert>
      </Snackbar>

      <Snackbar
        open={success}
        autoHideDuration={1500}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success">¡Registro exitoso!</Alert>
      </Snackbar>
    </Box>
  );
};

export default RegistroVinali;