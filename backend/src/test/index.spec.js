import app from "../app.ts";
import { request } from "supertest";

describe("GET /login", () => {
  test("Responde código con estodo 200", async () => {
    const response = await request(app).post("/api/login").send();
    console.log(response);
    expect(response.status).toBe(200);
  });
});
