import { useEffect, useState } from "react";

export default function useFetch(url, options) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true); //por si se quiere poner un spinner o algo
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResult(json);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        })();
    }, [options, url]); //cuando options o url cambian, se vuevle a ejecutar el async

    return { loading, result, error };
}