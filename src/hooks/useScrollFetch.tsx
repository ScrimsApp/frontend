import { useEffect, useRef, useState } from 'react';

import { api } from '../config/api';

const useScrollFetch = (
  pageNumber: number,
  lastPage: number,
  total: number,
  initialdata: any
) => {
  const [page, setPage] = useState(pageNumber);
  const [allData, setAllData] = useState(initialdata);
  const [isLoading, setIsLoading] = useState(false);

  const observerRef = useRef(null);

  useEffect(() => {
    if (page === lastPage) return;

    const intersectionObserver = new IntersectionObserver(
      async (entries: Array<IntersectionObserverEntry>) => {
        const ratio = entries[0].intersectionRatio;

        if (!isLoading && ratio > 0.6 && allData.length < total) {
          const nextPage = page + 1;
          setPage((prevPage) => {
            if (prevPage < lastPage) {
              return nextPage;
            } else {
              return prevPage;
            }
          });

          setIsLoading(true);
          const { data } = await api.get(`teams?page=${nextPage}`);
          setIsLoading(false);

          setAllData((prevData) => [...new Set([...prevData, ...data.data])]);
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
  }, [allData]);

  return {
    allData,
    observerRef,
    isLoading,
  };
};

export default useScrollFetch;
