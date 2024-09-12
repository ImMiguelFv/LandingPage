// api/saveUser.js
import { Pool } from 'pg';

// Configura la conexión a la base de datos PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // La URL de conexión a la base de datos
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { correo, nombre, calle, cp, localidad, comunidad_autonoma } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO usuarios (correo, nombre, calle, cp, localidad, comunidad_autonoma) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [correo, nombre, calle, cp, localidad, comunidad_autonoma]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al guardar datos');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
