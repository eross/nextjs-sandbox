import Layout from '../components/Layout';

export default function Post() {
    return <Layout>

    </Layout>;
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    return {
        props: {
            id: params.id,
        },
    };
}

