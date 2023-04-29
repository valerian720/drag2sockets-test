<template>
  <div
    class="card border-primary m-0 p-0 border-dashed"
    :class="{ 'd-none': isHidden }"
  >
    <div class="card-body"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    isHidden: Boolean,
  },
})
export default class DragableTarget extends Vue {
  isHidden!: boolean;
}
</script>
