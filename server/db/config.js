/*create a schema */
CREATE SCHEMA `mjd3001` ;


/* create a table */
CREATE TABLE `mjd3`.`loginifl` (
  `id` INT NOT NULL,
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `nickname` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

/*issert content*/
insert into loginifl (username, `password`, nickname) value ('wanglewis', '36287', '开往未来的火车')
insert into loginifl (username, `password`, nickname) value ('wangziping', '287', '野狼养大')
insert into loginifl (username, `password`, nickname) value ('wangjinping', 'jljlk287', '百合花般的颜色')

/*query*/
select * from loginifl;
select username from loginifl;
select * from loginifl where id='1';
select * from loginifl where id<>'1';
select * from loginifl where id='1' and `password`='36287';
select * from loginifl where id='2' or `password`='36287';
select * from loginifl where username like '%wang%'; /*模糊查询*/
select * from loginifl where username like '%wang%' order by id;
select * from loginifl where username like '%wang%' order by id desc; /*倒序查询*/

/*update*/
update loginifl set username='jiangxians' where username='wangzheng';


/*close safe-updates mode*/
SET SQL_SAFE_UPDATES=0;

/*delete*/
delete from loginifl where username="wangjinping";
update loginifl set status='0' where username='jiangxians';
