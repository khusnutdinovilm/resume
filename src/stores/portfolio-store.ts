import { defineStore } from "pinia";
import type { IPortfolioItem } from "types";
import { ref } from "vue";

const usePortfolioStore = defineStore("portfolio-store", () => {
  const portfolioList = ref<IPortfolioItem[]>([]);

  const getPortfolioList = async () => {
    const res = await fetch("db/portfolio.json");

    if (!res.ok) {
      throw Error(`HTTP error! status: ${res.status}`);
    }

    portfolioList.value = await res.json();
  };

  return {
    portfolioList,
    getPortfolioList,
  };
});

export default usePortfolioStore;
