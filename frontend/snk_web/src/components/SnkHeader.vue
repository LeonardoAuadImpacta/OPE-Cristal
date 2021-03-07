<template>
    <div class="body-top"> </div>
    <div class="header">
        <img src="../assets/mini_logo.png"/>
        <h1>{{snk_title}}</h1>
    </div>
</template>

<script>
export default {
    props: {
    snk_title: String
  }

}
</script>

<style scoped>

    .body-top, .header{
        height: 10vh;
        width: 100%;
    }
    .body-top{
        position: relative;
    }
    .header {
        max-height:10vh ;
        background-color:rgba(240, 240, 240) ;
        position: fixed;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        border-bottom: 5px solid #aa2514;
    }

    .header h1 {
        font-size: 8vh;
        font-family: 'Rubik', sans-serif;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    
        
    
</style>>