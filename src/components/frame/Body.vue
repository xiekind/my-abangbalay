<template>
    <div>
        <transition>    
            <router-view></router-view>
            <Homepage></Homepage>
        </transition>
    </div>
</template>

<style>


</style>

<script>
import Homepage from 'components/modules/Homepage.vue'
export default {
    name: 'appbody',
    components: {
        Homepage
    }
}
</script>
