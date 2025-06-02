import { useState, useEffect, useRef } from 'react';
import { Coin } from '@/types/coin';
import { API_CONFIG } from '@/config/api';

export function useCoins() {
  const [coins, setCoins] = useState<Coin[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const abortController = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      abortController.current?.abort();
      abortController.current = new AbortController();

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/coins/list`, {
          method: 'GET',
          headers: API_CONFIG.HEADERS,
          signal: abortController.current.signal
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCoins(data);

      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("The request was aborted");
          return;
        }
        setError(error);
        console.error('Error fetching coins:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoins();

    return () => {
      abortController.current?.abort();
    };
  }, []);

  return { coins, isLoading, error };
} 