import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";
import * as Errors from "../../lib/errors";

export default (): ErrorRequestHandler => (err, _req, res, _next) => {
  if (ValidationError.isError(err)) {
    res.status(400).send({ error: err, statusCode: 400 });
  }

  if (err instanceof ValidationError) {
    res.status(400).send({ error: err.message, statusCode: 400 });
  }

  if (err instanceof Errors.ForbiddenError) {
    res.status(403).send({ error: err.message, statusCode: 403 });
  }

  if (err instanceof Errors.NotFoundError) {
    res.status(404).send({ error: err.message, statusCode: 404 });
  }

  console.error(err);
  res.status(500).json({ status: 500, message: "Internal Server Error" });
};
