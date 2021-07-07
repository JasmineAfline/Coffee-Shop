if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', loaded)
} else {
    loaded()
}
function openForm() {
    document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}
function testJS()
{

var b = document.getElementById('card-text').value

document.getElementById('cart-price').innerHTML = b;

}
function allItems(){
    var x=document.getElementById('popupForm')
    var b=[]
    b.append(b)
    document.getElementById('quantity').innerHTML=b.length()
}
// function closePay() {
//     document.getElementById("containers").style.display = "none";
// }
// function loaded() {
//     var addToCart = document.getElementsByClassName('shop')
//     for (var i = 0; i < addToCart.length; i++) {
//         var button = addToCart[i]
//         button.addEventListener('click', buttonClicked)
//     }
//     document.getElementsByClassName('shop')[0].addEventListener('click', purchased)
// }

// function buttonClicked() {
//     var jina = document.getElementsByClassName('name')[0].value
//     var pesa = document.getElementsByClassName('item-price')[0].value
//     var picha = document.getElementsByClassName('item')[0].src
//     addItemToCart(jina, pesa, picha)
// }
// function addItemToCart(name1, cash, picture) {
//     document.getElementsByClassName('item-name')[0].appendChild(name1)
//     document.getElementsByClassName('cart-price')[0].appendChild(cash)
//     document.getElementsByClassName('item-image')[0].appendChild(picture)
// }







function setNewImage(){
document.getElementById("coff1").src="tonic.jpg";
}
function setOldImage(){
   document.getElementById("coff1").src="coffee images/Cappucino.jpg"
   
}


function setNewImage1(){
    document.getElementById("coff2"). src="irish.jpeg";
    }                         
    function setOldImage1(){
       document.getElementById("coff2").src="coffee images/Hazelnut.jpg"
       
    }


    function setNewImage2(){
        document.getElementById("coff3"). src="iced.jpeg";
        }
        function setOldImage2(){
           document.getElementById("coff3").src="coffee images/icecreamcoffee.jpg"
           
        }



        function setNewImage3(){
            document.getElementById("coff4"). src="correto.jpg";
            }
            function setOldImage3(){
               document.getElementById("coff4").src="coffee images/Latte coffee.jpg"
               
            }  



            function setNewImage4(){
                document.getElementById("coff5"). src="affogato.jpg";
                }
                function setOldImage4(){
                   document.getElementById("coff5").src="coffee images/carammel2.jpg"
                   
                }



                function setNewImage5(){
                    document.getElementById("coff6"). src="mocha.jpg";
                    }
                    function setOldImage5(){
                       document.getElementById("coff6").src="coffee images/macho.jpg"
                       
                    }      
