<template>
  <div
    class="card m-1 p-1"
    draggable="true"
    :class="[workElement.isPriority ? 'border-danger' : 'border-primary']"
  >
    <div class="card-body m-0 p-0">
      <input
        :class="{ 'form-danger': workElement.isPriority }"
        type="text"
        class="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=""
        v-model="workElement.text"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Work } from "./../models/Work";

@Options({
  props: {
    workElement: Work,
  },
})
export default class WorkComponent extends Vue {
  workElement!: Work;
}
</script>

<style lang="less" scoped>
.form-danger.form-control:focus {
  border-color: #a72828;
  box-shadow: 0 0 0 0.2rem rgba(167, 40, 40, 0.25);
}
</style>
