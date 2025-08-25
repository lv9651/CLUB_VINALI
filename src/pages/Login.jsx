import React, { useState,useContext  } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Container,
  Divider,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
const LoginVinali = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Contexto para guardar usuario

  const [form, setForm] = useState({
    correo: '',
    contrasena: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [modoRecuperar, setModoRecuperar] = useState(false);
  const [stepRecuperar, setStepRecuperar] = useState(1); // 1=solicitar código, 2=resetear
  const [codigo, setCodigo] = useState('');
  const [nuevaContrasena, setNuevaContrasena] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // 🔹 Login normal
const handleLogin = async () => {
  setError('');
  setSuccess('');
  try {
    setLoading(true);

    const response = await fetch('https://localhost:7257/api/Usuario/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await response.json(); // parsear JSON una sola vez

    if (!response.ok) {
      throw new Error(data.error || 'Error al iniciar sesión');
    }

    if (data.usuario) {
      // Guardar usuario en contexto y localStorage
      login(data.usuario);
    }

    setSuccess('Inicio de sesión exitoso 🎉');
    setTimeout(() => {
      navigate('/dashboard'); // Navegar al dashboard
    }, 1500);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  // 🔹 Paso 1: Solicitar código
  const handleRecuperar = async () => {
    setError('');
    setSuccess('');
    try {
      setLoading(true);
      const res = await fetch('https://localhost:7257/api/Usuario/recuperar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo: form.correo }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al recuperar');

      setSuccess('Código enviado a tu correo 📩 (modo test: ' + data.codigoTest + ')');
      setStepRecuperar(2);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Paso 2: Resetear contraseña
  const handleResetear = async () => {
    setError('');
    setSuccess('');
    try {
      setLoading(true);
      const res = await fetch(
        'https://localhost:7257/api/Usuario/resetear-contrasena',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            correo: form.correo,
            codigo,
            nuevaContrasena,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al resetear');

      setSuccess('Contraseña actualizada ✅');
      setTimeout(() => {
        setModoRecuperar(false);
        setStepRecuperar(1);
        setCodigo('');
        setNuevaContrasena('');
      }, 2000);
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
              {modoRecuperar ? 'Recuperar contraseña' : 'Bienvenido de nuevo'}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {modoRecuperar
                ? 'Ingresa tu correo y sigue los pasos'
                : 'Inicia sesión para acceder a tu cuenta'}
            </Typography>
          </Box>

          {!modoRecuperar ? (
            // 🔹 Formulario de LOGIN
            <>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Correo electrónico"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  variant="outlined"
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Contraseña"
                  name="contrasena"
                  value={form.contrasena}
                  onChange={handleChange}
                  type="password"
                  variant="outlined"
                />
              </Stack>

              {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
              {success && <Alert severity="success" sx={{ mt: 2 }}>{success}</Alert>}

              <Button
                fullWidth
                variant="contained"
                onClick={handleLogin}
                disabled={loading}
                sx={{
                  mt: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  backgroundColor: '#15afc6',
                  borderRadius: 2,
                  '&:hover': { backgroundColor: '#1298aa' },
                }}
              >
                {loading ? 'Ingresando...' : 'Iniciar sesión'}
              </Button>

              <Typography
                variant="body2"
                sx={{ mt: 2, cursor: 'pointer', color: '#15afc6' }}
                onClick={() => setModoRecuperar(true)}
              >
                ¿Olvidaste tu contraseña?
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography variant="body2">
                ¿No tienes cuenta?{' '}
                <span
                  onClick={() => navigate('/registro')}
                  style={{
                    color: '#15afc6',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  Regístrate
                </span>
              </Typography>
            </>
          ) : (
            // 🔹 Formulario RECUPERAR
            <>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Correo electrónico"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  variant="outlined"
                  type="email"
                  disabled={stepRecuperar === 2}
                />

                {stepRecuperar === 2 && (
                  <>
                    <TextField
                      fullWidth
                      label="Código recibido"
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
                    />
                    <TextField
                      fullWidth
                      label="Nueva contraseña"
                      type="password"
                      value={nuevaContrasena}
                      onChange={(e) => setNuevaContrasena(e.target.value)}
                    />
                  </>
                )}
              </Stack>

              {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
              {success && <Alert severity="success" sx={{ mt: 2 }}>{success}</Alert>}

              {stepRecuperar === 1 ? (
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleRecuperar}
                  disabled={loading || !form.correo}
                  sx={{
                    mt: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    backgroundColor: '#15afc6',
                    borderRadius: 2,
                    '&:hover': { backgroundColor: '#1298aa' },
                  }}
                >
                  {loading ? 'Enviando...' : 'Enviar código'}
                </Button>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleResetear}
                  disabled={loading || !codigo || !nuevaContrasena}
                  sx={{
                    mt: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    backgroundColor: '#15afc6',
                    borderRadius: 2,
                    '&:hover': { backgroundColor: '#1298aa' },
                  }}
                >
                  {loading ? 'Actualizando...' : 'Resetear contraseña'}
                </Button>
              )}

              <Typography
                variant="body2"
                sx={{ mt: 2, cursor: 'pointer', color: '#15afc6' }}
                onClick={() => {
                  setModoRecuperar(false);
                  setStepRecuperar(1);
                }}
              >
                Volver al login
              </Typography>
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginVinali;
