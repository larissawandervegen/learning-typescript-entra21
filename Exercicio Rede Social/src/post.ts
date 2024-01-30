import { User } from "./user";

export class Post {
  caption: string;
  pictureUrl: string;
  user: User;
  likes: number;

  constructor(caption: string, pictureUrl: string, user: User) {
    this.caption = caption;
    this.pictureUrl = pictureUrl;
    this.user = user;
    this.likes = 0;
  }

  likeThePost(user: User) {
    console.log(`The user ${user.name} liked ${this.user.name} post.`);
    this.likes++;
    console.log(`Total likes: ${this.likes} \n`);
  }
}
