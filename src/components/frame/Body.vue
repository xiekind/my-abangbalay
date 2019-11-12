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

export default {
    name: 'appbody',
    components: {
        // Homepage
    }
}
</script>
