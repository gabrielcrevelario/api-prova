var db = require('../db_config.js');

function returnData(error, data, string) {
  if (error) {
    callback({ error: string })
  } else {
    callback(data);
  }
}

function assignment(attribute) {
  if (attribute) {
    data.attribute = attribute;
  }
}

exports.list = function(callback){
  db.Data.find({}, returnData(error, datas, 'Não foi possivel retornar as datas'));
};

exports.data= function(id, callback) {
  db.data.findById(id, returnData(error, data, 'Não foi possivel retornar a data'));
};

exports.save = function(name,description,category,
    base_points,start_date,end_date,is_active,already_answered,
questions, callback){
  new db.Data({
    'name' : name
    ,'description' :description
    ,'category': category,
   'base_points':base_points
    ,'start_date':new Date()
    ,'end_date':new Date(),
    'is_active':is_active,
    'already_answered':already_answered,
    'questions':questions.findById,
    
  }).save(returnData(error, Data, 'Não foi possivel salvar a Data'));
};

exports.update = function(id, name,description,category,
    base_points,start_date,end_date,is_active,already_answered,
questions, callback) {
  db.Data.findById(id, function(error, data) {
    assignment(name);
    assignment(description);
    assignment(category);
    assignment(base_points);
    assignment(start_date);
    assignment(end_date);
    assignment(is_active);
    assignment(already_answered);
    assignment(questions);
    
    
    data.save(returnData(error, data, 'Não foi possivel salvar a Data'));
  });
};

exports.delete = function(id, callback) {
  db.Data.findById(id, function(error, data) {
    if (error) {
      callback({ error: 'Não foi possivel remover data' });
    } else {
      data.remove(function(error) {
        if (!error) {
          callback({ response: 'data excluida com sucesso' });
        }
      });
    }
  });
};