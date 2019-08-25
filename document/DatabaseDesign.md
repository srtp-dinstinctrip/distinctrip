```mysql
drop database if exists distinctrip;
create database distinctrip;
use distinctrip;

# 用户表
create table users (
	_user_id int(4) primary key not null auto_increment;
    _statu char not null;
    _pwd char(128) not null;
    name varchar(30) not null;
    mail varchar(20);
    phone varchar(11) not null;
    avatar varchar(256);
    gender char(1);
    brith data;
    registe_time data not null;
);

# 景点表
create table scenic (
    _scenic_id int(4) not null primary key auto_increment;
    _statu char(1) not null;
    _type int not null;
    name varchar(50) not null;
    introduction text;
    labels varchar(100);
    cover varchar(256);
    address varchar(100);
    city int;
    voordinate varchar(40);
    popular int;
    open_time varchar(50);
    price float;
);

# 景点图片表
create table scenic_images (
	_image_id int not null primary key auto_increment;
    _status char(1) not null;
    _belong_scenic int not null;
    path varchar(256) not null;
);

# 路书表
create table book (
	_book_id int not null primary key auto_increment;
    destination varchar(50) not null;
    onwer int not null;
    title varchar(20) not null;
    cover varchar(256);
    inscription varchar(256);
    map varchar(256);
    tips varchar(200) not null;
    scenics varchar(200) not null;
    traffic varchar(200) not null;
    epilogue text;
);

# 路书事项表
create table tips (
	_tip_id int primary key auto_increment;
    _belong_book int not null;
    _index int not null;
    _day int not null;
    title varchar(20) not null;
    introduce text;
    tip varchar(100);
    notice varchar(100);
    images varchar(200);
);

# 路书景点表
create table travel (
	_trave_id int primary key auto_increment;
    _belong_book int not null;
    _index int not null;
    _day int not null;
    time_of varchar(50) not null;
    title varchar(20) not null;
    tip varchar(100);
    introduce text;
    local_name varchar(20);
    address varchar(50);
    tel varchar(11);
    open_time time;
    cast float;
    how text;
    notice varchar(100);
    coordinate varchar(20);
    images varchar(200);
    appraise text;
);
```

