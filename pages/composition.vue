<template>
    <div> 
        <div :class="colorStatus()" class="standard">
          STATUS: <span>{{readStatus()}}</span> - <span>COMPOSITION STYLE</span>
        </div>
        <table>
          <tr>
            <th>USER ID</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>COMPLETED</th>
          </tr>
          <tr v-for="res,i in result?._data" :key="i">
            <td>{{res.userId}}</td>
            <td>{{res.id}}</td>
            <td>{{res.title}}</td>
            <td>
              <span v-if="res.completed" class="green">V</span>
              <span v-else class="red">X</span>
            </td>
          </tr>
        </table>
    </div>
  </template>
  <script setup>
 
  const result = ref(null)


  
  const { pending, error, data, refresh } = await useFetch('https://jsonplaceholder.typicode.com/todos', {
    onResponse({request, response}) {
      console.log(response)
      result.value = {
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        _data: response._data
      }
    }
  })

  const readStatus = () => {
    const data = result.value
    return data ? data.status : -1
  }

  const colorStatus = () => {
    let color = 'black'
    switch (readStatus()) {
      case -1: 
        console.log('Not value');
        color = 'black'
        break
      case 200: 
        console.log('Status 200 and color green');
        color = 'green'
        break
      default:
        console.log('Status not 200 and color red');
        color = 'red' 
        break
    }
    return color
    // return readStatus()?.status !== 200 ? 'red' : 'green'
  }

  </script>
  <style>
  table, th, td {
    border: 1px solid black;
  }
  .standard {
    font-size: 24px;
    font-weight: 800;
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
  .black {
    color: black;
  }
  table, td {
    text-align: center;
  }
</style>
  