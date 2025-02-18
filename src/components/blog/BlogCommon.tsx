import Image from "next/image";
import Link from "next/link";

interface BlogData {
    blog_id: number;
    blog_title: string;
    blog_description: string;
    blog_image: string;
    category: string;
    created_date: string;
    created_by: string;
}

interface BlogCommonProps {
    blogData: BlogData[];
}

export default function BlogCommon({ blogData }: BlogCommonProps) {
    const getImageUrl = (imageName: string) => {
        // Ensure the URL is properly formatted
        return `https://shibui-uat.exchange-data.co.in/Images/${imageName.replace(/^\/+/, '')}`;
    };

    // Sort blogData in descending order by created_date
    const sortedBlogData = blogData.sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime());

    return (
        <section>
            <h2 className="text-gray-800 text-xl font-bold mb-4">Our Latest Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {sortedBlogData.slice(0, 6).map((post) => (
                            <article key={post.blog_id} className="rounded-lg p-2 bg-white relative shadow-md hover:shadow-lg transition-shadow pb-4">
                                {/* <div className="position-relative h-26"> */}
                                <Image
                                    src={getImageUrl(post.blog_image)} // Adjust the path according to your image storage
                                    alt={post.blog_title}
                                    width={500}
                                    height={100}
                                    className="shadow-sm"
                                    objectFit="cover"
                                    style={{ height: '200px', objectFit: 'cover' }}

                                />
                                <div className="absolute text-xs top-1 right-1 bg-gray-300 font-semibold  text-black-600 px-2 py-1 rounded-br-lg rounded-lg">
                                    {post.category}
                                </div>
                                {/* </div> */}

                                <div className="flex flex-col px-2 items-start justify-between mt-4">
                                    <div className="text-sm text-gray-500 mb-2">
                                        {new Date(post.created_date).toLocaleDateString()}
                                    </div>
                                    <h3 className="text-md font-semibold mb-2">{post.blog_title}</h3>
                                    <div
                                        className="text-gray-600 mb-4 text-sm line-clamp-3"

                                        dangerouslySetInnerHTML={{
                                            __html: post.blog_description.replace(/<[^>]*>/g, '').slice(0, 150) + '...'
                                        }}
                                    />
                                    <Link
                                        href={`/blog/${post.blog_id}`}
                                        className="text-blue-600 text-sm hover:text-blue-800"
                                    >
                                        Read more →
                                    </Link>
                                </div>
                            </article>
                        ))}

                    </div>
                    {sortedBlogData.length > 6 && (
                        <div className="flex justify-center mt-6">
                            <Link
                                href="/blog"
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                View More
                            </Link>
                        </div>
                    )}
                </div>
                {/* Recent Posts sidebar */}
                <div className="md:col-span-1">
                    <h3 className="text-xl font-semibold mb-2">Recent Posts</h3>
                    <ul className="space-y-4">
                        <div className="border-b grid grid-cols-1 md:grid-cols-1 gap-6">
                            {sortedBlogData.map((post) => (
                                <article key={post.blog_id} className="flex rounded-lg align-center d-flex px-1 bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <Image
                                        src={getImageUrl(post.blog_image)} // Adjust the path according to your image storage
                                        alt={post.blog_title}
                                        width={80}
                                        height={50}
                                        className="object-contain px-1 rounded-2xl"
                                    />
                                    <div className="flex flex-col px-2 items-start justify-between mt-2">
                                        <div className="flex gap-4 font-semibold text-xs">
                                            <h6>{new Date(post.created_date).toLocaleDateString()}</h6>
                                        </div>
                                        <h3 className="text-sm font-semibold mb-1 mt-1">{post.blog_title}</h3>
                                        <div
                                            className="text-gray-600 text-xs mb-3"
                                            dangerouslySetInnerHTML={{
                                                __html: post.blog_description.replace(/<[^>]*>/g, '').slice(0, 40) + '...'
                                            }}
                                        />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    );
}