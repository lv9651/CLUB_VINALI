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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const pasosFuncionamiento = [
  { icono: '1️⃣', texto: 'Reserva y realiza tu tratamiento favorito' },
  { icono: '2️⃣', texto: 'Acumulas 1 punto por cada sol gastado' },
  { icono: '3️⃣', texto: 'Canjea puntos por servicios y sube de nivel' },
  { icono: '4️⃣', texto: 'Disfruta descuentos y premios según tu categoría' },
];

const nivelesClub = [
  { nivel: 'Esencia', rango: '0 – 749 pts', descuento: '0%', beneficios: '-' },
  { nivel: 'Vitalidad', rango: '750 – 1499 pts', descuento: '10%', beneficios: 'Consulta gratuita cada 6 meses' },
  { nivel: 'Armonía', rango: '1500 – 2999 pts', descuento: '15%', beneficios: 'Consulta + Regalo de cumpleaños' },
  { nivel: 'Plenitud', rango: '3000+ pts', descuento: '20%', beneficios: 'Consulta + Regalo + Sorteos VIP + Canjes premium' },
];

const catalogoCanje = [
  { nombre: 'Consulta dermatológica', puntos: 350 },
  { nombre: 'Hydra Beauty', puntos: 420 },
  { nombre: 'Toxina botulínica', puntos: 1300 },
  { nombre: 'Pack Antiaging', puntos: 1800 },
  { nombre: 'Exosomas', puntos: 2400 },
  { nombre: 'Terapia capilar integrativa', puntos: 2600 },
];

const beneficiosAdicionales = [
  '🎉 Regalos por tu cumpleaños',
  '🧴 Descuentos según tu nivel',
  '🎟️ Acceso a sorteos especiales',
  '📆 Recordatorios automáticos',
];

const terminosCondiciones = [
  'Vigencia de puntos: 12 meses desde la última acumulación.',
  'Si no acumulas puntos durante 6 meses, tu nivel baja a la mitad.',
  'Si no acumulas puntos en 12 meses, tus puntos y nivel se reinician a 0.',
  'Canjes personales e intransferibles.',
  'Consulta sujeta a disponibilidad y previa reserva.',
];

