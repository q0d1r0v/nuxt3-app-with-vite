<script setup lang="ts">
// imports
import TopBar from '~/components/top-bar.vue'

// router
const router = useRouter()

// methods
function goToLoginPage() {
    router.push('/login-page')
}

</script>

<template>
    <div>
        <TopBar title="Top bar">
            <template #elements>
                <div class="button" @click="goToLoginPage">
                    Login
                </div>
            </template>
        </TopBar>
        <slot />
    </div>
</template>

<style scoped lang="scss">
.button {
    padding: 10px 20px 10px 20px;
    background: rgb(0, 60, 255);
    color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    font-size: 15px;

}

.button:hover {
    background: rgb(0, 60, 220);
}

.button:active {
    background: rgb(0, 60, 180);
}
</style>