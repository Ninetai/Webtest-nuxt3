<template>
    <header>
        <div id="webtester-logo"></div>
    </header>
    <nav>
        <ul id='tabs'>
             <li><RouterLink to="/" @click="prepare">Prepare</RouterLink></li>
            <li><RouterLink to="/flight" @click="flight">Flight</RouterLink></li>
            <li><RouterLink to="/test" @click="test">Test</RouterLink></li>
        </ul>
        <span id='indicator' :style="{'left': left + 'px'}"></span>
    </nav>
</template>

<script >
    // var left=0
    //  const prepare = ()=>{
    //     console.log('a')
    //     left=20;
    //  }
    //  const flight = ()=>{
    //     left(40)
    //     console.log(left)
    //  }
    export default{
        data(){

                const left=0

        },
        methods:{
            prepare(){
                console.log("Asd")
            }
        }
    }
</script>
<style>
    
</style>