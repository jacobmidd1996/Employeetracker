INSERT INTO department (department_name)
VALUES ('Marketing'),
       ('sales'),
       ('customer service'),
       ('backend'),
       ('custodial');

INSERT INTO roles (title,salary,department_id)
VALUES ('Marketing Manager',123221,1),
       ('sales rep',20000,2),
       ('customer service manager',23737,3),
       ('marketing rep',233433,1),
       ('backend worker',20000,4),
       ('custodial lead',40000,5),
       ('sales manager',29393,2);


       insert into employee (first_name,last_name,role_id,manager_id)
       VALUES ('Bruce','Wayne',1,null), - 1 market
       ('Jason','Todd',3,null), - 2 customer
       ('Steven','Grant',7,null) - 3 sales
       ('Peter','Quill',2,3),
       ('Matt','Murdock',4,1),
       ('Oliver','Queen',4,1)
       ('Mark','Spector',5,null)
       