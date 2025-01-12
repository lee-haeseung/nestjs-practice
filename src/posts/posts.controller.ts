import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 * author: string;
 * title: string;
 * content: string;
 * listCount: number;
 * commentCount: number;
 */

interface Post {
  author: string;
  title: string;
  content: string;
  listCount: number;
  commentCount: number;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
 
@Get()
getPost(): Post {
  return {
    author: "asdssfasdf",
    title: "asdf",
    content: "qwerdaaaaaaaaaaaaaaaa",
    listCount: 1,
    commentCount: 1
  };
}
}
