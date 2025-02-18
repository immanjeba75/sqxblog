// import mysql from 'mysql2/promise';


// export async function query({ query, values }: { query: string; values: unknown[] }): Promise<unknown> {
//     const dbConfig = {
//         host: process.env.MYSQL_HOST || 'localhost',
//         database: process.env.MYSQL_DATABASE || 'sqxbonds_blog',
//         user: process.env.MYSQL_USER || 'root',
//         password: process.env.MYSQL_PASSWORD || 'root',
//         port: parseInt(process.env.MYSQL_PORT || '3306', 10),
//         connectTimeout: parseInt(process.env.ETIMEDOUT || '10000', 10), // 10 seconds default
       
//     };

//     console.log('Environment variables:', {
//         MYSQL_HOST: process.env.MYSQL_HOST,
//         MYSQL_DATABASE: process.env.MYSQL_DATABASE,
//         MYSQL_USER: process.env.MYSQL_USER,
//         MYSQL_PASSWORD: process.env.MYSQL_PASSWORD ? '[REDACTED]' : undefined,
//         ETIMEDOUT: process.env.ETIMEDOUT ? '[REDACTED]' : undefined,
//         port: process.env.MYSQL_PORT,
//     });

//     console.log('Attempting to connect to database with config:', {
//         ...dbConfig,
//         password: dbConfig.password ? '[REDACTED]' : undefined,
//     });

//     try {
//         const connection = await mysql.createConnection(dbConfig);
//         console.log('Database connection established successfully');

//         try {
//             const [results] = await connection.execute(query, values);
//             return results;
//         } finally {
//             await connection.end();
//             console.log('Database connection closed');
//         }
//     } catch (error: unknown) {
//         console.error('Database Error:', error);
//         throw new Error('Database Error: ' + (error instanceof Error ? error.message : 'Unknown error'));
//     }
// }