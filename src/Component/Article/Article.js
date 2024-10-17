    import { useParams } from "react-router-dom";
    import { useFirestore } from "../../firebase/useFirestore";
    import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

    function Article() {
    const { id } = useParams(); // get post ID from URL
    const { getPost } = useFirestore();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
        try {
            const postData = await getPost(id);
            setPost(postData);
        } catch (err) {
            setError("Error fetching post: " + err.message);
        } finally {
            setLoading(false);
        }
        };

        fetchPost();
    }, [id, getPost]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!post) {
        return <p>No post found.</p>;
    }

    return (
        <> 
        <div className="container">
        <div className="card w-75">
            <img src={post.imageUrl} className="card-img-top" alt={post.title} />
            <div className="card-body p-5">
            <h3 className="card-title mb-5"> <strong> {post.title} </strong> </h3>
            <p className="card-text fs-4 mb-5">{post.content}</p>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
    }

    export default Article;
