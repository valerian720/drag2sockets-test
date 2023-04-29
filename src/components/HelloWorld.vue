<template>
  <div class="col-6 m-1 p-1">
    <div class="row m-1 p-1">
      <div class="col m-1 p-1">
        <div class="card border-primary mh-card">
          <div class="card-body">
            <h4 class="card-title">Список задач</h4>
            <button class="btn btn-primary" @click="addNewWork()">
              Добавить <span class="badge bg-primary">+</span>
            </button>
            <!--  -->
            <work-component
              v-for="(work, index) in workList"
              :key="index"
              :workElement="work"
            />
            <!--  -->
          </div>
        </div>
      </div>
      <div class="col m-1 p-1">
        <div class="card border-primary mh-card">
          <div class="card-body">
            <h4 class="card-title">Список приоритетных задач</h4>
            <button class="btn btn-primary" @click="addNewPriorityWork()">
              Добавить
              <span class="badge bg-primary">+</span>
            </button>
            <!--  -->
            <work-component
              v-for="(work, index) in priorityWorkList"
              :key="index"
              :workElement="work"
            />
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
              <dragable-target :isHidden="hideItemSlots" />
              <!--  -->
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
              <dragable-target :isHidden="hideItemSlots" />
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
              <dragable-target :isHidden="hideItemSlots" />
              <!--  -->
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
              <dragable-target :isHidden="hideItemSlots" />
              <!--  -->
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
import WorkComponent from "./WorkComponent.vue";
import DragableTarget from "./DragableTarget.vue";
//
import { Work } from "./../models/Work";

@Options({
  components: {
    ArrowRight,
    ArrowLeft,
    ArrowUp,
    ArrowDown,
    //
    WorkComponent,
    DragableTarget,
  },
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  workList = new Array<Work>();
  priorityWorkList = new Array<Work>();
  collectingDataList = new Array<Work>();
  inProgressList = new Array<Work>();
  analyzingList = new Array<Work>();
  backlogList = new Array<Work>();
  //
  hideItemSlots = false;
  //
  msg!: string;

  // mounted() {
  // }
  //
  addNewWork(): void {
    this.workList.push(new Work(""));
  }
  addNewPriorityWork(): void {
    this.priorityWorkList.push(new Work("", true));
    console.log(this.priorityWorkList);
  }
  //
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

[draggable] {
  user-select: none;
}

/**/
.box {
  border: 3px solid #666;
  background-color: #ddd;
  border-radius: 0.5em;
  padding: 10px;
  cursor: move;
}

.box.none {
  border: none;
  background-color: white;
  border-radius: 0.5em;
  padding: 10px;
  cursor: crosshair;
}

.box.over {
  border: 3px dotted #666;
}
</style>
