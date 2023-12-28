const supertest = require("supertest");
const app = require("../../app");

describe("GET request at api/v1/states ", () => {
  it("should respond with an array of tests", async () => {
    const response = await supertest(app)
      .get("/api/v1/states")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});

describe("GET request at api/v1/states to find state by id 1 ", () => {
  it("should respond with state wiht id 1", async () => {
    const response = await supertest(app)
      .get("/api/v1/states/1")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body.id).toBe(1);
  });
});

describe("GET request for states by id when id not found ", () => {
  it("should respond with status code 404", async () => {
    const response = await supertest(app)
      .get("/api/v1/states/4200")
      .expect("Content-Type", /json/)
      .expect(404);
  });
});
