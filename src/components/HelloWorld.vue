<template>
  <div class="col-8 m-1 p-1">
    <div class="row m-1 p-1">
      <div class="col m-1 p-1">
        <div class="card border-primary mh-card">
          <div class="card-body">
            <h4 class="card-title">Список задач</h4>
            <button class="btn btn-primary">
              Добавить <span class="badge bg-primary">+</span>
            </button>
            <!--  -->
            <div class="card border-primary m-1 p-1">
              <div class="card-body">
                <p>alfa</p>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
      <div class="col m-1 p-1">
        <div class="card border-primary mh-card">
          <div class="card-body">
            <h4 class="card-title">Список приоритетных задач</h4>
            <button class="btn btn-primary">
              Добавить <span class="badge bg-primary">+</span>
            </button>
            <!--  -->
            <div class="card border-danger m-1 p-1">
              <div class="card-body">
                <p>gamma</p>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
    <div class="row m-1 p-1">
      <div class="row m-1 p-1">
        <div class="col p-1 m-1">
          <div class="card border-secondary border-dashed mh-card">
            <div class="card-body">
              <h4 class="card-title">Backlog</h4>
              <!-- slot -->
            </div>
          </div>
        </div>
        <div class="col-1 align-middle d-flex">
          <ArrowRight />
        </div>
        <div class="col p-1 m-1">
          <div class="card border-secondary border-dashed mh-card">
            <div class="card-body">
              <h4 class="card-title">Сбор данных</h4>
              <!-- slot -->
              <div class="card border-primary m-1 p-1">
                <div class="card-body">
                  <p>alfa</p>
                </div>
              </div>
              <div class="card border-primary m-1 p-1">
                <div class="card-body">
                  <p>beta</p>
                </div>
              </div>
              <div class="card border-primary m-1 p-1 border-dashed">
                <div class="card-body"></div>
              </div>
              <!--  -->
            </div>
          </div>
        </div>
      </div>
      <div class="row m-1 p-1">
        <div class="col">
          <ArrowUp class="pic-arrow" />
          <!--  -->
        </div>
        <div class="col-1"></div>
        <div class="col">
          <ArrowDown class="pic-arrow" />
        </div>
      </div>
      <div class="row m-1 p-1">
        <div class="col p-1 m-1">
          <div class="card border-secondary border-dashed mh-card">
            <div class="card-body">
              <h4 class="card-title">Анализ</h4>
              <!-- slot -->
            </div>
          </div>
        </div>
        <div class="col-1 align-middle d-flex">
          <ArrowLeft />
        </div>
        <div class="col p-1 m-1">
          <div class="card border-secondary border-dashed mh-card">
            <div class="card-body">
              <h4 class="card-title">В процессе</h4>
              <!-- slot -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//
import ArrowRight from "./Arrows/ArrowRight.vue";
import ArrowLeft from "./Arrows/ArrowLeft.vue";
import ArrowUp from "./Arrows/ArrowUp.vue";
import ArrowDown from "./Arrows/ArrowDown.vue";

@Options({
  components: {
    ArrowRight,
    ArrowLeft,
    ArrowUp,
    ArrowDown,
  },
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mh-card {
  min-height: 250px;
}
.pic-arrow {
  height: 100px;
  width: 100px;
}

.border-dashed {
  border-style: dashed !important;
}
</style>
