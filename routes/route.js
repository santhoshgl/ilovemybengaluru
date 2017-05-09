exports.home=function(req,res){
  res.render('home',{title:'ilovemybengaluru',
                    headline:'Namma Bengaluru is the best city in the world!'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=4;

    if(cityName==='infosys'){
       title="infosys";
       heading="Infosys founder by Narayan Murthy.";
    }
    else if(cityName==='nationalpark'){
       title="nationalpark";
       heading="bannergatta nationale park ";
    }
    else if(cityName==='vidhansoudha'){
       title="vidhansoudha";
       heading="Vidhansoudha was costructed by Kengal Hanumanthaya";
    }
    else if(cityName==='palace'){
       title="palace";
       heading="Bengaluru palace";
    }
    else if(cityName==='wonderla'){
       title="wonderla";
       heading="Most beautiful amusement park";
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
