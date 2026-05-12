export const externalLinks = {
  topmate: "https://topmate.io/vishakha_singh14",
  instagram: "https://www.instagram.com/_the_healing_souls",
  whatsapp: "TODO_CONFIRM",
  email: "TODO_CONFIRM",
} as const;

export const isConfirmedLink = (value: string) => value !== "TODO_CONFIRM" && value.trim().length > 0;
