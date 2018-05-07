var db = require('../db_config.js');

function returnOption(error,option, string) {
  if (error) {
    callback({ error: string })
  } else {
    callback(option);
  }
}

function assignment(attribute) {
  if (attribute) {
     option.attribute = attribute;
  }
}

exports.list = function(callback){
  db.Option.find({}, returnOption(error, options, 'Não foi possivel retornar as opções'));
};

exports.option= function(id, callback) {
  db.option.findById(id, returnOption(error, option, 'Não foi possivel retornar as opções'));
};

exports.save = function(texto,type,value, callback){
  new db.Option({
     'texto' :texto,
     'type': type,
    'value':value,
    
  }).save(returnOption(error, Option, 'Não foi possivel salvar a opção'));
};

exports.update = function(id, texto,type,values, callback) {
  db.Option.findById(id, function(error,option) {
    assignment(texto);
    assignment(type);
    assignment(value);
    
    
    
    option.save(returnOption(error, option, 'Não foi possivel salvar a opção'));
  });
};

exports.delete = function(id, callback) {
  db.Option.findById(id, function(error, option) {
    if (error) {
      callback({ error: 'Não foi possivel remover a opção' });
    } else {
      option.remove(function(error) {
        if (!error) {
          callback({ response: 'opção excluida com sucesso' });
        }
      });
    }
  });
};