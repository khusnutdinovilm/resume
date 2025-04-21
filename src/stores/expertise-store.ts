import { defineStore } from "pinia";
import type { IExpertiseItem } from "types";
import { ref } from "vue";

const useExpertiseStore = defineStore("expertise-store", () => {
  const expertiseList = ref<IExpertiseItem[]>([]);

  const getExpertiseList = async () => {
    const res = await fetch("db/expertise.json", { method: "get" });

    if (!res.ok) {
      throw Error(`HTTP error! status: ${res.status}`);
    }

    expertiseList.value = await res.json();
  };

  return {
    expertiseList,
    getExpertiseList,
  };
});

export default useExpertiseStore;
