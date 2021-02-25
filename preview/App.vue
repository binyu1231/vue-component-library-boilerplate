<template>
<div class="app">
  <ThemeProvider theme="theme-hack">
      <Box 
        title="国民经济行业分类"
        :width="500">
        <template slot="title-content">我是标题右侧内容</template>
        
        <div style="height: 200px; padding-top: 0px;">
          <p style="font-size: 0.6em; opacity: 0.8; text-align: right; margin: 0; padding: 10px 0 20px;">数据截止为2020.07.31</p>
          <Bar 
            :value="[400, 700, 1000, 600, 200, 1200, 1000]" 
            :category="['制造1', '制造2', '制造3', '制造4', '制造5', '制造6', '制造7']"
          />
        </div>
      </Box>
    </ThemeProvider>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '../dist/style.css'
import { ThemeProvider, Box, Bar } from '../dist/vue-component-library-boilerplate.es'


export default defineComponent({
  name: 'app',
  components: { ThemeProvider, Box, Bar },
  setup (props, context) {
    
  }
})
</script>
<style lang="postcss">
.app {
  background: #444;
  display:flex; 
  justify-content: center; 
  padding: 10rem;
}
</style>