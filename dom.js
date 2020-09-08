// // //Examine the Document Object
// // // console.dir(document)


// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // document.title =123 
// // console.log(document.title);

// // console.log(document.doctype);

// //console.log(document.head);
// //console.log(document.body);

// //console.log(document.all);

// //console.log(document.all[10]);

// //document.all[10].textContent='Hello'


// // console.log(document.forms);

// // console.log(document.links);

// // console.log(document.images);


// //GET_ELEMENT_BY_ID

// // // console.log(document.getElementById('header-title'));
// // // var headertitle= document.getElementById('header-title')
// // var header= document.getElementById('main-header')

// // // console.log(headertitle);
// // // headertitle.textContent='Hello'
// // // headertitle.innerHTML='<h3>Goodbye</h3>'

// // // playing with css
// // header.style.borderBottom='solid 3px #000'

// // //GET_ELEMENT_BY_CLASS_NAME

// // var item = document.getElementsByClassName('list-group-item')
// // // console.log(items);
// // console.log(item[1]);

// // item[1].textContent='Hello 2'
// // item[1].style.fontWeight ='Bold'
// // item[1].style.backgroundColor='yellow'
// // console.log();
// // //if we want to give color to all items

// // for (let index = 0; index < item.length; index++) {
// //     item[index].style.backgroundColor='#f4f4f4'
// // }


// // //GET_ELEMENT_BY_TAG_NAME
// // var li = document.getElementsByTagName('li')
// // // console.log(items);
// // console.log(item[1]);

// // li[1].textContent='Hello 2'
// // li[1].style.fontWeight ='Bold'
// // li[1].style.backgroundColor='yellow'
// // console.log();
// // //if we want to give color to all items

// // for (let index = 0; index < item.length; index++) {
// //     li[index].style.backgroundColor='yellow'
// // }



// //QuerySelector
// var header = document.querySelector('li')
// header.style.borderBottom='solid 4px #ccc'

// var input = document.querySelector('input')
// input.value='hello world'
// var subbmit = document.querySelector('input[type="submit"]')

// subbmit.value='Send'
// //it will get first item only
// var item= document.querySelector('.list-group-item')
// item.style.color='red'

// //now for last item
// var lastitem = document.querySelector('.list-group-item:last-child')
// lastitem.style.color='blue'

// var lastitem = document.querySelector('.list-group-item:nth-child(2')
// lastitem.style.color='purple'



//QuerySelectorAll
var title = document.querySelectorAll('.title')

console.log(title[0].textContent='Neeehaaa');

var odd= document.querySelectorAll('li:nth-child(odd)')
var even= document.querySelectorAll('li:nth-child(even)')

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor='purple';  
    even[i].style.backgroundColor='#ccc';  

}