import type { CollectionEntry } from "astro:content";

// A placeholder until the email provider is chosen at launch.
export const EMAIL = "joel@joelrdz.com";

export const STATUS_LABELS: Record<
	CollectionEntry<"projects">["data"]["status"],
	string
> = {
	"in-progress": "In progress",
	delivered: "Delivered",
};
