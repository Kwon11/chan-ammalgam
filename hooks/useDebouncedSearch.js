import { useEffect, useRef } from 'react';

const searchDebounceTime = 1000;

const useDebouncedSearch = (searchTerm, apiCall, resHandler, errHandler) => {
  const debounceTimer = useRef(null);

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      if(searchTerm) {
        apiCall(searchTerm, resHandler, errHandler);
      } else {
        resHandler(null);
      }
    }, searchDebounceTime);

    return () => {
      debounceTimer.current && clearTimeout(debounceTimer.current);
    }
  }, [searchTerm]);
}

export default useDebouncedSearch;