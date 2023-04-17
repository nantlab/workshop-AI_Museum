import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";
import languages from "./languages.json";

const BASE_URL = "http://localhost:3040";

const useStore = create(
  devtools((set) => ({
    languages,
    language: "English",
    simpleLanguage: false,
    items: [
      { title: "object 1", image: "https://randomfox.ca/images/120.jpg" },
      { title: "object 2", image: "https://randomfox.ca/images/121.jpg" },
    ],
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
  }))
);

export default useStore;
