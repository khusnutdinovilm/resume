import { defineStore } from "pinia";
import { ref } from "vue";

type AboutMeType = string[];

const useIntroStore = defineStore("pinia", () => {
  const aboutMe = ref<AboutMeType>([]);

  const getInfoAboutMe = async (): Promise<void> => {
    const res = await fetch("db/intro.json", { method: "get" });

    if (!res.ok) {
      throw Error(`HTTP error! status: ${res.status}`);
    }

    aboutMe.value = await res.json();
  };

  return {
    aboutMe,
    getInfoAboutMe,
  };
});

export default useIntroStore;
