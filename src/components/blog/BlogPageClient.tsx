"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

export interface BlogData {
  blog_id: number;
  blog_title: string;
  blog_description: string;
  blog_image: string;
  category: string;
  created_date: string;
  created_by: string;
}

interface BlogPageProps {
  initialBlogData: BlogData[];
}

const BlogPageClient = ({ initialBlogData }: BlogPageProps) => {
  const [blogData, setBlogData] = useState<BlogData[]>(initialBlogData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getImageUrl = (imageName: string) => {
    return `https://shibui-uat.exchange-data.co.in/Images/${imageName.replace(/^\/+/, '')}`;
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchTerm) {
        searchBlogs(searchTerm);
      } else {
        setBlogData(initialBlogData);
        setError(null);
      }
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, initialBlogData]);

  const searchBlogs = async (query: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://shibui-uat.exchange-data.co.in/api/Common/AllBlogs?fulltext=${encodeURIComponent(query)}`);

      if (response.ok) {
        const result = await response.json();
        
        if (result && result.data && Array.isArray(result.data.blogs)) {
          if (result.data.blogs.length === 0) {
            setError(`No results found for "${query}"`);
          }
          setBlogData(result.data.blogs);
        } else {
          setError('Unexpected API response format');
          setBlogData([]);
        }
      } else {
        setError(`Failed to fetch blog data (${response.status})`);
        setBlogData([]);
      }
    } catch (error) {
      setError('Error searching blogs. Please try again later.');
      setBlogData([]);
      console.error('Error searching blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Safely sort the blog data if it's a valid array
  const sortedBlogData = Array.isArray(blogData) 
    ? [...blogData].sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime())
    : [];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">All Blogs</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className="md:col-span-3">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search blogs..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {isLoading && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {sortedBlogData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedBlogData.map((post) => (
                <div key={post.blog_id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={getImageUrl(post.blog_image)}
                      alt={post.blog_title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(post.created_date).toLocaleDateString()}
                    </div>
                    <h2 className="text-md font-semibold mb-2">{post.blog_title}</h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {post.blog_description.replace(/<[^>]*>/g, '').slice(0, 150) + '...'}
                    </p>
                    <Link href={`/blog/${post.blog_id}`} className="text-blue-600 text-sm hover:text-blue-800 font-medium inline-flex items-center">
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : !error && !isLoading && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No blog posts found. Try a different search term.</p>
            </div>
          )}
        </div>
        
        <div>
          <div className="">
            <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
            {Array.isArray(blogData) && blogData.length > 0 ? (
              <ul className="space-y-4">
                {blogData.slice(0, 5).map((post) => (
                  <li key={`recent-${post.blog_id}`} className="border-b pb-4">
                    <Link href={`/blog/${post.blog_id}`} className="group">
                      <div className="text-sm text-gray-500 mb-1">
                        {new Date(post.created_date).toLocaleDateString()}
                      </div>
                      <h3 className="text-md font-medium group-hover:text-blue-600">{post.blog_title}</h3>
                      <p className="text-gray-600 text-sm">
                        {post.blog_description.replace(/<[^>]*>/g, '').slice(0, 40) + '...'}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No recent posts available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageClient;