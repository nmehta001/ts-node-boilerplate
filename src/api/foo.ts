import { Router } from "express";

export const init = () => Router().get("/").get(":/id").post("/").delete(":/id");
