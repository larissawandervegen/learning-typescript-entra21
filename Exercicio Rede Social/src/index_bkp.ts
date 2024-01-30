import "reflect-metadata";
import express, { Request, Response, json } from "express";
import { User } from "./user";
import { Post } from "./post";

const users: User[] = [];
const posts: Post[] = [];
const server = express();
server.use(json());

server.get("", (request: Request, response: Response) => {
  return response.send("O servidor está funcionando");
});

server.get("/users", (request: Request, response: Response) => {
  return response.json(users);
});

server.post("/users", (request: Request, response: Response) => {
  let newUser: User = {
    name: request.body.name,
    userName: request.body.userName,
    birthDate: request.body.birthDate,
    bio: request.body.bio,
    avatarUrl: request.body.avatarUrl,
    email: request.body.email,
  };
  users.push(newUser);
  return response.status(201).json(newUser);
});

server.get("/posts", (request: Request, response: Response) => {
  return response.json(posts);
});

server.post("/posts", (request: Request, response: Response) => {
  const user: User | undefined = users.find(
    (userObj: User) => userObj.userName == request.body.userName
  );
  if (!user) {
    return response.status(400).json({
      error: "User not found",
    });
  }

  let newPost: Post = new Post(
    request.body.caption,
    request.body.pictureUrl,
    user
  );
  posts.push(newPost);
  return response.status(201).json(newPost);
});

server.listen(3000, () => {
  console.log("Servidor escutando na porta 3000");
});
