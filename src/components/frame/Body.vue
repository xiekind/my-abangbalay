<template>
    <div>
        <transition-group>    
            <router-view :key="0" ></router-view>
            <!-- <Homepage :key="1"></Homepage> -->

        </transition-group>
    </div>
</template>

<style>

</style>

<script>
// import Homepage from 'components/modules/Homepage.vue'
export default {
    name: 'appbody',
    components: {
        // Homepage
    }
}
</script>
