<template>
    <div>
        <object class="app-container" id="show-resources" type="application/pdf" internalinstanceid="291" data="https://cdn.qlippie.com/pdf/Egame_Brandbook.pdf#zoom=42.1" title="">
	</object>
    </div>
</template>
<style lang="less" scoped>
#show-resources {
  width: 70%;
  height: 60%;
  visibility: visible;
  position: fixed;
  z-index: 10011;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
}

object,
embed {
  -webkit-animation-duration: 0.001s;
  -webkit-animation-name: playerInserted;
  -ms-animation-duration: 0.001s;
  -ms-animation-name: playerInserted;
  -o-animation-duration: 0.001s;
  -o-animation-name: playerInserted;
  animation-duration: 0.001s;
  animation-name: playerInserted;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
</style>
