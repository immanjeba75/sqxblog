import BlogCommon from "@/components/blog/BlogCommon";
import { fetchBlogData, BlogData } from "@/lib/getBlogData";
// import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const blogData: BlogData[] = await fetchBlogData();
  // console.log(blogData);

  return (
    <div className="space-y-12 px-2 lg:px-6">
      {/* Hero section */}
      <section
        className="relative text-center py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl"
        style={{
          backgroundImage: 'url("/img//bg_sqxbondblog.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-white mb-4">
            Understanding Bond Markets: Your Guide to Fixed-Income Investments
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Expert analysis on fixed income markets, yield curves, and investment strategies
          </p>
        </div>
      </section>

      {/* Blog Common Component */}
      <BlogCommon blogData={blogData} />

      {/* Additional sections */}

      <section >
        <div className="mb-6">
          <h1 className=" text-lg font-bold" > Related Posts</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <article key={i} className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-md font-semibold mb-2">Understanding Treasury Yields</h2>
              <p className="text-gray-600 text-sm mb-4">
                An in-depth analysis of current treasury yield trends and their implications...
              </p>
              <Link href="/blog/post-1" className="text-sm text-blue-600 hover:text-blue-800">
                Read more →
              </Link>
            </article>
          ))}
        </div>

      </section>

      {/* <section className="bg-white p-8 rounded-lg border">
        <h2 className="text-2xl font-bold mb-6">Market Dashboard</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['10Y Treasury', '30Y Treasury', 'Corporate Spread', 'High Yield'].map((indicator) => (
            <div key={indicator} className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-sm font-medium text-gray-500">{indicator}</h3>
              <p className="text-2xl font-semibold mt-1">3.95%</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}