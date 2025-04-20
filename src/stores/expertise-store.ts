import { defineStore } from "pinia";
import { ref } from "vue";

interface ExpertiseType {
  id: number;
  title: string;
  description: string;
}

const useExpertiseStore = defineStore("expertise-store", () => {
  const expertiseList = ref<ExpertiseType[]>([]);

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
