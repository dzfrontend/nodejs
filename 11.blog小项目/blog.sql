/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2018-01-24 23:23:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article_table
-- ----------------------------
DROP TABLE IF EXISTS `article_table`;
CREATE TABLE `article_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(16) NOT NULL,
  `author_src` varchar(64) NOT NULL,
  `title` varchar(50) NOT NULL,
  `post_time` int(11) NOT NULL,
  `content` text NOT NULL,
  `summary` varchar(16) NOT NULL,
  `n_like` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article_table
-- ----------------------------
INSERT INTO `article_table` VALUES ('1', 'dengzhao', 'images/img_1.jpg', '牛市', '2016211222', '牛市开启', '牛牛牛', '7');
INSERT INTO `article_table` VALUES ('2', 'dneghzoa', 'images/img_1.jpg', '牛市', '2016122333', '牛iku牛', '牛iku牛', '15');

-- ----------------------------
-- Table structure for banner_table
-- ----------------------------
DROP TABLE IF EXISTS `banner_table`;
CREATE TABLE `banner_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `sub_title` varchar(16) NOT NULL,
  `src` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner_table
-- ----------------------------
INSERT INTO `banner_table` VALUES ('1', '2999元！HTC U11 EYEs发布', '骁龙652/前置双摄/人脸识别', 'images/img_1.jpg');
INSERT INTO `banner_table` VALUES ('2', 'HTC U11 EYEs全曝光：性价比无敌', '性价比无敌', 'images/img_1.jpg');

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `src` varchar(64) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_table
-- ----------------------------
