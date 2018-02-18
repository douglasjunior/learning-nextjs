import Head from 'next/head';

import Navbar from './Navbar';

const Layout = ({ children }) => (
    <div>
        <Head>
            <title>Learning Next.JS</title>
            <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css" />>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
        </Head>
        <Navbar />
        <main className="container">
            {children}
        </main>
    </div>
);

export default Layout;
