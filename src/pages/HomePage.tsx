import { Paper, Typography, Box, Alert } from "@mui/material";

export default function HomePage() {
  return (
    <Box>
      <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
        <Typography variant="h4" fontWeight={900} gutterBottom>
          Bienvenido a la Gestión de Inventario
        </Typography>

        <Typography color="text.secondary">
          Consulta, registra y realiza cálculos sobre los productos del inventario.
        </Typography>
      </Paper>
      <Box>
        <img
        src="https://picsum.photos/id/1084/800/300"
        />
      </Box>

      <Paper sx={{ p: 3, borderRadius: 3, mb: 2 }}>
        <Typography variant="h6" fontWeight={900} gutterBottom>
          Listado de Productos
        </Typography>
        <Typography color="text.secondary">
          Ahora se llena dinámicamente con personajes de Dragon Ball (con fotos).
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, borderRadius: 3, mb: 2 }}>
        <Typography variant="h6" fontWeight={900} gutterBottom>
          Registrar Producto
        </Typography>
        <Typography color="text.secondary">
          Agrega nuevos productos (locales) al arreglo.
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
        <Typography variant="h6" fontWeight={900} gutterBottom>
          Cálculos de Inventario
        </Typography>
        <Typography color="text.secondary">
          Calcula valores comerciales básicos.
        </Typography>
      </Paper>

      <Alert severity="info" sx={{ borderRadius: 3, fontWeight: 700 }}>
        Recuerda: Mantén actualizado el stock de productos.
      </Alert>
    </Box>
  );
}