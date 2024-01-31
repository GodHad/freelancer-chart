import { Blog } from "./Blog";

export const SHOW_BLOG = 'SHOW_BLOG';
export const CLICK_BLOG = 'CLICK_BLOG';

interface ShowBlog {
    type: typeof SHOW_BLOG,
    payload: {_id: String}
}

interface ClickBlog {
    type: typeof CLICK_BLOG,
    payload: {_id: String}
}

export type BlogActionTypes = ShowBlog | ClickBlog;
export type BlogState = {
    mainBlog: Blog | null,
    blogs: Array<Blog>
}