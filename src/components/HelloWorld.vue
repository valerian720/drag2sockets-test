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
              @dragstart="handleDragStart"
              @dragend="handleDragEnd"
              @dragover="handleDragOver"
              @drop="handleDrop"
              source="workList"
              :index="index"
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
              @dragstart="handleDragStart"
              @dragend="handleDragEnd"
              @dragover="handleDragOver"
              @drop="handleDrop"
              source="priorityWorkList"
              :index="index"
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
              <work-component
                @dragstart="handleDragStart"
                @dragend="handleDragEnd"
                @dragover="handleDragOver"
                @drop="handleDrop"
                source="backlogList"
                :index="index"
                v-for="(work, index) in backlogList"
                :key="index"
                :workElement="work"
              />
              <dragable-target
                :isHidden="hideItemSlots"
                :target="'backlogList'"
                @dragover="handleDragOver"
                @drop="handleDrop"
              />
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
              <work-component
                @dragstart="handleDragStart"
                @dragend="handleDragEnd"
                @dragover="handleDragOver"
                @drop="handleDrop"
                source="collectingDataList"
                :index="index"
                v-for="(work, index) in collectingDataList"
                :key="index"
                :workElement="work"
              />
              <dragable-target
                :isHidden="hideItemSlots"
                :target="'collectingDataList'"
                @dragover="handleDragOver"
                @drop="handleDrop"
              />
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
              <work-component
                @dragstart="handleDragStart"
                @dragend="handleDragEnd"
                @dragover="handleDragOver"
                @drop="handleDrop"
                source="analyzingList"
                :index="index"
                v-for="(work, index) in analyzingList"
                :key="index"
                :workElement="work"
              />
              <dragable-target
                :isHidden="hideItemSlots"
                :target="'analyzingList'"
                @dragover="handleDragOver"
                @drop="handleDrop"
              />
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
              <work-component
                @dragstart="handleDragStart"
                @dragend="handleDragEnd"
                @dragover="handleDragOver"
                @drop="handleDrop"
                source="inProgressList"
                :index="index"
                v-for="(work, index) in inProgressList"
                :key="index"
                :workElement="work"
              />
              <dragable-target
                :isHidden="hideItemSlots"
                :target="'inProgressList'"
                @dragover="handleDragOver"
                @drop="handleDrop"
              />
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
  hideItemSlots = true;
  //
  msg!: string;
  //
  dragSrcEl!: HTMLDivElement;

  mounted() {
    this.loadFromStorage();
  }

  loadFromStorage(): void {
    // this.collectingDataList.push(new Work("test 123"));
    // this.inProgressList.push(new Work("test 123"));
    // this.analyzingList.push(new Work("test 123"));
    // this.backlogList.push(new Work("test 123"));
    return; // TODO
  }
  //
  addNewWork(): void {
    this.workList.push(new Work(""));
  }
  addNewPriorityWork(): void {
    this.priorityWorkList.push(new Work("", true));
    console.log(this.priorityWorkList);
  }
  // /////////////////////////////////
  handleDragStart(e: DragEvent) {
    console.log("handleDragStart", e);
    if (e.dataTransfer == null) return;

    this.hideItemSlots = false;

    this.dragSrcEl = e.target as HTMLDivElement;
    this.dragSrcEl.style.opacity = "0.4";
    e.dataTransfer.effectAllowed = "move";
    // e.dataTransfer.setData("text/plain", this.innerText);
    e.dataTransfer.setData("text/plain", "test");
    //
    var img = document.createElement("img");
    // TODO: add snapshot of element to display as dragged
    e.dataTransfer.setDragImage(img, 5000, 5000); //5000 will be out of the window
  }

  handleDragEnd(e: Event) {
    console.log("handleDragEnd", e);
    this.dragSrcEl.style.opacity = "1";

    this.hideItemSlots = true;
  }

  handleDrop(e: Event) {
    // main handler
    console.log("handleDrop", e);
    e.stopPropagation();

    let dragTargetEl = e.target as HTMLDivElement;

    let source = this.dragSrcEl.getAttribute("source");
    let index = this.dragSrcEl.getAttribute("index");
    let target = dragTargetEl.getAttribute("target");

    type ObjectKey = keyof typeof this;

    console.log("handleDrop variables:", source, index, target);
    if (source != null && index != null && target != null)
      if (source !== target) {
        let sourceArray = this[source as ObjectKey] as unknown as Array<Work>;
        let targetArray = this[target as ObjectKey] as unknown as Array<Work>;

        let sourceObject = sourceArray[index as unknown as number];
        //
        sourceArray.splice(sourceArray.indexOf(sourceObject), 1);
        targetArray.push(sourceObject);
      }

    return false;
  }

  handleDragOver(e: Event) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
  }
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
