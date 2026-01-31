import { Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
        Bienvenido a la Gestión de Inventario
      </Typography>

      <Typography color="text.secondary">
        Consulta, registra y realiza cálculos sobre los productos del inventario.
      </Typography>

      

    </Paper>
  );
}