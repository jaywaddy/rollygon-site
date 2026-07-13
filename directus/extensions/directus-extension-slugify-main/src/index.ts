import { defineInterface } from "@directus/extensions-sdk";
import InterfaceComponent from "./interface.vue";

export default defineInterface({
  id: "slugify",
  name: "Slugify",
  icon: "line_start",
  description: "An interface that auto-generates slug from a selected field.",
  component: InterfaceComponent,
  group: 'other',
  types: ["string"],
  options: [
    {
      field: "source",
      name: "Source",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
        required: true,
        note: "Select the field to generate the slug from.",
      },
    },
    {
      field: "separator",
      name: "Separator",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
        required: true,
        note: "Select the separator to use in the slug.",
      },
    },
  ],
});
