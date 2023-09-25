import getPosts from "@/services/posts";
import { useCallback, useEffect, useState } from "react";

const usePosts = () => {
    const [data, setData] = useState<any[]>();
    const [isLoading, setIsLoading] = useState(true);

    const getContent = useCallback(async () => {
        const posts = await getPosts();
        setData((posts.data as any[]).slice(0, 10));
        setIsLoading(false);
    }, []);

    useEffect(() => {
        getContent();
    }, [getContent])

    return { data, isLoading };
};

export default usePosts;