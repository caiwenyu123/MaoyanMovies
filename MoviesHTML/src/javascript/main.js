
$(function(){
	$.ajax({
    	type:'get',
    	url:'http://localhost:3000/getMovie',
    	dataType:'json',
    	success:function(res){
      		console.log(res)

            var i = 0;
    		for(i = 0;i < res.data.length;i ++){
//  			console.log(res.data[i].imgurl);
      			getMoiveList(res.data[i]);
    		}
    		
    		function getMoiveList(n){
    			var mainContent = document.getElementById('mainContent');
    			var listMov = document.createElement('div');
    			
    			listMov.className = 'listMovie';
    			listMov.style.width = '160px';
    			listMov.style.height = '220px';
    			
    			mainContent.append(listMov);
    			
    			var imgMov= document.createElement('img');
    			
    			imgMov.className = 'imgMovie';
    			imgMov.style.height='220px';
    			imgMov.style.width='160px';
    			imgMov.src=n.imgurl;
    			listMov.prepend(imgMov);
//  			console.log(imgMov);
//  			console.log(res.data[1].imgurl);

                var bgMov=document.createElement('div');
                bgMov.className = 'bgMovie';
                listMov.append(bgMov);      
                
                var titleMov = document.createElement('div');
                titleMov.className='titleMovie';
                titleMov.style.height='24px';
                titleMov.style.width='160px';
                titleMov.style.float='left';
                bgMov.append(titleMov);         
                                    
                var nameMov = document.createElement('div');
                nameMov.className = 'nameMovie';
                nameMov.style.height='22px';
                nameMov.style.width='115px';
                nameMov.style.display='inline-block';
                nameMov.innerHTML=n.title;
                titleMov.append(nameMov);
//              console.log(nameMov);
                
                var scoreMov = document.createElement('div');
                scoreMov.className='scoreMovie';
                scoreMov.style.height='22px';
                scoreMov.style.width= '24px';
                scoreMov.style.display='inline-block';
                scoreMov.innerHTML=n.score;
                titleMov.append(scoreMov);
//              console.log(scoreMov);
                
                var saleMov= document.createElement('div');
                saleMov.className='saleMovie'
                saleMov.innerHTML='购票';
                listMov.append(saleMov);
                

    		}
    	}
    });

})


