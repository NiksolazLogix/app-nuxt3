
class Wrapper {
   
    async getStatus(result, url) {
        await useFetch(url, {
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
        return result.value
      }
}

export default Wrapper