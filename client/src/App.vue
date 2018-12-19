<template>
  <div>
    <div class="nav space-a">
        <div class="nav-body">
            <div class="nav-item">
                <router-link :to="{name: 'home'}" class="link link-prime">Home</router-link>
            </div>
            <div class="nav-item">
                <router-link :to="{name: 'about'}" class="link link-prime">About</router-link>
            </div>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>