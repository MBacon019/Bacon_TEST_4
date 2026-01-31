import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function ProductsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = "https://dragonball-api.com/api/characters?page=1&limit=10";
        const res = await fetch(url);
        const data = await res.json();

        const list = data?.items || [];
        setItems(list);
      } catch (e: any) {
        console.error(e);
        setError("No se pudo cargar productos (revisa consola / red).");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Listado de Productos (Dragon Ball)
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 2, fontSize: '0.875rem' }}>
        URL API (copiar y pegar): <br />
        <code style={{ background: '#f5f5f5', padding: '4px', borderRadius: '4px' }}>
          https://dragonball-api.com/api/characters?page=1&limit=10
        </code>
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
      )}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
          <CircularProgress />
        </Box>
      ) : items.length === 0 ? (
        <Alert severity="info">No hay productos para mostrar.</Alert>
      ) : (
        <Table size="small" sx={{ border: "1px solid #e0e0e0" }}>
          <TableHead sx={{ backgroundColor: "#f5f7f9" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Nombre</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Precio (demo)</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Stock (demo)</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Foto</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((p) => (
              <TableRow key={p.id} hover>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                {}
                <TableCell>{p.id > 4 ? `$${p.id * 10 + 480}` : "-"}</TableCell>
                <TableCell>0</TableCell>
                <TableCell>
                  {p.image ? (
                    <Box
                      component="img"
                      src={p.image}
                      alt={p.name}
                      sx={{
                        width: 48,
                        height: 48,
                        objectFit: "cover",
                        borderRadius: 8,
                        border:"1px solid rgba(0,0,0,.15)"
                      }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                        "https://dragonball-api.com/characters/goku_normal.webp";
                      }}
                    />
                  ) : (
                    <span style={{ color: "#667085" }}>—</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
}