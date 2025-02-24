$.ajax({

    url: "./json/storebest.json",

    dataType: "json",

    success : function(data){

      if(data.length>0){



        for(var i in data){
      

          $(".box2").eq(i).append( '<div><a href="#">'+"<img src='"+data[i].url+"'/>"+'</a></div>'); 





          $(".box2").eq(i).append('<h5><a href="#">'+data[i].title+"</a><h5>");      

          $(".box2").eq(i).append('<p><a href="#">'+data[i].subtitle+"</a></p>");                             

          $(".box2").eq(i).append("<span>"+data[i].price+"</span>");



          //review random count

          var count = Math.floor(Math.random() * 100);
          $(".box2").eq(i).append("<button>"+count+" REVIEWS"+"</button>");


        }

      }

    }

  });
