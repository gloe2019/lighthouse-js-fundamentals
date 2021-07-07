let goodStations = []
const stations = ['Big Bear Donair', 10, restaurant], ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
const chooseStations = functions (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <arr[i].length; j++){
      if (arr[i][j] >= 20 && arr[i][j] === "school" || arr[i][j] === "community center") {
        goodStations.push(arr[i])
      }
    }
  }
}

chooseStations(stations)
