<template>
  <isDirectiveLiteral>
    <div class="nav">
      <NuxtLink class="link" to="/"><span>HOME</span></NuxtLink>
      <NuxtLink class="link" to="/composition"><span>COMPOSITION</span></NuxtLink>
      <NuxtLink class="link" to="/option"><span>OPTION</span></NuxtLink>
      <NuxtLink class="link" to="/composable"><span>COMPOSABLE</span></NuxtLink>
    </div>
    <slot />
  </isDirectiveLiteral>
</template>
<style>
.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.link {
  float:left;
  text-decoration: none;
  background-color: #538fbe;
  border-right: 3px solid #2d6898;
  border-bottom: 3px solid #2d6898;
  margin-right: 1px;
  border-radius: 3px;
}

.link:hover {
  background-color: #538fbe;
}

.link:active {
  color: white;
  background-color: #2d6898;
}

.link span {
  display: block;
  color: #fff;
  text-align: center;
  padding: 14px 16px;
}
</style>