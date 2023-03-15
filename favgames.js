
//comments array
let comm = [];

// saved items array
let itemsSaved = [];

function pageLoad(){
    // creates storage for saved for later items
    if (sessionStorage.getItem("storedItems") === null){
        sessionStorage.setItem("storedItems", JSON.stringify(itemsSaved));
        
    }

    //creates storage for comments
    if (sessionStorage.getItem("commentsSection") === null){
        
        sessionStorage.setItem("commentsSection", JSON.stringify(comm));
    }
    else{
        comm = JSON.parse(sessionStorage.getItem("commentsSection"));

        let commentDiv = document.getElementById("comDiv");

        comm.forEach(function(b, i){
            console.log(comm[i]);

            let commentElement = document.createElement("p");
            commentElement.innerHTML = comm[i];

            commentDiv.appendChild(commentElement);

        })     
    }
}

// function adding comments 
    function addComment(){
        comm = JSON.parse(sessionStorage.getItem("commentsSection"));

        let comment = document.getElementById("commId").value;
        
        
        comm.push(comment);
      

        sessionStorage.setItem("commentsSection", JSON.stringify(comm));
        document.location.reload();
    };



    // like function - hearts

function myFunction() {
    const myNodelist = document.querySelectorAll(".emptyheart");
    for (let i = 0; i < myNodelist.length; i++) {
        myNodelist[i].addEventListener("click", function(){
            myNodelist[i].src = "Pictures/heartfull.png";
        })
      
    }
  };

  myFunction();


// saved for later page load function

  function savedPageLoad(){

         itemsSaved = JSON.parse(sessionStorage.getItem("storedItems"))
 
         loadItems();
 
         function loadItems(){
             itemsSaved.forEach(function(p){
                 let newParag = document.createElement("p");
                 let storageD = document.getElementById("storageDiv");
                 let spacing = document.createElement("br");
                console.log("p inner" + p);
                 newParag.textContent = p.parText;
 
                 storageD.appendChild(newParag);
                 storageD.appendChild(spacing);
 
             })
     }
 }
 
 // adding paragraphs to save for later array
 function Tostore(parText){
    this.parText = parText;
 }

 function addParagraph(item){
    
     itemsSaved = JSON.parse(sessionStorage.getItem("storedItems"));
 
     let addPar = new Tostore(
        item.innerHTML,
     )

     itemsSaved.push(addPar);
     alert("You have stored " + itemsSaved.length + " paragraph(s)");
     sessionStorage.setItem("storedItems", JSON.stringify(itemsSaved));
 }
