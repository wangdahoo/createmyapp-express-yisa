SET NAMES utf8;

SET TIME_ZONE = '+8:00';

CREATE DATABASE IF NOT EXISTS `demo` DEFAULT CHARSET utf8 COLLATE utf8_general_ci;

USE demo;

-- 员工表
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL DEFAULT '' COMMENT '用户名',
    `password` varchar(255) NOT NULL DEFAULT '' COMMENT '密码',
    `chinese_name` varchar(255) NOT NULL DEFAULT '' COMMENT '中文名',
    `token` varchar(255) NOT NULL DEFAULT '' COMMENT 'token',
    `expires_at` int(11)  NOT NULl DEFAULT 0 COMMENT 'token 过期时间戳',
    `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
