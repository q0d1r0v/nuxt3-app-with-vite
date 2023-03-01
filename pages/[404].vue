<script setup lang="ts">
// imports
import NotFoundPageLayout from '~/layouts/404.vue'

// router
const router = useRouter()

// methods
function goToHomePage() {
    router.push('/')
}

</script>

<template>
    <div>
        <NotFoundPageLayout>
            <div class="parent-404">
                <div class="content">
                    <div class="text">
                        404 Not found
                    </div>
                    <div class="button" @click="goToHomePage">
                        Back to home page
                    </div>
                </div>
            </div>
        </NotFoundPageLayout>
    </div>
</template>

<style scoped lang="scss">
.parent-404 {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
     & .content {
         & .text {
            font-size: 40px;
            text-align: center;
            margin-bottom: 20px;
         }
         & .button {
            padding: 20px 40px 20px 40px;
            background: rgb(0, 60, 255);
            color: #fff;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
            cursor: pointer;
            font-size: 20px;
         }
         & .button:hover {
            background: rgb(0, 60, 220);
         }
         & .button:active {
            background: rgb(0, 60, 180);
         }
     }
}
</style>