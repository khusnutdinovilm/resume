import { defineStore } from "pinia";
import type { ITimelineItem } from "types";
import { ref } from "vue";

const useExpirienceStore = defineStore("expirience-store", () => {
  const expirienceList = ref<ITimelineItem[]>([]);

  const getExpirienceList = async () => {
    const res = await fetch("db/expirience.json");

    if (!res.ok) {
      throw Error(`HTTP error! status: ${res.status}`);
    }

    expirienceList.value = await res.json();
  };

  return {
    expirienceList,
    getExpirienceList,
  };
});

export default useExpirienceStore;
