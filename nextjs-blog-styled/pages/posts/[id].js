import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
    // add sanitize for emitting html
    return (<Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br /><br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
    );
}

// next js will automatically call these functions
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        }
    }
}

