var todoList=JSON.parse(localStorage.getItem('todoList')) || [{
  name:'make dinner',duedate:'2022-12-22'
},
{
  name:'wash dishs',
  duedate:2022-12-22
}];

renderToDoList();

function renderToDoList(){
  let todoListHTML='';
  for(let i=0;i< todoList.length;i++){
    const todoObject = todoList[i];

    
    const { username,duedate }=todoObject;

    
    const html=`
    <div> ${username}</div>
    <div>${duedate}</div>
    <button class="deletebutton"; onclick="todoList.splice(${i},1);
    renderToDoList();
    ">Delete</button>
    `;
    todoListHTML+=html;
  }
  document.querySelector('.final-name').innerHTML=todoListHTML;
  
 
}


function addTodo(){
    
      var element= document.querySelector('.addTodo');
    var insideElement=element.value

    var insidedate=document.querySelector('.date');
   var dob=insidedate.value

    todoList.push({
      username:insideElement,duedate:dob
    });
    
   element.value='';
   insidedate.value='';
   
   
   renderToDoList();

   localStorage.setItem('todoList',JSON.stringify(todoList));
    }

    function press(event){
      if(event.key==="Enter"){
        addTodo();
      }
    }
   


