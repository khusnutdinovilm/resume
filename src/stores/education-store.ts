import { defineStore } from "pinia";
import type { ITimelineItem } from "types";
import { ref } from "vue";

const useEducationStore = defineStore("education-store", () => {
  const educationList = ref<ITimelineItem[]>([]);

  const getEducationList = async () => {
    const res = await fetch("db/education.json");

    if (!res.ok) {
      throw Error(`HTTP error! status: ${res.status}`);
    }

    educationList.value = await res.json();
  };

  return {
    educationList,
    getEducationList,
  };
});

export default useEducationStore;
