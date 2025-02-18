import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchBlogById, BlogData } from '@/lib/getBlogBySlug';
interface BlogDetailPageProps {
  params: { slug: string };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blog_id = parseInt(params.slug, 10);
  const blog: BlogData = await fetchBlogById(blog_id);
  const getImageUrl = (imageName: string) => {
    return `https://shibui-uat.exchange-data.co.in/Images/${imageName.replace(/^\/+/, '')}`;
  };
  // console.log(blog.blog_description);

  return (
    <div className="bg-gray-50 min-h-screen py-5">
      <div className="container max-w-8xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-8">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to blogs
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          <div className="md:col-span-3">
            <article className="bg-white shadow-lg rounded-lg overflow-hidden lg:col-span-2">
              <div className="relative h-96">
                <Image
                  src={getImageUrl(blog.blog_image)}
                  alt={blog.blog_title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition='bottom'
                  priority
                />
              </div>

              <div className="p-8">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(blog.created_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-6">{blog.blog_title}</h1>

                <div className="prose text-sm max-w-none text-gray-700">
                  <div dangerouslySetInnerHTML={{ __html: blog.blog_description }} />
                </div>
              </div>
            </article>
          </div>
          <div>
            <div className="space-y-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-md font-semibold mb-4">About the Author</h2>
                <div className="flex items-center">
                  <Image
                    src="/img/author.jpg"
                    alt={blog.created_by}
                    width={80}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-md font-bold">{blog.created_by}</h3>
                    <p className="text-sm text-gray-600">Expert in fixed-income investments</p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-md font-semibold mb-4">Related Posts</h2>
                <ul className="space-y-2">
                  {['Understanding Treasury Yields', 'The Impact of Interest Rates on Bonds', 'Corporate Bonds vs. Government Bonds'].map((title, index) => (
                    <li key={index}>
                      <Link href="/blog" className="text-sky-600 text-sm hover:text-sky-800 hover:underline">
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">



        </div>

      </div>
    </div >
  );
}