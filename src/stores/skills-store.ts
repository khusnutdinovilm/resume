import { defineStore } from "pinia";
import type { ISkillItem } from "types";
import { ref } from "vue";

const useSkillsStore = defineStore("skills-store", () => {
  const skillsList = ref<ISkillItem[]>([]);

  const getSkillsList = async () => {
    const res = await fetch("db/skills.json", { method: "get" });

    if (!res.ok) {
      throw Error(`HTTP error! status: ${res.status}`);
    }

    skillsList.value = await res.json();
  };

  return {
    skillsList,
    getSkillsList,
  };
});

export default useSkillsStore;
