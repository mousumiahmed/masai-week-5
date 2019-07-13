	
	function get_student(display_func) {
			var result = null
			var http_req = new XMLHttpRequest()
			var url = 'https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/student_marks.json'
			http_req.open('GET', url)
			http_req.send()
			http_req.onload = function(){
				if(http_req.status === 200){
				result = http_req.response
				print_data(result)
				}
				else{
			 		console.log("Error Code is:" + http_req.status);
				}
			}
	}




			var print_data = function(input){
			//console.log(input);
	 	 		if(input == null){
		  				display.textContent = 'Error! No weather data received or invalid reques'
	 		 				}
	 					 else{
					    //console.log(input)
							var json = JSON.parse(input);
							//console.log(json)
							sort_marks(json)
							function create_grid(){
								var gender = document.getElementById('gender').value
								for(i=0;i< json.length;i++){
									if(json[i].gender === gender){
										
										var value = document.createElement("div")
										var parent= document.querySelector("#grid")
										value.textContent =" Id  : " + json[i].id + "    Name   :    " +json[i].first_name +"   Gender  :  " + json[i].gender + "   Year     :   " + json[i].year + "   Marks    :   " + json[i].marks
										parent.appendChild(value);
										
									
									
									}
								}
            				}
         	  			 create_grid();

							
						}
			
				
					}
				
						function sort_marks(arr){
							var temp;

 							 for(var n=0;n<arr.length-1;n++){
  						 	 for(var i=0;i<arr.length-1;i++)
  						  	{
  						  	 	 if(arr[i].marks < arr[i+1].marks)
     							 {
      						 		 temp = arr[i].marks;
      						  		 arr[i].marks = arr[i+1].marks;
     						  		 arr[i+1].marks = temp;
         
      							  }
    						}
   
  					}
					return(arr)
				}

				
				  
				var arr = [];
				var display = document.querySelector('#print_details')
				display.addEventListener('click',function(){
				var gender = document.getElementById('gender').value
				get_student(print_data);
				});
		
		
				
			
