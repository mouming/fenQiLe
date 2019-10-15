<template>
  <div class="text_group">
    <!-- 组件结构 -->
    <!-- 组件容器 -->
    <div class="input_group">
      <input
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :name="name"
        @input="$emit('input',$event.target.value)"
      />
      <!-- 输入框后面的按钮 -->
      <button v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">{{btnTitle}}</button>
      <!-- 错误提醒 -->
      <div v-if="error" class="invalid-feedback">{{error}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'inputGroup',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: String,
    placeholder: String,
    name: String,
    btnTitle: String,
    disabled: Boolean,
    error: String
  }
}
</script>

<style lang="scss">
@import '../assets/styles/common/mixins.scss';
@import url(//at.alicdn.com/t/font_1449548_uvtshexrsy.css);

.text_group {
  height: 96px;
  margin: 10px 0 20px;
  .input_group {
    height: 48px;
    align-items: center;
    display: flex;
    padding: 0 14px 0 18px;
    @include border-bottom;
    .input-set {
      border: none;
      flex-grow: 1;
      font-size: 14px;
      line-height: 20px;
      outline: none;
      @include pl-set;
    }
  }
}
</style>
