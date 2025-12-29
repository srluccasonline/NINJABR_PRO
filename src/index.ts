import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import { staticPlugin } from '@elysiajs/static'

const app = new Elysia()
  .use(cors())
  .use(await staticPlugin({
    prefix: "/"
  }
  ))
  .get("/", () => "Hello Elysia").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
