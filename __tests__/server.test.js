"use strict";

const supertest = require("supertest");
const { server } = require("../src/server.js");
const request = supertest(server);

describe("express server", () => {
  it("should response with 404 on a bad route", async () => {
    // arrange
    let param = "/notfound";
    let status = 404;
    // act
    const response = await request.get(param);
    // assert
    expect(response.status).toBe(status);
  });
  it("should response with 404 on a bad method", async () => {
    // arrange
    let param = "/";
    let status = 404;
    // act
    const response = await request.post(param);
    // assert
    expect(response.status).toBe(status);
  });
  it("should check 500 errors", async () => {
    // arrange
    let param = "/bad";
    let status = 500;
    // act
    const response = await request.get(param);
    // assert
    expect(response.status).toBe(status);
  });
  it("should response with object and 200 status on GET /food ", async () => {
    // arrange
    let param = "/food";
    let status = 200;
    // act
    const response = await request.get(param);
    // assert
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual("object");
  });

  it("should response with object and 200 status on GET /food/:id ", async () => {
    // arrange
    let param = "/food/1";
    let status = 200;
    // act
    const response = await request.get(param);
    // assert
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual("object");
  });

  it("should response with 200 status on DELETE /food/:id ", async () => {
    // arrange
    let param = "/food/1";
    let status = 200;
    // act
    const response = await request.delete(param);
    // assert
    expect(response.status).toBe(status);
  });

  it("should response with object and 201 status on POST /food ", async () => {
    // arrange
    let param = "/food";
    let status = 201;
    // act
    const response = await request.post(param).send({ name: "orange" });
    // assert
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual("object");
  });

  it("should response with object and 200 status on GET /clothes ", async () => {
    // arrange
    let param = "/clothes";
    let status = 200;
    // act
    const response = await request.get(param);
    // assert
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual("object");
  });

  it("should response with object and 200 status on GET /clothes/:id ", async () => {
    // arrange
    let param = "/clothes/1";
    let status = 200;
    // act
    const response = await request.get(param);
    // assert
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual("object");
  });

  it("should response with 200 status on DELETE /clothes/:id ", async () => {
    // arrange
    let param = "/clothes/1";
    let status = 200;
    // act
    const response = await request.delete(param);
    // assert
    expect(response.status).toBe(status);
  });

  it("should response with object and 201 status on POST /clothes ", async () => {
    // arrange
    let param = "/clothes";
    let status = 201;
    // act
    const response = await request
      .post(param)
      .send({ name: "shirt", clothId: 2, price: 40 });
    // assert
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual("object");
  });
});
