import { describe, it, expect } from "vitest";
import { getLangFromUrl, useTranslations, getExperiences } from "../i18n/utils";

describe("i18n utilities", () => {
  describe("getLangFromUrl", () => {
    it("should return default language for root path", () => {
      const url = new URL("https://example.com/");
      expect(getLangFromUrl(url)).toBe("en");
    });

    it("should return Spanish for /es path", () => {
      const url = new URL("https://example.com/es/");
      expect(getLangFromUrl(url)).toBe("es");
    });

    it("should return English for /en path", () => {
      const url = new URL("https://example.com/en/");
      expect(getLangFromUrl(url)).toBe("en");
    });

    it("should return default language for unknown language", () => {
      const url = new URL("https://example.com/fr/");
      expect(getLangFromUrl(url)).toBe("en");
    });
  });

  describe("useTranslations", () => {
    it("should return English translation for existing key", () => {
      const t = useTranslations("en");
      expect(t("home.greeting")).toBe("👋 Hello, I'm");
    });

    it("should return Spanish translation for existing key", () => {
      const t = useTranslations("es");
      expect(t("home.greeting")).toBe("👋 Hola, soy");
    });

    it("should return English fallback for non-existent key", () => {
      const t = useTranslations("en");
      expect(t("non.existent.key" as any)).toBeUndefined();
    });
  });

  describe("getExperiences", () => {
    it("should return experiences array for English", () => {
      const experiences = getExperiences("en");
      expect(Array.isArray(experiences)).toBe(true);
      expect(experiences).toHaveLength(5);
      expect(experiences[0]).toHaveProperty("position");
      expect(experiences[0]).toHaveProperty("company");
      expect(experiences[0]).toHaveProperty("description");
    });

    it("should return experiences array for Spanish", () => {
      const experiences = getExperiences("es");
      expect(Array.isArray(experiences)).toBe(true);
      expect(experiences).toHaveLength(5);
    });

    it("should have different translations for English and Spanish", () => {
      const experiencesEn = getExperiences("en");
      const experiencesEs = getExperiences("es");

      expect(experiencesEn[0].position).not.toBe(experiencesEs[0].position);
      expect(experiencesEn[0].company).toBe(experiencesEs[0].company); // Company names should be the same
    });
  });
});
