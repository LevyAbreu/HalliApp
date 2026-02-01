import { useState } from 'react';
import { cardapio } from '@/utils/mockData';
import { Product } from '@/types';

export function useFilter() {
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categoriasDisponiveis = Array.from(new Set(cardapio.map((p) => p.category)));

  const produtosFiltrados = cardapio.filter((item) => {
    const matchesBusca = item.name.toLowerCase().includes(busca.toLowerCase());
    const matchesCategoria = categoriaAtiva ? item.category === categoriaAtiva : true;
    return matchesBusca && matchesCategoria;
  });

  const categoriasParaExibir = categoriaAtiva 
    ? [categoriaAtiva] 
    : Array.from(new Set(produtosFiltrados.map(p => p.category)));

  return {
    busca,
    setBusca,
    categoriaAtiva,
    setCategoriaAtiva,
    isDropdownOpen,
    setIsDropdownOpen,
    produtosFiltrados,
    categoriasParaExibir,
    categoriasDisponiveis
  };
}