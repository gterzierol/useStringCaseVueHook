<template>
  <div>
    <input type="text" v-model="text"/>
    <button @click="setString(text, 'kebab')"> kebab</button>
    <button @click="setString(text, 'camel')"> camel</button>
    {{ string }}
  </div>
</template>

<script>
import {useStringCase} from "../state/state"
import {ref} from 'vue'
export default {
  name: 'StringConversion',
  setup() {
    const text = ref('');
    const [string, setString] = useStringCase("");

    return {
      text,
      string,
      setString
    }
  }
}
</script>

<style>

</style>
