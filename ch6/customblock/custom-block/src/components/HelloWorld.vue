<docs>
# HelloWorldコンポーネント
## 概要
これはHelloWorldコンポーネントの使用方法について書かれたドキュメントです

## 使用方法
...
</docs>
<template>
  <div class="hello">
    <p class="message">メッセージ: {{msg}}</p>
    <p v-html="docs"></p>
  </div>
</template>

<script>
import marked from "marked";
export default {
  name: "HelloWorld",
  data() {
    return {
      docs: marked(this.$options._docs),
      msg: "こんにちは！"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  color: #42b983;
}
</style>
