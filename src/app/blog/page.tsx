// // src/app/blog/page.tsx
// // import { Card } from '@/components/ui/Card';
// import { Button } from '@/components/ui/Button';
// // import { getBlogData } from '@/lib/getBlogData';
// import Image from "next/image";
// import Link from 'next/link';
// // interface BlogPost {
// //   id: string;
// //   title: string;
// //   excerpt: string;
// //   date: string;
// //   category: string;
// // }
// import BlogCommon from '@/components/blog/BlogCommon'
import { fetchBlogData, BlogData } from "@/lib/getBlogData";
import BlogPageClient from '@/components/blog/BlogPageClient';

const Page = async () => {
  const blogData: BlogData[] = await fetchBlogData();
  
  return <BlogPageClient initialBlogData={blogData} />;
};

export default Page;

// // This would eventually come from your data source
// // const posts: BlogPost[] = [
// //   {
// //     id: '1',
// //     title: 'Understanding Treasury Yield Curves',
// //     excerpt: 'A comprehensive guide to interpreting treasury yield curves and their implications for the economy...',
// //     date: '2024-03-15',
// //     category: 'Market Analysis'
// //   },
// //   {
// //     id: '2',
// //     title: 'Corporate Bond Market Outlook 2024',
// //     excerpt: 'Analysis of current trends in the corporate bond market and predictions for the coming year...',
// //     date: '2024-03-10',
// //     category: 'Market Outlook'
// //   }
// // ];

// export default async function BlogPage() {
//   // const blogs = await getBlogData();
//   const imgData = [
//     { img: '/img/blog_1.png' },
//     { img: '/img/blog_2.png' },
//     { img: '/img/blog_3.png' },
//     { img: '/img/blog_4.png' },
//     { img: '/img/blog_5.png' },
//     { img: '/img/blog_6.png' },
//   ];
//   return (
//     <div className="space-y-8">
//       <div className="flex items-center justify-between">
//         <h1 className="text-3xl font-bold">Blog Posts</h1>
//         <div className="flex gap-4">
//           <Button variant="outline">Categories</Button>
//           <Button variant="outline">Archive</Button>
//         </div>
//       </div>

//       <section>
//         <h2 className="text-2xl font-bold mb-4">Our Latest Blog Posts</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <div className="md:col-span-3">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {blogs.map((post, index) => (
//                 <article key={post.blog_id} className="rounded-lg p-2 bg-white shadow-sm hover:shadow-md transition-shadow pb-4">
//                   <Image
//                     src={imgData[index % imgData.length].img}
//                     alt={post.blog_title}
//                     width={200}
//                     height={200}
//                     style={{ width: '100%' }}
//                   />
//                   <div className="flex flex-col px-2 items-start justify-between mt-4">
//                     <h3 className="text-lg font-semibold mb-2">{post.blog_title}</h3>
//                     <p className="text-gray-600 mb-4">
//                       {post.blog_description}
//                     </p>
//                     <Link
//                       href={`/blog/${post.blog_title.replaceAll(' ', '-')}`}
//                       className="text-blue-600 hover:text-blue-800"
//                     >
//                       Read more →
//                     </Link>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//           {/* Recent Posts sidebar */}
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Recent Posts</h3>
//             <ul className="space-y-4">
//               <div className="border-b grid grid-cols-1 md:grid-cols-1 gap-6">
//                 {blogs.map((post, index) => (
//                   <article key={post.blog_id} className="flex rounded-lg align-center d-flex px-1 bg-white shadow-sm hover:shadow-md transition-shadow ">
//                     <Image
//                       src={imgData[index % imgData.length].img}
//                       alt={post.blog_title}
//                       width={80}
//                       height={50}
//                       className="object-contain px-1 rounded-2xl"
//                     />
//                     <div className="flex flex-col px-2 items-start justify-between mt-2">
//                       <div className="flex gap-4 font-semibold text-xs">
//                         <h6>{new Date(post.created_date).toLocaleDateString()}</h6>
//                         {/* <p>{post.category}</p> */}
//                       </div>
//                       <h3 className="text-sm font-semibold mb-1 mt-1">{post.blog_title}</h3>
//                       <p className="text-gray-600 text-xs mb-3">
//                         {post?.blog_description?.slice(0, 40) + "..."}
//                       </p>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }