        var mouseEvent = "empty";
        var color="";
        var radius=0;
        var width=0;
        canvas = document.getElementById('myCanvas');
        ctx = canvas.getContext("2d");

        canvas.addEventListener("mousedown",my_mousedown);
            
            function my_mousedown(e){  
                color = document.getElementById("color").value;
                radius = document.getElementById("radius").value;
                width = document.getElementById("width").value;
                console.log(color);
                console.log(radius);
                console.log(width);
                mouseEvent="mouseDown";
            }

        canvas.addEventListener("mousemove", my_mouseMove);

            function my_mouseMove(e){
                current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
                current_position_of_mouse_y = e.clientY-canvas.offsetTop;
        
                if(mouseEvent=="mouseDown"){
                    console.log("Current Position Of X and Y coordinates=")
                    console.log("X=",current_position_of_mouse_x,"Y=", current_position_of_mouse_y);
                    ctx.beginPath();
                    ctx.strokeStyle=color;
                    ctx.lineWidth=width;
                    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
                    ctx.stroke();
                }
            }

        canvas.addEventListener("mouseup", my_mouseup);
        function my_mouseup(e){
        mouseEvent="mouseup";
        }

        canvas.addEventListener("mouseleave", my_mouseup);
        function my_mouseup(e){
        mouseEvent="mouseleave";
        }

        function cleararea(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
        }
