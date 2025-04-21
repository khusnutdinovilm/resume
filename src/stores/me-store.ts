import { defineStore } from "pinia";
import type { IMeInfo } from "types";
import { ref } from "vue";

const useMeStore = defineStore("me-store", () => {
  const meInfo = ref<IMeInfo>();

  const getMeInfo = async () => {
    const res = await fetch("db/me.json", { method: "get" });

    if (!res.ok) {
      throw Error(`HTTP error! status: ${res.status}`);
    }

    meInfo.value = await res.json();
  };

  return {
    meInfo,
    getMeInfo,
  };
});

export default useMeStore;
