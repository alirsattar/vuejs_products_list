<template>
  <router-view></router-view>
</template>

<script>

</script>

<style>

body {
  margin: 0 auto;
  background-color: #f5f5f5;
}

#app {
  font-family: 'Avenir Black','Roboto', Helvetica, Arial, sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555555;
}

#header {
  overflow-y: auto;
}

#body {
  overflow-y: auto;
}

#product-list {
  margin: 0 auto;
}

#item-list {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.column {
  margin: 0 20px;
}

@media only screen and (max-width: 1100px) {
  #app {
    display: inline;
  }

  #left,
  #middle,
  #right {
    width: 100%;
  }
}

.break {
  width: 1rem;
  border: 1px solid #898989;
  margin: 10px auto;
}
</style>
