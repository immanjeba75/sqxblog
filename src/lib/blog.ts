// src/lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
}

const postsDirectory = path.join(process.cwd(), 'content/posts');

export async function getAllPosts(): Promise<BlogPost[]> {
  // Ensure the directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        content,
        excerpt: data.excerpt || content.slice(0, 200) + '...',
        author: data.author,
        category: data.category
      };
    });

  // Sort posts by date
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      content,
      excerpt: data.excerpt || content.slice(0, 200) + '...',
      author: data.author,
      category: data.category
    };
  } catch (error) {
    console.error('Failed to fetch blog detail:', error);
    return null;
  }
}