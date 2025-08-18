<script setup lang="ts">
import { onPageNotFound } from '@dcloudio/uni-app'
import { navTo } from './hooks'

onPageNotFound(() => {
  navTo('pagesCommonNotFoundIndex')
})
</script>

<style lang="scss">
@use './assets/index.scss' as *;
</style>
