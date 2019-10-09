<template>
  <div class="fen-home">
    <router-view></router-view>
    <ul>
      <router-link tag="li" to="/market">首页</router-link>
      <router-link tag="li" to="/category">分类</router-link>
      <router-link tag="li" to="/lecard">乐卡</router-link>
      <router-link tag="li" to="/creditcard">信用卡</router-link>
      <router-link tag="li" to="/center">我的</router-link>
    </ul>
  </div>
</template>
