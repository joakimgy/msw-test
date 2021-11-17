import { rest } from "msw";

export const handlers = [
  rest.get("/my-api", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "Mocked response JSON body",
      })
    );
  }),
];
