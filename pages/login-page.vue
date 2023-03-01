<script setup lang="ts">
// imports
import AuthLayout from '~/layouts/auth.vue'

// router
const router = useRouter()

// methods
function goToHomePage() {
    router.push('/')
}

</script>

<template>
    <AuthLayout>
        <div class="parent">
            <div class="text" @click="goToHomePage">
                Login-Page
            </div>
        </div>
    </AuthLayout>
</template>

<style scoped lang="scss">
.parent {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
     & .text {
        font-size: 40px;
        user-select: none;
        cursor: pointer;
     }
}
</style>