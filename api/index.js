const express = require("express");
const app = express();

// Pega dados do body e converte para json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/teste", (req, res) => {
   res.status(200).json({ status: "rota ok" });
});

app.listen(3000, () => {
   console.log("Servidor: http://localhost:3000/");
});