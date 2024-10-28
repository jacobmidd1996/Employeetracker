SELECT department_name,title,salary
FROM department  d
LEFT JOIN roles r
ON d.id = r.department_id
ORDER BY d.department_name;



select e.id, e.first_name,e.last_name, e.role_id,r.title,r.salary,r.department_id,d.department_name
from employee e
left join roles r on e.role_id = r.id
left join department d on r.department_id = d.id;


