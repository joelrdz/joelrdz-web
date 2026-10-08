// PROTOTYPE: placeholder content shared by the home variants and the post page.
// The copy is a stand-in based on the CV; the real text is written in step 6.
import { frontmatter } from "./post-dummy.md";

export const person = {
	name: "Joel Rodríguez",
	role: "Full-stack developer",
	location: "Saltillo, México",
	email: "joel@joelrdz.com",
	linkedin: "https://www.linkedin.com/in/joelrdz",
	github: "https://github.com/joelrdz",
};

export const claim = {
	before: "I turn how a business ",
	accent: "actually",
	after: " works into software it can rely on.",
	support:
		"Full-stack developer with 10 years of experience, from design systems and frontend architecture to backend services and relational databases. Today I build with Next.js, TypeScript and Supabase.",
};

export const projects = [
	{
		href: "/projects/ordering-portal",
		title: "Ordering portal",
		summary:
			"An internal ordering portal for a multi-branch coffee company, with four user roles enforced in the database.",
		status: "In progress",
		stack: ["Next.js", "TypeScript", "Supabase"],
	},
	{
		href: "/projects/joelrdz-com",
		title: "joelrdz.com",
		summary:
			"This site: static Astro on Cloudflare Workers, planned in a public spec and built in the open.",
		status: "In progress",
		stack: ["Astro", "TypeScript", "Cloudflare Workers"],
	},
];

export const latestPost = {
	href: "/prototype/post",
	title: frontmatter.title as string,
	description: frontmatter.description as string,
	date: frontmatter.date as string,
	lang: frontmatter.lang as string,
};

export const formatDate = (iso: string) =>
	new Intl.DateTimeFormat("en", {
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: "UTC",
	}).format(new Date(iso));
