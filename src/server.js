const dotenv = require("dotenv");
const app = require("./app");
const { connectDb } = require("./config/db");
const { configurePassport } = require("./config/passport");

dotenv.config();

const start = async () => {
  await connectDb();
  configurePassport();

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Servidor listo en puerto ${port}`);
  });
};

start().catch((error) => {
  console.error("Error al iniciar el servidor", error);
  process.exit(1);
});
