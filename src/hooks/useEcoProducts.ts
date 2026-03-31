
import { useQuery } from '@tanstack/react-query';
import { dbService } from '@/services/dbService';
import { Product } from '@/data/products';
import React from 'react';

/**
 * Hook customizado para gerenciar produtos eco-sustentáveis.
 * Centraliza a lógica de busca, cache e filtragem.
 */
export const useEcoProducts = () => {
  const { data: allProducts = [], isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () => dbService.getProducts(),
    staleTime: 1000 * 60 * 10, // 10 minutos de cache para produtos
  });

  const trendingProducts = React.useMemo(() => {
    return allProducts.filter(p => p.isTrending);
  }, [allProducts]);

  const getProductsByCategory = React.useCallback((category: string) => {
    if (category === 'Todos') return allProducts;
    return allProducts.filter(p => p.category === category);
  }, [allProducts]);

  return {
    allProducts,
    trendingProducts,
    getProductsByCategory,
    isLoading,
    isError
  };
};
