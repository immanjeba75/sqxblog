export interface BlogResponse {
    code: number;
    message: string;
    status: string;
    data: BlogData;
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
  
  export async function fetchBlogById(blog_id: number): Promise<BlogData> {
    const res = await fetch(`https://shibui-uat.exchange-data.co.in/api/Common/GetBlogById?blog_id=${blog_id}`, {
      next: { revalidate: 60 }
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch blog data');
    }
  
    const response: BlogResponse = await res.json();
    return response.data; // Return the blog data
  }