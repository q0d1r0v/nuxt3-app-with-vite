<script setup lang="ts">
// interface
interface IPropsType {
    title: string
}

const props = defineProps<IPropsType>()

</script>

<template>
    <div class="top-bar">
        <div class="block-1">
            {{ props.title }}
        </div>

        <div class="block-2">
            <slot name="elements">
                We must be have slot elements
            </slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.top-bar {
    width: 100%;
    height: 50px;
    background: #fff;
    box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
     & .block-1 {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 10px 0 10px;
        font-size: 18px;
     }
     & .block-2 {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 10px 0 10px;
     }
}
</style>