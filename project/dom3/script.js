const mainDiv = document.getElementById('box')

const cartoon=[
    {
        title:"tom and jerry",
        Imagelink:"https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_640.jpg",
       

    }

     ,{
        title:"tom and jerry",
        Imagelink:"https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_640.jpg",

    },
]
function displaydata()
 {
  cartoon.forEach((val)=>
  {

    const cartoonDiv = document.createElement('div');
    cartoonDiv.classList.add('cartoon');
    const cartoonImg = document.createElement('img');
    cartoonImg.src = val.Imagelink;
    cartoonImg.alt = val.title;
    const cartoonpara=document.createElement('p');
    cartoonpara.textContent=val.title;
    cartoonDiv.append(cartoonImg,cartoonpara);
    mainDiv.appendChild(cartoonDiv)
  })
}