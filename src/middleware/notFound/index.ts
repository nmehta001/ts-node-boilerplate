import { RequestHandler } from "express";

const notFound = (): RequestHandler => (_req, res, _next) =>
  res.status(404).json({
    statusCode: 404,
    message: "Not Found",
  });

export default notFound;
