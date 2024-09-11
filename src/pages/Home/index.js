import { useState, useEffect } from "react";
import ViewVideo from "../../components/ViewVideo";
import * as ListVideo from "../../services/listVideoService";

function Home() {
    const [listVideo, setListVideo] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadingVideo = async () => {
            setLoading(true);
            try {
                const res = await ListVideo.list("for-you", page);
                setListVideo((prev) => [...prev, ...res]);
            } catch (error) {
                console.error("Error loading videos:", error);
            } finally {
                setLoading(false);
            }
        };

        loadingVideo();
    }, [page]);

    const handleScroll = () => {
        const scrollableHeight = document.documentElement.scrollHeight;
        const scrolledFromTop = window.innerHeight + window.scrollY;

        if (scrolledFromTop + 1 >= scrollableHeight && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]);

    return (
        <>
            {listVideo &&
                listVideo.map((video, index) => (
                    <ViewVideo key={index} video={video} />
                ))}

            {loading && <p>Loading more videos...</p>}
        </>
    );
}

export default Home;
