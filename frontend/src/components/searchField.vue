<template>
  <div class="md:w-[584px] mx-auto flex w-[92%] items-center rounded-full border hover:shadow-md">
    <input type="text" class="w-full bg-transparent border-2 border-gray-700 rounded-full py-[14px] pl-4 outline-none" v-model="searchText" @input="updateSearchText"  />
  </div>
  
</template>
<script>
import { defineProps, ref } from 'vue';

export default {
  props: defineProps({
    value: {
      type: String,
      required: true,
    },
  }),
  setup(props, { emit }) {
    const searchText = ref(props.value);

    const updateSearchText = (event) => {
      const newValue = event.target.value;
      searchText.value = newValue;
      console.log(searchText.value);
      emit('update:value', newValue);
    };

    return {
      searchText,
      updateSearchText,
    };
  },
};
</script>