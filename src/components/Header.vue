<template>
  <el-row class="header el-menu el-menu--horizontal">
    <div class="left-area">
      <router-link :to="{ name: 'home' }">
        <h1>Football</h1>
      </router-link>
    </div>
    <ul class="menu">
      <router-link
        :to="{ name: 'teams' }"
        v-slot="{ navigate, href, isActive }"
        custom
      >
        <li
          class="el-menu-item"
          @click="navigate"
          :class="{ 'is-active': isActive }"
        >
          Комманды
        </li>
      </router-link>
      <router-link
        :to="{ name: 'leagues' }"
        v-slot="{ navigate, href, isActive }"
        custom
      >
        <li
          class="el-menu-item"
          @click="navigate"
          :class="{ 'is-active': isActive }"
        >
          Лиги
        </li>
      </router-link>
    </ul>
  </el-row>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.header {
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::before,
  &::after {
    display: none;
  }
}

.logo {
  cursor: pointer;
}

.menu {
  display: flex;
  align-items: center;
}
</style>
