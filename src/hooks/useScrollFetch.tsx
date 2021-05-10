import { useEffect, useRef, useState } from 'react';

import { api } from '../config/api';

const useScrollFetch = (
  pageNumber: number,
  lastPage: number,
  total: number,
  url: string,
  initialdata: any
) => {
  const [page, setPage] = useState(pageNumber);
  const [allData, setAllData] = useState(initialdata);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const observerRef = useRef(null);

  useEffect(() => {
    if (page === lastPage) return;

    const intersectionObserver = new IntersectionObserver(
      async (entries: Array<IntersectionObserverEntry>) => {
        const ratio = entries[0].intersectionRatio;

        if (!isLoading && ratio > 0.6 && allData.length < total) {
          setIsLoading(true);
          const nextPage = page + 1;
          setPage(nextPage);

          await api
            .get(`${url}?page=${nextPage}`)
            .then((res) => {
              setAllData((prevData) => [
                ...new Set([...prevData, ...res.data.data]),
              ]);
              setIsLoading(false);
            })
            .catch((error) => {
              setError(error.message);
              setIsLoading(false);
            });
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (observerRef.current) intersectionObserver.observe(observerRef.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [allData, isLoading]);

  return {
    allData,
    observerRef,
    isLoading,
    error,
  };
};

export default useScrollFetch;
