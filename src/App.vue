<script setup>
import Child from './Child.vue'
import Button from './Button.vue'
const attrs = {
    id:'box',
    class:'wrap'
}
const state = reactive({count:0})
function add(){
    state.count ++ 
    console.log(document.querySelector('.box'))
    nextTick(()=>{
        console.log(state.count)
    console.log(document.querySelector('.box'))

    })
}
const row = {
    count:0
}
const proxy = reactive(row)
console.log('row-proxy',row===proxy)
function formSub(){
    // console.log(123);
}
const row1 = {
    o:{},
    arr:[1,2,3]
}
const obj = reactive(row1)

console.log('res',reactive(obj)===obj)

let s = reactive({name:'123'})
s = reactive({name:4})
const n = ref(0)
console.log(n)
console.log(n.value)
const objRef = ref({name:'test'})
objRef.value = {name:'123'}
const o = { foo:ref(1)}
const a = ref(0)
const state1 = reactive({
    a
})
console.log('s.a',state1.a)
state1.o = 1
console.log('o.val',o.value)

// let x = $ref(123)

// const addX = ()=>{
//     x++
// }

const info = reactive({
    books:['vue']
})
const haveBook =  computed(()=>{
    return info.books.length >0
})
const now = computed(()=>Date.now())

const foo = ref(1)
const bar  = ref(2)

const sum = computed(()=>foo+bar)
sum.value  = 4
const handleClick = ()=>{
    console.log('click-inner')
}
const clickWrap = ()=>{
    console.log('click-wrap')
}
const age = ref(16)
const qus = ref('')
const ans = ref('')
// 单个 ref
watch(qus,(newVal)=>{
    console.log('newVal',newVal)
})
watchEffect(()=>{
    console.log('watch-run')
})
const child = ref(null)
</script>
<template>
<Button class="wra" />
<Child ref="child" info-obj="info" />
<input v-model="qus">
    <div v-bind="attrs">
        <form action="" @submit.prevent="formSub">
           <button @click="add">+</button>
        </form>    
    </div>
    <div class="box">
        {{state.count}}
    </div>
    <div>
        {{objRef.name}}
    </div>
    <div>
        {{o.foo}}
    </div>
    <div>
        <!-- <button @click="addX">{{x}}</button> -->
        
    </div>
    <div>
        {{haveBook}}
    </div>
    <div>
        {{now}}
    </div>
    <div class="wrapper" @click="clickWrap">
        <div class="inner" @click.stop="handleClick"></div>
    </div>
    <input v-model.number="age" />
    <div>
        {{age}}
    </div>
</template>
<style scoped lang="scss">
.wrapper{
    width: 200px;
    height: 200px;
    border: solid;
    .inner{
        width: 50px;
        height: 50px;
        background-color: azure;
    }
}
</style>