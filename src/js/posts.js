// fetch("../../posts.json")
//   .then(res => res.json())
//     .then(data => {
//     console.log(data)
//     })
//     .catch(err => console.error(err));

fetch("../../posts.json",{
}).then(res => {
  return res.json()
}).then(data => console.log(data))
  .catch(error => console.log('deu merda'));
