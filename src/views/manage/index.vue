<template>
  <div>
    <a-layout id="components-layout-demo-top" class="layout">
      <a-layout-header>
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">nav 1</a-menu-item>
          <a-menu-item key="2">nav 2</a-menu-item>
          <a-menu-item key="3">nav 3</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
