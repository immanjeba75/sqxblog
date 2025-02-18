// src/types/blog.ts
export interface Blog {
    blog_id: number;
    blog_title: string;
    blog_description: string;
    created_date: string;
    updated_date: string | null;
  }