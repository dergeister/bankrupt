import { createI18n } from "vue-i18n";
import ptBR from "./pt-BR";

const i18n = createI18n({
  legacy: false,
  locale: "pt",
  messages: {
    pt: ptBR
  }
});

export default i18n;