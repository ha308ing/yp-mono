import { useState, useEffect } from "react";
import { store } from "./FluxStore";

export const Header = () => {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const subscribtion = store.subscribe(data => {
      const { language } = data;
      setLanguage(language);
    });

    return subscribtion;
  }, []);

  function handleChangeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLanguage = e.target.value;
    store.dispatch({ name: "CHANGE_LANGUAGE", payload: newLanguage });
  }

  return (
    <div>
      <select onChange={handleChangeLanguage} value={language}>
        <option value="RU">Ru</option>
        <option value="EN">En</option>
      </select>
    </div>
  );
};
