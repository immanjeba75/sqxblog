// import { query } from '@/lib/db';
// import { NextResponse } from 'next/server';
// import dotenv from 'dotenv';

// // Load environment variables
// dotenv.config({ path: '.env.local' });

// export async function GET() {
//     try {
//         console.log('Executing GET request for /api/blogs');
//         const blogs = await query({
//             query: 'SELECT * FROM blog_data',
//             values: [],
//         });

//         console.log('Successfully fetched blogs:', blogs);
//         return NextResponse.json({ data: blogs });
//     } catch (error: unknown) {
//         console.error('Error in GET /api/blogs:', error);
//         return NextResponse.json(
//             { error: 'Failed to fetch blogs', details: error instanceof Error ? error.message : 'Unknown error' },
//             { status: 500 }
//         );
//     }
// }

// export async function POST(request: Request) {
//   try {
//     const { blog_title, blog_description } = await request.json();

//     const result = await query({
//       query: 'INSERT INTO blog_data (blog_title, blog_description) VALUES (?, ?)',
//       values: [blog_title, blog_description],
//     });

//     return NextResponse.json({ message: 'Blog created successfully', result });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to create blog' },
//       { status: 500 }
//     );
//   }
// }


// import mysql from 'mysql2/promise';
// export async function connection() {
//     try{
//         const connection = await mysql.createConnection({
//             host: 'localhost',
//             user: 'root',
//             password: 'root',
//             database: 'sqxbonds_blog'
//         });
//        return connection
//     } catch (error) {
//         console.log("Failed to create connection:", error);
//         throw error;

//     }
    
//     // return Response.json({ data });
// }
// import { NextResponse } from 'next/server';

// export async function GET() {
//     try {
//         const dbConnection = await connection();
//         const [results] = await dbConnection.execute('SELECT * FROM blog_data');
//         dbConnection.end();
//         return NextResponse.json({ data: results });
//     } catch (error: unknown) {
//         console.error('Database Error:', error);
//         return NextResponse.json({ error: 'Database Error: ' + (error as Error).message }, { status: 500 });
//     }
// }
