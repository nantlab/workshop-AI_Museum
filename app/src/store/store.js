import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";
import languages from "./languages.json";
import items from "./items.js";

const BASE_URL = "http://localhost:3040";

const useStore = create(
  devtools((set, get) => ({
    languages,
    language: "German",
    simpleLanguage: false,
    items,
    // : [
    //   { title: "Katze", image: "https://randomfox.ca/images/120.jpg", description: "bla bla 1" },
    //   { title: "object 2", image: "https://randomfox.ca/images/121.jpg", description: "bla bla 2" },
    // ],
    loading: false,
    currentItem: null,
    setLanguage: (language) => {
      set((state) => {
        return { language };
      });
    },
    setSimpleLanguage: (simpleLanguage) => {
      set((state) => {
        return { simpleLanguage };
      });
    },
    setCurrentItem: async (currentItem) => {
        set(() => {
          return { loading: true };
        });
        // console.log("set current item", currentItem)
      if (currentItem  && (get().simpleLanguage || get().language !== "German")) {
        const response = await axios.post(`${BASE_URL}/translateLanguage`, {
          input: currentItem.description,
          language: get().language,
          simplify: get().simpleLanguage
        });
        set((state) => {
          return {
            currentItem: { ...currentItem, description: response.data.text },
            loading: false
          };
        });
      } else {
        set((state) => {
          return { currentItem, loading: false };
        });
      }
        // set((state) => {
        //   return { currentItem };
        // });
    },
  }))
);

export default useStore;
