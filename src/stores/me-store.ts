import { defineStore } from "pinia";
import { ref } from "vue";

interface ILink {
  id: number;
  link: string;
  image: string;
}

interface IMeInfo {
  name: string;
  surname: string;
  specilization: string;
  avatarUrl: string;
  phone: string;
  email: string;
  location: string;
  web: string;
  links: ILink[];
}

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
