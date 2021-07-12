import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.set("trust proxy", parseInt(process.env.PROXIES || "0", 10)); // Use env here

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(helmet());

// catch 404
app.use((_, res) => {
  const err = new Error("Not Found");

  res.status(404);
  res.json({
    errors: {
      message: err.message,
      error: err,
    },
  });
});

const port = process.env.PORT || 3000;
export const expressController = {
  expressApp: app,
  run: (): void => {
    app.listen(port, () => {
      console.log("Listening on port:", port);
    });
  },
};
