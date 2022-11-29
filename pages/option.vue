<template>
  <div> 
      <div :class="colorStatus()" class="standard">
        STATUS: <span>{{readStatus()}}</span> - <span>OPTION STYLE</span>
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
            <div>
              <p>Sa dirmi se è completato ?</p>
              <img v-if="res.completed" src="https://imgs.search.brave.com/z--ORc6Ra7ouPKwzasfzeWfM_Uuj93SdryCCP5hLdUo/rs:fit:720:720:1/g:ce/aHR0cHM6Ly9zaXRl/cy5nb29nbGUuY29t/L3NpdGUvdW5pb25k/ZWZpbG9sb2dvcy9f/L3JzcmMvMTQ5MzMx/OTc5NzM1My93aGF0/LXRoZS1oZWxsLWRv/ZXMtb2stc3RhbmQt/Zm9yL29rMy5qcGc" width="140" height="140" />
              <img v-else src="https://imgs.search.brave.com/CPhye7U2gF2cZ5uDl3_pcpyIWL0SyMYarNCIqWL4CBM/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzJ3/OThmdy5qcGc" width="140" height="140"/>
            </div>
          </td>
        </tr>
      </table>
  </div>
</template>
<script>
export default {
  async created() {
    let _this = this
    await useFetch('https://jsonplaceholder.typicode.com/todos', {
    onResponse({request, response}) {
        console.log(response)
        _this.result = {
          status: response.status,
          statusText: response.statusText,
          type: response.type,
          _data: response._data
        }
      }
    })
  },
  data() {
    return {
      result: null
    }
  },
  methods: {
    readStatus() {
      return this.result ? this.result.status : -1
    },
    colorStatus() {
      let color = 'black'
      switch (this.readStatus()) {
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
    }
  }
}
</script>
<style>
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
