<template>
  <!-- 我是子層 -->
  <!-- 說明區 -->
  <!-- <div class="area-explanation">
    <h1>props：將父/外層變數傳進子/內層的方法</h1>
    <p>在父元件的子元件標籤上以 v-bind 標示:子層名="外層的事物"，</p>
    <p>在子元件中使用 defineProps 接收父元件傳入的資料</p>
  </div> -->
  <!-- 演練區 -->
  <h2>以下是演練區</h2>
  <div class="area-test">
    <!-- 例：基本使用 -->
    <!-- 下面兩種 span 都會有一樣的結果，但在 JS 中需要用 props.title 才找的到值：你好我是父層來的海獺 -->
    <!-- <span>{{ props.title }}</span> -->
    <!-- <span>{{ title }}</span> -->

    <!-- 結果：function testFn() { console.log("你呼叫了 testFn()") } -->
    <!-- <span>{{ list }}</span> -->

    <!-- 例：陣列 -->
    <!-- <span>{{ title }}</span> -->

    <!-- 例：物件 -->
    <!-- <ul>
      <li v-for="item in props.orderList" :key="item.name">姓名:{{ item.name }}訂購內容:{{ item.order }}價格:{{ item.price }}</li>
    </ul> -->

    <!-- 例：emit -->

  </div>
</template>

<script setup>
// 例：基本使用
// const props = defineProps(["title", "title2"]);
// console.log("props.title", props.title); // 你好我是父層來的海獺
// console.log("title", props.title); // 你好我是父層來的海獺

// 用陣列接收
// 較簡單，但若資料錯誤或沒收到資料，都不會有反應
// const props2 = defineProps(["list", "test"]);
// console.log("props2.list", props2.list); // proxy 物件: [{name:"otter",...},...]
// console.log(props2.list.name); // undefined

// 用物件接收
// const props = defineProps({
//   orderList: {
//     type: Object,
//     default: () => ({ name: '訂單出錯', order: '訂單出錯', price: '價格出錯' }) // 接收失敗時顯示的預設值
//   },
//   callJack: {
//     type: Function,
//     default: () => { console.log('沒收到方法') }
//   }
// })
// 接收到方法時的調用方式如下
// props.callJack(); // 沒收到方法
// console.log(props.orderList); // [{name:jack,...},{...},...]
// console.log(props.callJack()); // undefined
// console.log(props.callJack); // () => { console.log('沒收到方法') }

// emit
// 以陣列的形式，將子層方法送出
// import { ref } from "vue";
// const emits = defineEmits(['sendNum', 'sendString']);
// const num = ref(100);
// const string = ref("阿盒");
// function emitInfo() {
//   emits('sendNum', num.value)
//   emits('sendString', string.value)
// }

// emitInfo();

// 物件送資料不曉得是哪的問題，會有紅字
// 以物件的形式，將子層方法送出
// 先定義 emit
import { ref } from "vue";
// const emitsExample = defineEmits({},{}); // 下面那坨的原形
const emits = defineEmits(
  {
    sendNum: (payload) => {
      if (payload === Number(payload)) {
        return true;
      } else {
        console.log("sendNum不是數字");
        return false;
      }
    },
  },
  {
    sendString: (payload) => {
      if (payload === String(payload)) {
        return true;
      } else {
        console.log("sendString、sendNum不是字串");
        return false;
      }
    }
  }
);
// 要送出的資料 num
const num = ref(100);
// 要送出的資料 string
const string = ref("Jay");
// 使用方法把資料送出
function emitInfo() {
  // 這是自己定義的在第四行('在子元件標籤v-on的方法', 要送出的資料)
  emits('sendNum', num.value);
  emits('sendString', string.value);
}

emitInfo();

</script>