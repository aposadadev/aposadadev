import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getExperiences(lang: keyof typeof ui) {
  const t = useTranslations(lang);

  return [
    {
      date: t("experience.momenge.date"),
      position: t("experience.momenge.position"),
      company: t("experience.momenge.company"),
      description: t("experience.momenge.description"),
    },
    {
      date: t("experience.wearedev.date"),
      position: t("experience.wearedev.position"),
      company: t("experience.wearedev.company"),
      description: t("experience.wearedev.description"),
    },
    {
      date: t("experience.osgroup.date"),
      position: t("experience.osgroup.position"),
      company: t("experience.osgroup.company"),
      description: t("experience.osgroup.description"),
    },
    {
      date: t("experience.plmgroup.date"),
      position: t("experience.plmgroup.position"),
      company: t("experience.plmgroup.company"),
      description: t("experience.plmgroup.description"),
    },
    {
      date: t("experience.sumimedical.date"),
      position: t("experience.sumimedical.position"),
      company: t("experience.sumimedical.company"),
      description: t("experience.sumimedical.description"),
    },
  ];
}
