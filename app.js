var app= require('./app_config.js'),
dataController= require('./controller/dataController.js'),
validator = require('Validator');
function valid(attribute){
    return validator.trim(validator.scape(req.param(atribute)));
}

function responseJSON(resp){
    res.json(resp);
}
app.get('/',function(req,res){
    res.end('Servidor on!');
});



app.get('/questions',function(req,res){
    questionController.list(responseJSON(resp))
});
app.get('/questions:id',function(req,res){
    var id = valid('id');

questionController.question(id,responseJSON(resp));
});


app.post('options',function(req,res){
    var type = valid('type'),
  texto = valid('texto'),
  value = valid('value')
questionController.save(type,texto,value,responseJSON(resp));
    });

    app.put('option',function(req,res){
        var id =valid('id') ,
        type = valid('type'),
        texto = valid('texto'),
       value = valid('value')
      questionController.update(type,texto,value,responseJSON(resp));
          });
        
    
        app.delete('/datas/:id', function(req, res) {
            var id = valid('id');
          
            optionController.delete(id, responseJSON(resp));
          });











app.get('/questions',function(req,res){
    questionController.list(responseJSON(resp))
});
app.get('/questions:id',function(req,res){
    var id = valid('id');

questionController.question(id,responseJSON(resp));
});


app.post('questions',function(req,res){
    var type = valid('type'),
  texto = valid('texto'),
  option= valid(option.findById);
questionController.save(type,texto,option,responseJSON(resp));
    });

    app.put('questions',function(req,res){
        var id =valid('id') ,
        type = valid('type'),
        texto = valid('texto'),
        option= valid(option.findById);
      questionController.update(type,texto,option,responseJSON(resp));
          });
        
    
        app.delete('/datas/:id', function(req, res) {
            var id = valid('id');
          
            questionController.delete(id, responseJSON(resp));
          });

app.get('/datas',function(req,res){
    dataController.list(responseJSON(resp));
});
app.get('/datas/:id',function(req,res){
    var id = valid('id');

dataController.data(id,responseJSON(resp));
});

app.post('datas',function(req,res){
    var name = valid('name'),
    description= valid('description'),
    category= valid('category'),
    base_points= valid('base_points'),
    start_date= valid('start_date'),
    end_date= valid('end_date'),
    
    is_active= valid('is_active'),
    already_answered= valid('already_answered'),
       questions= valid(question.findById);
        dataController.save(name,description,category,
        base_points,start_date,end_date,is_active,already_answered,
    questions,responseJSON(resp));
    });

    app.put('datas',function(req,res){
        var id =valid('id') ,
         name = valid('name'),
        description= valid('description'),
        category= valid('category'),
        base_points= valid('base_points'),
        start_date= valid('start_date'),
        end_date= valid('end_date'),
        
        is_active= valid('is_active'),
        already_answered= valid('already_answered'),
           questions= valid(question.findById);
            dataController.update(name,description,category,
            base_points,start_date,end_date,is_active,already_answered,
        questions,responseJSON(resp));
        });
    
        app.delete('/datas/:id', function(req, res) {
            var id = valid('id');
          
            dataController.delete(id, responseJSON(resp));
          });
