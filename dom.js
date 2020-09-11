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



// //QuerySelectorAll
// var title = document.querySelectorAll('.title')

// console.log(title[0].textContent='Neeehaaa');

// var odd= document.querySelectorAll('li:nth-child(odd)')
// var even= document.querySelectorAll('li:nth-child(even)')

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor='purple';  
//     even[i].style.backgroundColor='#ccc';  

// }

 //TRAVERSING THE DOM   

 var itemList = document.querySelector('#items')

// //parentNode
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor='yellow'

// console.log(itemList.parentNode.parentNode)
// itemList.parentNode.parentNode.style.backgroundColor='blue'

// //parentElement
// console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor='yellow'

// console.log(itemList.parentElement.parentElement)
// itemList.parentElement.parentElement.style.backgroundColor='black'


// //childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);

// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor='#ccc'

// //firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello1'


// //Lastelementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello4'


// //NextSibling

// console.log(itemList.nextSibling) //gve us text space

// //nextElementSibling
// console.log(itemList.nextElementSibling)


// // //PreviousSibling

// // console.log(itemList.previousSibling)

// // //nextElementSibling
// console.log(itemList.previousElementSibling)

// itemList.previousElementSibling.style.color='green'


//Now creating Elements

//create a div

// var newDiv=document.createElement('div')

// //Add Class
// newDiv.className='hello'
// //Add Id
// newDiv.id='idhello'

// //Add attribute
// newDiv.setAttribute('title','Title bro  ')

// //Create text node
// var newDivText = document.createTextNode('New Wolrrld')

// //Add text to div
// newDiv.appendChild(newDivText)
// console.log(newDiv);
// //puting in html
// var container=document.querySelector('header .container')
// var h1= document.querySelector('header h1')

// console.log(newDiv)
// newDiv.style.fontSize='55px'
// container.insertBefore(newDiv,h1);
 
// //OLD Method 

// function buttonClick1(){
//     console.log('Button clicked');
// }

// var button = document.getElementById('button').addEventListener(
//     'click',function(){
//         console.log(123);
//     })




// EVENTS

// var button = document.getElementById('button').addEventListener(
//     'click',buttonClick1)
// function buttonClick1(e){
    // // console.log('Button clicked');
    // document.getElementById('header-title').textContent='Changed'
    // document.querySelector('#main').style.backgroundColor='#f4f4f4'

//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);

//     var output= document.getElementById('output')
//    output.innerHTML='<h3>'+e.target.id+'<h3>' 

// //    console.log(e.type);

// console.log(e.clientX);//from screen 
// console.log(e.clientY);

// console.log(e.offsetX);//from the button
// console.log(e.offsetY);//from the button

// console.log(e.altKey); //alt+click
// console.log(e.ctrlKey);
// console.log(e.shiftKey);

// var button = document.getElementById('button').addEventListener(
//     'click',runEvent)//single click
    // var button = document.getElementById('button').addEventListener(
    //     'dblclick',runEvent)//double click
    // var button = document.getElementById('button').addEventListener(
    //     'mousedown',runEvent)//mouse down click
        // var button = document.getElementById('button').addEventListener(
        //     'mouseup',runEvent)//mouse up click

    // var button = document.getElementById('button')
//     var box= document.getElementById('box')

//    // box.addEventListener('mouseenter',runEvent)
//     //box.addEventListener('mouseleave',runEvent)

// //     box.addEventListener('mouseover',runEvent)
// //    // box.addEventListener('mouseout',runEvent)
//    box.addEventListener('mousemove',runEvent)

var itemInput = document.querySelector('input[type="text"]')
var form= document.querySelector('form')

var select= document.querySelector('select')


// itemInput.addEventListener('keydown',runEvent)
// itemInput.addEventListener('keyup',runEvent)
// itemInput.addEventListener('keypress',runEvent)

// itemInput.addEventListener('blur',runEvent)
// itemInput.addEventListener('focus',runEvent)


// itemInput.addEventListener('cut',runEvent)
// itemInput.addEventListener('paste',runEvent)

// select.addEventListener('change',runEvent)

    //     function runEvent(event) {
    // console.log('Event Type'+event.type)}

    form.addEventListener('submit',runEvent)


    function runEvent(e) {
    e.preventDefault()
    // output.innerHTML='<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>'

    // box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)"
    
    console.log('Event Type'+e.type);
    // console.log('Value'+e.target.value);
   // console.log(e.target.value);
    // document.getElementById('output').innerHTML='<h3>'
    // +e.target.value+'</h3>'
}

