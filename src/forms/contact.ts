import type { TFormSection } from "@lib/utils/types";

const contactForm: TFormSection[] = [
	{
		groups: [
			{
				fields: [
					{
						label: "First name",
						name: "first-name",
						placeholder: "Jane",
						type: "text",
					},
					{
						label: "Last name",
						name: "last-name",
						placeholder: "Doe",
						type: "text",
					},
				],
				required: true,
			},
			{
				label: "Email",
				name: "email",
				placeholder: "janedoe@example.com",
				required: true,
				type: "email",
			},
			{
				label: "Social media handle(s)",
				name: "socials",
				placeholder: "Twitter:@Jane_Doe",
				type: "text",
			},
			{
				containsOther: true,
				label: "How did you discover me?",
				name: "discover",
				type: "radio",
				fields: [
					{ label: "Bluesky" },
					{ label: "Discord" },
					{ label: "Sketchfab" },
					{ label: "Twitch" },
					{ label: "YouTube" },
					{ label: "Other" },
				],
				required: true,
			},
			{
				label: "Message",
				name: "info",
				type: "textarea",
			},
		],
	},
];

export default contactForm;
