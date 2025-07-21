import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  LinearProgress,
  Divider,
  Avatar,
  Stack,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DashboardVinali = () => {
  const navigate = useNavigate();

  const nombreUsuario = 'Valeria';
  const puntos = 520;
  const puntosProximoNivel = 800;
  const progreso = Math.min((puntos / puntosProximoNivel) * 100, 100);
  const nivel = puntos >= puntosProximoNivel ? 'Vinali Premium' : 'Vinali Core';

  const cupones = [
    { nombre: 'Cupón Bienvenida', valor: '10%', estado: 'Activo' },
    { nombre: 'Cupón Rosa Mes', valor: '15%', estado: 'Vencido' },
  ];

  const historial = [
    { fecha: '2025-07-10', descripcion: 'Registro inicial', puntos: 100 },
    { fecha: '2025-07-12', descripcion: 'Compra Suero Hidratante', puntos: 200 },
    { fecha: '2025-07-15', descripcion: 'Campaña Instagram', puntos: 220 },
  ];

  const misiones = [
    { titulo: 'Completa tu perfil', recompensa: 30, completado: true },
    { titulo: 'Realiza tu primera compra', recompensa: 100, completado: false },
    { titulo: 'Comparte en redes sociales', recompensa: 50, completado: false },
  ];

  const beneficios = [
    'Descuentos exclusivos',
    'Atención preferente',
    'Eventos privados',
    'Charlas de belleza',
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Encabezado */}
      <Box display="flex" alignItems="center" mb={3}>
        <Avatar
          alt={nombreUsuario}
          src="/avatar-vinali.png"
          sx={{ width: 64, height: 64, mr: 2 }}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold" color="#15afc6">
            ¡Hola, {nombreUsuario}!
          </Typography>
          <Chip
            label={`Nivel: ${nivel}`}
            sx={{
              mt: 1,
              backgroundColor: '#15afc6',
              color: '#fff',
              fontWeight: 'bold',
            }}
          />
        </Box>
      </Box>

      {/* Progreso */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography>Progreso hacia <strong>Vinali Premium</strong></Typography>
          <LinearProgress
            variant="determinate"
            value={progreso}
            sx={{ height: 10, borderRadius: 5, my: 1, backgroundColor: '#d9f3f6' }}
            color="primary"
          />
          <Typography variant="caption">
            {puntos} / {puntosProximoNivel} pts — Te faltan {puntosProximoNivel - puntos} puntos
          </Typography>
        </CardContent>
      </Card>

      {/* Cupones */}
      <Typography variant="h6" color="#15afc6" mb={1}>Mis Cupones</Typography>
      <Grid container spacing={2} mb={4}>
        {cupones.map((cupon, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: cupon.estado === 'Activo' ? '#e0f7fa' : '#f5f5f5',
                borderLeft: cupon.estado === 'Activo' ? '6px solid #15afc6' : '6px solid #ccc',
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">{cupon.nombre}</Typography>
                <Typography variant="h6" color="primary">{cupon.valor} OFF</Typography>
                <Chip
                  label={cupon.estado}
                  color={cupon.estado === 'Activo' ? 'success' : 'default'}
                  sx={{ mt: 1 }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Historial de puntos */}
      <Typography variant="h6" color="#15afc6" mb={1}>Historial de puntos</Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          {historial.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                py: 1,
                borderBottom: index < historial.length - 1 ? '1px solid #eee' : 'none',
              }}
            >
              <Typography>{item.fecha}</Typography>
              <Typography>{item.descripcion}</Typography>
              <Typography fontWeight="bold" color="#15afc6">
                +{item.puntos} pts
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>

      {/* Misiones */}
      <Typography variant="h6" color="#15afc6" mb={1}>Misiones activas</Typography>
      <Grid container spacing={2} mb={4}>
        {misiones.map((m, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography fontWeight="bold">{m.titulo}</Typography>
              <Typography variant="body2" color="textSecondary">
                Recompensa: <strong>+{m.recompensa} pts</strong>
              </Typography>
              <Button
                variant={m.completado ? 'contained' : 'outlined'}
                color={m.completado ? 'success' : 'primary'}
                size="small"
                sx={{ mt: 2 }}
              >
                {m.completado ? 'Completado' : 'Completar'}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Beneficios */}
      <Typography variant="h6" color="#15afc6" mb={1}>Beneficios destacados</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" mb={4}>
        {beneficios.map((b, i) => (
          <Chip
            key={i}
            label={b}
            sx={{
              backgroundColor: '#dff7fa',
              color: '#15afc6',
              fontWeight: 'bold',
              mb: 1,
            }}
          />
        ))}
      </Stack>

      {/* Logout */}
      <Divider sx={{ my: 3 }} />
      <Box textAlign="center">
        <Button variant="outlined" color="error" onClick={() => navigate('/')}>
          Cerrar sesión
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardVinali;