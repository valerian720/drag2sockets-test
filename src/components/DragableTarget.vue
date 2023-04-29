<template>
  <div
    class="card border-primary m-0 p-0 border-dashed"
    :class="{ 'd-none': isHidden }"
  >
    <div class="card-body" :target="target"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    isHidden: Boolean,
    target: String,
  },
})
export default class DragableTarget extends Vue {
  isHidden!: boolean;
  target!: string;
}
</script>
