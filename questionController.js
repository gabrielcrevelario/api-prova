var db = require('../db_config.js');

function returnQuestion(error, question, string) {
  if (error) {
    callback({ error: string })
  } else {
    callback(question);
  }
}

function assignment(attribute) {
  if (attribute) {
    question.attribute = attribute;
  }
}

exports.list = function(callback){
  db.Question.find({}, returnQuestion(error, datas, 'Não foi possivel retornar as questões'));
};

exports.question= function(id, callback) {
  db.question.findById(id, returnQuestion(error, question, 'Não foi possivel retornar as questões'));
};

exports.save = function(texto,type,options, callback){
  new db.Question({
     'texto' :texto,
     'type': type,
    'options':options.findById,
    
  }).save(returnQuestion(error, Question, 'Não foi possivel salvar a questão'));
};

exports.update = function(id, texto,type,options, callback) {
  db.Question.findById(id, function(error,question) {
    assignment(texto);
    assignment(type);
    assignment(category);
    assignment(options);
    
    
    question.save(returnQuestion(error, question, 'Não foi possivel salvar a questão'));
  });
};

exports.delete = function(id, callback) {
  db.Question.findById(id, function(error, question) {
    if (error) {
      callback({ error: 'Não foi possivel remover a questão' });
    } else {
      question.remove(function(error) {
        if (!error) {
          callback({ response: 'questão excluida com sucesso' });
        }
      });
    }
  });
};