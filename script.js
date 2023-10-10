//1.make a button using click function
//2. if/else <== make width of each div 200 px
//3. click event to change width 200
//4. width function

//Scripts can be written in different files and then used in our programs as well.
//This cleans up the html file to make it easier to read.
$( document ).ready(function() {
    randomRects();
    function randomRects()
    {
        for(var i = 0; i< 10; i++)
        {
            var div = document.createElement("div");
            var width = parseInt(Math.random() * 350);
            div.setAttribute("style", "width:" + width +"px");
            div.setAttribute("class", "rect");
            $("#container").append(div);
        }
    }
            $("#width-fix").on("click", function(){
                $("div").each(function(){
            if ($(this).width()<=200){
                $(this).css("width", "200px");
            }
                
        });
});

       
    //Scripts can be written in different files and then used in our programs as well.
    //This cleans up the html file to make it easier to read.




});
    
