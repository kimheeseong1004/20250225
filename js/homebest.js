$.ajax({

    url: "./json/homebest.json",

    dataType: "json",

    success : function(data){

      if(data.length>0){



        for(var i in data){
      

          $(".box").eq(i).append( '<div><a href="#">'+"<img src='"+data[i].url+"'/>"+'</a></div>'); 





          $(".box").eq(i).append('<h5><a href="#">'+data[i].title+"</a><h5>");      

          $(".box").eq(i).append('<p><a href="#">'+data[i].subtitle+"</a></p>");                             

          $(".box").eq(i).append("<span>"+data[i].price+"</span>");



          //review random count

          var count = Math.floor(Math.random() * 100);
          $(".box").eq(i).append("<button>"+count+" REVIEWS"+"</button>");


        }

      }

    }

  });



