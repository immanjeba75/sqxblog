// src/lib/api.ts
export interface BlogResponse {
    code: number;
    message: string;
    status: string;
    data: {
      page_no: number;
      per_page: number;
      total_records: number;
      blogs: BlogData[];
    };
  }
  
  export interface BlogData {
    blog_id: number;
    blog_title: string;
    blog_description: string;
    blog_image: string;
    category: string;
    created_date: string;
    created_by: string;
  }
  
  export async function fetchBlogData(): Promise<BlogData[]> {
    const res = await fetch('https://shibui-uat.exchange-data.co.in/api/Common/AllBlogs', {
      next: { revalidate: 60 }
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch blog data');
    }
  
    const response: BlogResponse = await res.json();
    return response.data.blogs; // Return just the blogs array
  }