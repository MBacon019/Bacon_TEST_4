import { useState } from "react";
import { Paper, TextField, Typography, Button, Box } from "@mui/material";

export default function NuevoProductoPage() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);

  const handleGuardar = () => {
    console.log("Producto Registrado:", { nombre, precio, stock });
    alert(`Producto "${nombre}" guardado localmente.`);
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Registrar Nuevo Producto (local)
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <TextField
          label="Nombre"
          fullWidth
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <TextField
          label="Precio"
          type="number"
          fullWidth
          value={precio}
          onChange={(e) => setPrecio(Number(e.target.value))}
        />

        <TextField
          label="Stock"
          type="number"
          fullWidth
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
        />

        <Button 
          variant="contained" 
          color="success" 
          onClick={handleGuardar}
          sx={{ width: 'fit-content', fontWeight: 'bold', textTransform: 'none' }}
        >
          Guardar Producto
        </Button>
      </Box>

      <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
        Nota: este formulario agrega productos a una lista local (solo para practicar). El listado principal viene de la API.
      </Typography>
    </Paper>
  );
}