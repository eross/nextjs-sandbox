import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Eric Ross';
export const siteTitle = 'Next.js Sample Project';



export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>{children}
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={``}
                />
                <meta
                    name="og:title"
                    content={siteTitle}
                />
                <meta
                    name="twitter:card" content="summary_large_image"
                />
            </Head>
        </div>
    );
}