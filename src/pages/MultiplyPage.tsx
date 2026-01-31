import { useMemo, useState } from "react";
import { Paper, TextField, Typography, Box, Divider, Button } from "@mui/material";

export default function CalculosPage() {
  const [precioUnitario, setPrecioUnitario] = useState(0);
  const [stock, setStock] = useState(0);
  const [resTotal, setResTotal] = useState(0);

  const [precioIva, setPrecioIva] = useState(0);
  const [resIva, setResIva] = useState(0);

  const [precioOriginal, setPrecioOriginal] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [resFinal, setResFinal] = useState(0);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Cálculos de Inventario
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" fontWeight={700}>1. Valor Total de un Producto</Typography>
        <TextField
          label="Precio Unitario"
          type="number"
          fullWidth
          onChange={(e) => setPrecioUnitario(Number(e.target.value))}
          sx={{ mt: 1, mb: 2 }}
        />
        <TextField
          label="Cantidad en Stock"
          type="number"
          fullWidth
          onChange={(e) => setStock(Number(e.target.value))}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={() => setResTotal(precioUnitario * stock)} sx={{ mb: 1 }}>
          Calcular Valor Total
        </Button>
        <Typography>Resultado: <strong>{resTotal}</strong></Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" fontWeight={700}>2. Calcular IVA (12%)</Typography>
        <TextField
          label="Precio del Producto"
          type="number"
          fullWidth
          onChange={(e) => setPrecioIva(Number(e.target.value))}
          sx={{ mt: 1, mb: 2 }}
        />
        <Button variant="contained" color="info" onClick={() => setResIva(precioIva * 0.12)} sx={{ mb: 1 }}>
          Calcular IVA
        </Button>
        <Typography>Resultado: <strong>{resIva.toFixed(2)}</strong></Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Box>
        <Typography variant="subtitle1" fontWeight={700}>3. Calcular Precio con Descuento</Typography>
        <TextField
          label="Precio Original"
          type="number"
          fullWidth
          onChange={(e) => setPrecioOriginal(Number(e.target.value))}
          sx={{ mt: 1, mb: 2 }}
        />
        <TextField
          label="Porcentaje de Descuento"
          type="number"
          fullWidth
          onChange={(e) => setDescuento(Number(e.target.value))}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="success" onClick={() => setResFinal(precioOriginal - (precioOriginal * descuento / 100))} sx={{ mb: 1 }}>
          Calcular Precio Final
        </Button>
        <Typography>Resultado: <strong>{resFinal}</strong></Typography>
      </Box>
    </Paper>
  );
}