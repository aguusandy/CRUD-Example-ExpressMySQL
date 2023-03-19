
CREATE DATABASE IF NOT EXISTS datastructures;

USE datastructures;

CREATE TABLE IF NOT EXISTS structures(
    id int(11) not null auto_increment,
    name varchar(30) not null,
    description varchar(255) default null,
    primary key (id)
);

INSERT INTO structures(name,description) VALUES ('Queue','The queue data structure follows the FIFO (First In First Out) principle,the element inserted at first in the list, is the first element to be removed from the list.');
INSERT INTO structures(NAME,description) VALUES ('Stack', 'A stack follows the LIFO (Last In First Out) principle, the element inserted at the last is the first element to come out.');

SELECT * FROM structures;

SELECT * FROM structures WHERE id = 1;