import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Stack,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const beneficios = [
  {
    icono: '🎁',
    titulo: 'Regalos exclusivos',
    texto: 'Disfruta beneficios especiales por ser parte del Club Vinali.',
  },
  {
    icono: '💎',
    titulo: 'Acumula puntos',
    texto: 'Cada compra suma puntos que puedes canjear por productos.',
  },
  {
    icono: '🌟',
    titulo: 'Experiencias únicas',
    texto: 'Accede a eventos, promociones y lanzamientos VIP.',
  },
];

const preguntasFrecuentes = [
  { pregunta: '¿Cómo acumulo puntos?', respuesta: 'Por cada sol gastado, ganas 1 punto.' },
  { pregunta: '¿Dónde veo mis cupones?', respuesta: 'Al iniciar sesión verás todos tus beneficios disponibles.' },
  { pregunta: '¿Cuándo obtengo el primer cupón?', respuesta: 'Al registrarte, recibirás un cupón de bienvenida.' },
  { pregunta: '¿Qué diferencia hay entre Vinali Core y Premium?', respuesta: 'Vinali Premium ofrece más beneficios exclusivos y acceso prioritario.' },
  { pregunta: '¿Los puntos vencen?', respuesta: 'Sí, tienen una validez de 12 meses. Te avisaremos antes de que expiren.' },
];

const HomeVinali = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Navbar */}
      <AppBar position="sticky" elevation={0} sx={{ backgroundColor: '#ffffff', borderBottom: '2px solid #15afc6' }}>
  <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
    <Box display="flex" alignItems="center">
      <Box
        component="img"
        src="/vinali.png"
        alt="Vinali Logo"
        sx={{ height: 48, mr: 2 }}
      />
      <Typography variant="h6" fontWeight="bold" color="#0D5E6A">
        Club Vinali
      </Typography>
    </Box>
    <Stack direction="row" spacing={2}>
      <Button
        variant="text"
        sx={{
          color: '#0D5E6A',
          fontWeight: 'bold',
          '&:hover': { color: '#15afc6' },
        }}
        onClick={() => navigate('/login')}
      >
        Iniciar sesión
      </Button>
      <Button
        variant="contained"
        onClick={() => navigate('/registro')}
        sx={{
          backgroundColor: '#15afc6',
          color: '#fff',
          fontWeight: 'bold',
          px: 3,
          '&:hover': {
            backgroundColor: '#1090a5',
          },
        }}
      >
        Únete al club
      </Button>
    </Stack>
  </Toolbar>
</AppBar>

      {/* Hero Section */}
      <Box sx={{ backgroundImage: 'linear-gradient(to bottom, #E0F7FA 0%, #ffffff 40%)', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" fontWeight={700} color="#0D5E6A" mb={3}>
                Bienvenida al <span style={{ color: '#15afc6' }}>Club Vinali</span>
              </Typography>
              <Typography variant="body1" mb={4}>
                Acumula puntos, recibe regalos y accede a experiencias únicas diseñadas para ti.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  onClick={() => navigate('/registro')}
                  variant="contained"
                  sx={{
                    backgroundColor: '#15afc6',
                    px: 4,
                    py: 1.5,
                    borderRadius: 5,
                    fontWeight: 'bold',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#13a0b3' },
                  }}
                >
                  Registrarme
                </Button>
                <Button
                  onClick={() => navigate('/login')}
                  variant="outlined"
                  sx={{
                    borderColor: '#15afc6',
                    color: '#0D5E6A',
                    px: 4,
                    py: 1.5,
                    borderRadius: 5,
                    fontWeight: 'bold',
                  }}
                >
                  Ya tengo cuenta
                </Button>
              </Stack>
            </Grid>
         
          </Grid>
        </Container>
      </Box>

      {/* Beneficios */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="#0D5E6A" mb={6}>
          Beneficios del Club
        </Typography>
        <Grid container spacing={4}>
          {beneficios.map((b, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper elevation={4} sx={{ p: 4, borderRadius: 4, textAlign: 'center' }}>
                <Typography fontSize="3rem" mb={1}>{b.icono}</Typography>
                <Typography variant="h6" fontWeight="bold" color="#15afc6" mb={1}>
                  {b.titulo}
                </Typography>
                <Typography color="textSecondary">{b.texto}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ¿Cómo funciona? */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="#0D5E6A" mb={4}>
          ¿Cómo funciona el Club Vinali?
        </Typography>
        <Typography align="center" color="textSecondary" mb={6}>
          Empiezas como <strong>Vinali Core</strong> y al alcanzar tus metas puedes convertirte en <strong>Vinali Premium</strong>.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h6" color="#15afc6" fontWeight="bold">Vinali Core</Typography>
              <ul>
                <li>10% en tu primera compra</li>
                <li>Acceso anticipado a campañas</li>
                <li>Newsletter exclusivo</li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h6" color="#15afc6" fontWeight="bold">Vinali Premium</Typography>
              <ul>
                <li>Todos los beneficios de Core</li>
                <li>Eventos VIP</li>
                <li>Regalos mensuales</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Preguntas Frecuentes */}
      <Container maxWidth="md" sx={{ mt: 12, mb: 8 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="#0D5E6A" mb={4}>
          Preguntas Frecuentes
        </Typography>
        {preguntasFrecuentes.map((item, i) => (
          <Accordion key={i} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#15afc6' }} />}>
              <Typography fontWeight="bold" color="#0D5E6A">{item.pregunta}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">{item.respuesta}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#0D5E6A', py: 4, color: 'white', textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Club Vinali · Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeVinali;