//����mysql���ӳ�
const mysql = require('mysql');
var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'zgwk',
    connectionLimit: 10
});
//�Ѵ����õ����ӳص���
module.exports = pool;
