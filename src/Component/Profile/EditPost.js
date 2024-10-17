    import { useState, useEffect } from "react";
    import { useFirestore } from "../../firebase/useFirestore";
    import { useParams, useNavigate } from "react-router-dom";

    function EditPost() {
    const { id } = useParams(); // get post ID from URL
    const { getPost, updatePost } = useFirestore(); // get functions from Firestore
    const [title, setTitle] = useState(""); // State for title
    const [content, setContent] = useState(""); // State for content
    const [loading, setLoading] = useState(true); // State to track loading
    const navigate = useNavigate(); // for navigation after update

    // Fetch the post data when the component mounts
    useEffect(() => {
        const fetchPost = async () => {
        try {
            const postData = await getPost(id); // Fetch the post data by ID
            if (postData) {
            setTitle(postData.title); // Set the title in state
            setContent(postData.content); // Set the content in state
            }
        } catch (error) {
            console.error("Error fetching post:", error);
        } finally {
            setLoading(false); // Stop loading after fetching
        }
        };

        fetchPost();
    }, [id, getPost]);

    const handleUpdate = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
        await updatePost(id, { title, content }); // Update the post in Firestore
        alert("Post updated successfully!");
        navigate(`/article/${id}`); // Navigate to the updated post
        } catch (error) {
        console.error("Error updating post:", error);
        }
    };

    if (loading) {
        return <p>Loading post data...</p>; // Show a loading message while fetching
    }

    return (
        <div className="container">
        <h2 className="headUpdate mt-5">Edit Post</h2>
        <form onSubmit={handleUpdate}>
            <div className="form-group">
            <label>Title</label>
            <input
                type="text"
                className="form-control"
                value={title} // Value bound to state
                onChange={(e) => setTitle(e.target.value)} // Update state on change
                required
            />
            </div>
            <div className="form-group">
            <label>Content</label>
            <textarea
                className="form-control"
                rows={15}
                cols={100}
                value={content} // Value bound to state
                onChange={(e) => setContent(e.target.value)} // Update state on change
                required
            ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Update Post</button>
        </form>
        </div>
    );
    }

    export default EditPost;
