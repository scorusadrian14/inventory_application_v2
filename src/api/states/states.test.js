const supertest = require("supertest");
const app = require("../../app");

describe("GET request at api/v1/states ", () => {
  it("should respond with an array of tests", async () => {
    const response = await supertest(app)
      .get("/api/v1/states")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual([]);
  });
});
