<template>
  <v-input
    v-model="localValue"
    v-bind="$attrs"
    :field="field"
    :collection="collection"
    :primary-key="primaryKey"
    :disabled="disabled"
  />
</template>

<script lang="ts">
import { ref, inject, watch } from "vue";
// UTILS
import debounce from "lodash/debounce";
import { createSlug } from "./utils.ts";
export default {
  props: {
    field: {
      type: String,
      required: true,
    },
    collection: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    source: {
      type: String,
      default: "title",
    },
    separator: {
      type: String,
      default: "-",
    },
  },
  emits: ["input"],
  setup(props, { emit }) {
    const values = inject("values", ref<Record<string, any>>({}));

    // Create a local value for v-model binding
    const localValue = ref(props.value);
    const isChanged = ref(false);
    // Watch for changes in props.value and update localValue
    watch(
      () => props.value,
      (newValue) => {
        if (newValue !== localValue.value) {
          localValue.value = newValue;
        }
      }
    );

    // Debounced function to emit slugified value
    const debouncedEmit = debounce((newValue: string) => {
      const slug = createSlug(newValue, props.separator);
      emit("input", slug);
    }, 300); // Adjust the debounce delay as needed

    // Watch localValue and apply debounced slugify
    watch(localValue, (newValue) => {
      debouncedEmit(newValue);
    });

    // Watch the source value and update localValue accordingly, but only if slug is empty
    watch(
      () => values.value[props.source],
      (newValue) => {
        if (isChanged.value) {
          debouncedEmit(newValue);
        }
        isChanged.value = true;
      }
    );

    return { localValue };
  },
};
</script>
