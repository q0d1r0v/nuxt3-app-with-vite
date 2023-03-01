<script setup lang="ts">
// imports
import DefaultLayout from '~/layouts/default.vue'

// data
const counter = useCounter()

// methods
async function getPosts() {
    try {
        const response = await useFetch('/api/server', {
            query: {
                data: 'oybek'
            }
        })

        console.log(response.data.value)
    } catch (e) {
        console.log('error', e)
    }
}

function goToLoginPage() {
    counter.value++
}

onMounted(() => {
    getPosts()
})
</script>

<template>
    <DefaultLayout>
        <div class="parent">
            <div class="parent-list">
                <div class="button w-4" @click="goToLoginPage">
                    +
                </div>
                <div>
                    Counter: {{ counter }}
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<style scoped lang="scss">
.parent {
    padding: 10px;
}

.w-4 {
    width: 16px;
    font-size: 20px;
    display: inline-block;
}

.parent-list {
    display: flex;
    align-items: center;
    gap: 20px
}

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