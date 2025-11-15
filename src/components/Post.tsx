import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

type postType = {
    userId: number,
    id: number,
    title: string,
    body: string
}
type LikedPosts = {
    [key: number]: boolean;
};

const Post = () => {
    const [posts, setPosts] = useState<postType[]>([]);
    const [likedPosts, setLikedPosts] = useState<LikedPosts>({});
    console.log("count", likedPosts);
    const getPostData = async () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            });
    }

    const toggleLike = (id: number) => {
        console.log(id);

        setLikedPosts((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    useEffect(() => {
        getPostData();
    }, [])
    const totalLikes = Object.values(likedPosts).filter(Boolean).length;
    return (
        <div className="py-8 px-4 min-h-screen">
            <div className="fixed top-4 right-4 bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-2 z-50">
                <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                <span className="text-lg font-bold text-gray-800">{totalLikes}</span>
            </div>
            {posts.map(postItem => {
                return (
                    <div key={postItem.id} className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 mb-6">
                        <h1 className="text-3xl font-bold mb-3 text-gray-800"> {postItem.title} </h1>
                        <p className="text-gray-600 leading-relaxed mb-4"> {postItem.body} </p>
                        <button
                            onClick={() => toggleLike(postItem.id)}
                            className="rounded-full p-2 hover:bg-gray-100 transition-colors"
                            aria-label={likedPosts[postItem.id] ? "Unlike post" : "Like post"}
                        >
                            <Heart
                                className={`w-6 h-6 transition-colors duration-300 ${likedPosts[postItem.id] ? "fill-red-500 text-red-500" : "text-gray-300"
                                    }`}
                            />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Post;