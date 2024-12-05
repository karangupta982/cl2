<template>
  <component :is="iconComponent" class="svg-icon" v-if="iconComponent"/>
</template>

<script setup>


const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const iconComponent = shallowRef(null);

const loadIcon = async (name) => {
  try {
    iconComponent.value = (await import(`~/assets/icons/${name}.svg?component`)).default;
  } catch (error) {
    console.error(`Icon ${name} not found in assets/icons directory.`);
  }
};

onMounted(() => {
  loadIcon(props.name);
});

watch(() => props.name, (newName) => {
  loadIcon(newName);
});
</script>

<style scoped>
.svg-icon {
  /* display: inline-block;
  width: 1em;
  height: 1em; */
  /* fill: currentColor; */
}
</style>