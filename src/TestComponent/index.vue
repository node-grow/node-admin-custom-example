<template>
  <div>
    <Button type="primary">{{ props.option.title }}</Button>
  </div>
</template>

<script setup lang="ts">
import {Button} from "ant-design-vue";

const props = defineProps<{
  option: any
}>()

console.log(props)
</script>

<style scoped lang="less">

</style>
