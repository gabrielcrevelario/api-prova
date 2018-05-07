var db_string= 'mongodb://127.0.0.1/prova_api',
    mongoose = require('mongoose').connect(db_string),
    db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

db.once('open', function() {
   var questionSchema = mongoose.Schema({
           texto:String,
           type:String, 
           options:[{
            type: Schema.Types.ObjectId,
            ref:'Option'}]

   })
   var optionSchema = mongoose.Schema({
    texto:String,
    type:String,
    value:String

})




  var dataSchema = mongoose.Schema({
    name : {type:String, required:true},
    description:{type:Text, required:true},
    category:{type:String, required:true},
    base_points:{type:String, required:true},
    start_date:{type:Date,required:true},
    end_date:{type:Date,required:true},
    is_active:boolean,
    already_answered:boolean,
    questions:[{
    type: Schema.Types.ObjectId,
    ref:'Question'}]
  });

  exports.Data = mongoose.model(('Data', dataSchema),
('Question',questionSchema),('Option',optionSchema));
});