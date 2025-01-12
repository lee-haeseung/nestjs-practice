import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 * author: string;
 * title: string;
 * content: string;
 * listCount: number;
 * commentCount: number;
 */

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: 'lee1',
    title: 'wow',
    content: 'qq',
    likeCount: 100,
    commentCount: 232,
  },
  {
    id: 2,
    author: 'lee2',
    title: 'wow',
    content: 'qq',
    likeCount: 100,
    commentCount: 232,
  },
  {
    id: 3,
    author: 'lee3',
    title: 'wow',
    content: 'qq',
    likeCount: 100,
    commentCount: 232,
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): PostModel[] {
    return posts;
  }

  @Get('/:id')
  getPost(@Param('id') id: string): PostModel {
    const post: PostModel = posts.find((post) => post.id === +id);

    if (!post) {
      throw new NotFoundException();
    }
    
    return post;
  }
}