const HomeVinali = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ fontFamily: 'Roboto, sans-serif', backgroundColor: '#FAFAFA' }}>
      {/* Navbar */}
      <AppBar position="sticky" elevation={0} sx={{ backgroundColor: '#fff', borderBottom: '2px solid #15afc6' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
          <Box display="flex" alignItems="center">
            <Box component="img" src="/vinali.png" alt="Vinali Logo" sx={{ height: 48, mr: 2 }} />
            <Typography variant="h6" fontWeight="bold" color="#0D5E6A">
              Club Vinali
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              variant="text"
              sx={{ color: '#0D5E6A', fontWeight: 'bold', '&:hover': { color: '#15afc6' } }}
              onClick={() => navigate('/login')}
            >
              Iniciar sesión
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#15afc6',
                color: '#fff',
                fontWeight: 'bold',
                borderRadius: '30px',
                px: 3,
                '&:hover': { backgroundColor: '#0D9EB2' },
              }}
              onClick={() => navigate('/registro')}
            >
              Únete al club
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero */}
      <Box
        sx={{
          backgroundImage: 'linear-gradient(to bottom right, #E0F7FA, #fff)',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight={700} color="#0D5E6A" mb={2}>
            ¡Bienvenido al <span style={{ color: '#15afc6' }}>Club Vinali!</span>
          </Typography>
          <Typography variant="h5" color="#0D5E6A" mb={1}>
            Gana puntos, canjéalos por tratamientos y accede a beneficios exclusivos.
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" mb={4}>
            Tu piel y tu fidelidad merecen ser premiadas.
          </Typography>
          <Box
            component="img"
            src="/hero-vinali.jpg"
            alt="Club Vinali"
            sx={{ maxWidth: '100%', borderRadius: 6, mb: 5, boxShadow: 4 }}
          />
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="center" spacing={3}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#15afc6',
                color: '#fff',
                px: 5,
                py: 1.5,
                borderRadius: '30px',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#0D9EB2' },
              }}
              onClick={() => navigate('/registro')}
            >
              Quiero Unirme
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#15afc6',
                color: '#0D5E6A',
                px: 5,
                py: 1.5,
                borderRadius: '30px',
                fontWeight: 'bold',
                '&:hover': { borderColor: '#0D5E6A', color: '#0D5E6A' },
              }}
              onClick={() => navigate('/login')}
            >
              Consulta tus puntos
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Cómo funciona */}
<Container maxWidth="lg" sx={{ mt: 12 }}>
  <Typography
    variant="h4"
    align="center"
    fontWeight="bold"
    color="#0D5E6A"
    mb={2}
  >
    ¿Cómo funciona el Club Vinali?
  </Typography>
  <Typography
    variant="subtitle1"
    align="center"
    color="text.secondary"
    mb={6}
  >
    Solo 4 pasos sencillos para empezar a ganar puntos y disfrutar beneficios exclusivos.
  </Typography>

  <Grid container spacing={4} justifyContent="center">
    {pasosFuncionamiento.map(({ icono, texto }, i) => (
      <Grid item xs={12} sm={6} md={3} key={i}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            textAlign: "center",
            borderRadius: 4,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-8px) scale(1.03)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            },
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#15afc6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              mb: 3,
              fontSize: "2rem",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {icono}
          </Box>
          <Typography fontWeight="bold" color="#0D5E6A" variant="h6" mb={1}>
            Paso {i + 1}
          </Typography>
          <Typography color="text.secondary">{texto}</Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
</Container>

      {/* Niveles del Club */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="#0D5E6A" mb={4}>
          Cuanto más cuidas tu piel, ¡más recompensas recibes!
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#15afc6' }}>
              <TableRow>
                {['Nivel', 'Rango de puntos', 'Descuentos', 'Beneficios'].map((head, i) => (
                  <TableCell key={i} sx={{ color: '#fff', fontWeight: 'bold' }}>
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {nivelesClub.map((nivel, i) => (
                <TableRow key={i} sx={{ '&:hover': { backgroundColor: '#F1FBFC' } }}>
                  <TableCell>{nivel.nivel}</TableCell>
                  <TableCell>{nivel.rango}</TableCell>
                  <TableCell>{nivel.descuento}</TableCell>
                  <TableCell>{nivel.beneficios}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Catálogo de Canje */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="#0D5E6A" mb={6}>
          Canjea tus puntos por experiencias de bienestar
        </Typography>
        <Grid container spacing={4}>
          {catalogoCanje.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                sx={{
                  p: 4,
                  textAlign: 'center',
                  borderRadius: 4,
                  boxShadow: 3,
                  transition: '0.3s',
                  '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
                }}
                elevation={4}
              >
                <Typography variant="h6" fontWeight="bold" color="#15afc6" mb={1}>
                  {item.nombre}
                </Typography>
                <Typography color="textSecondary">{item.puntos} pts</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" mt={6}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#15afc6',
              px: 5,
              borderRadius: '30px',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#0D9EB2' },
            }}
            onClick={() => navigate('/catalogo')}
          >
            Ver catálogo completo
          </Button>
        </Box>
      </Container>

      {/* Beneficios adicionales */}
      <Container maxWidth="md" sx={{ mt: 12 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="#0D5E6A" mb={6}>
          Beneficios adicionales
        </Typography>
        <Grid container spacing={3}>
          {beneficiosAdicionales.map((beneficio, i) => (
            <Grid key={i} item xs={12} sm={6}>
              <Paper
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  borderRadius: 4,
                  boxShadow: 2,
                  transition: '0.3s',
                  '&:hover': { boxShadow: 5 },
                }}
              >
                <Typography fontSize="2rem">{beneficio.split(' ')[0]}</Typography>
                <Typography fontWeight="bold" color="#0D5E6A">
                  {beneficio.replace(/^\S+\s/, '')}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Términos y Condiciones */}
      <Container maxWidth="md" sx={{ mt: 12 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="#0D5E6A" mb={4}>
          Términos y Condiciones
        </Typography>
        {terminosCondiciones.map((texto, i) => (
          <Accordion key={i} sx={{ mb: 2, borderRadius: 2, boxShadow: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#15afc6' }} />}>
              <Typography fontWeight="bold" color="#0D5E6A">
                {texto.split(':')[0]}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">{texto.split(':')[1]?.trim() || ''}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      {/* CTA final */}
      <Box
        sx={{
          backgroundColor: '#E0F7FA',
          py: 8,
          textAlign: 'center',
          mt: 12,
          borderRadius: '20px 20px 0 0',
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="#0D5E6A" mb={3}>
          Comienza a ganar desde tu próxima cita. ¡Haz que cada tratamiento cuente!
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="center" spacing={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#15afc6',
              px: 5,
              py: 1.8,
              borderRadius: '30px',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#0D9EB2' },
            }}
            onClick={() => navigate('/registro')}
          >
            Unirme al Club Vinali
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#15afc6',
              color: '#0D5E6A',
              px: 5,
              py: 1.8,
              borderRadius: '30px',
              fontWeight: 'bold',
              '&:hover': { borderColor: '#0D5E6A', color: '#0D5E6A' },
            }}
            onClick={() => navigate('/login')}
          >
            Consultar mis puntos
          </Button>
        </Stack>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#0D5E6A', py: 4, color: 'white', textAlign: 'center', mt: 8 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Club Vinali · Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeVinali;