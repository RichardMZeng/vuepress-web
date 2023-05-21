(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{323:function(n,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("Nacos 是 Dynamic Naming and Configuration Service的首字母简称，一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。")]),n._v(" "),a("p",[n._v("本篇记录一下在"),a("code",[n._v("Ubuntu 20.04")]),n._v("系统上配置Nacos的过程。\n")]),n._v(" "),a("h2",{attrs:{id:"_1-下载nacos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载nacos"}},[n._v("#")]),n._v(" 1.下载nacos")]),n._v(" "),a("p",[n._v("nacos官方文档: "),a("a",{attrs:{href:"https://nacos.io/zh-cn/docs/what-is-nacos.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("Nacos"),a("OutboundLink")],1)]),n._v(" "),a("p",[n._v("下载路径: "),a("a",{attrs:{href:"https://github.com/alibaba/nacos/releases",target:"_blank",rel:"noopener noreferrer"}},[n._v("GitHub"),a("OutboundLink")],1)]),n._v(" "),a("h2",{attrs:{id:"_2-解压nacos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解压nacos"}},[n._v("#")]),n._v(" 2.解压nacos")]),n._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-zxvf")]),n._v(" nacos-server-2.2.0.tar.gz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-C")]),n._v("  /usr/local/opt/\n")])])]),a("h2",{attrs:{id:"_2-nacos-mysql数据库结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-nacos-mysql数据库结构"}},[n._v("#")]),n._v(" 2.nacos mysql数据库结构")]),n._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("/******************************************/\n/*   表名称 = config_info                  */\n/******************************************/\nCREATE TABLE `config_info` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',\n  `data_id` varchar(255) NOT NULL COMMENT 'data_id',\n  `group_id` varchar(128) DEFAULT NULL,\n  `content` longtext NOT NULL COMMENT 'content',\n  `md5` varchar(32) DEFAULT NULL COMMENT 'md5',\n  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',\n  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',\n  `src_user` text COMMENT 'source user',\n  `src_ip` varchar(50) DEFAULT NULL COMMENT 'source ip',\n  `app_name` varchar(128) DEFAULT NULL,\n  `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',\n  `c_desc` varchar(256) DEFAULT NULL,\n  `c_use` varchar(64) DEFAULT NULL,\n  `effect` varchar(64) DEFAULT NULL,\n  `type` varchar(64) DEFAULT NULL,\n  `c_schema` text,\n  `encrypted_data_key` text NOT NULL COMMENT '密钥',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_configinfo_datagrouptenant` (`data_id`,`group_id`,`tenant_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info';\n\n/******************************************/\n/*   表名称 = config_info_aggr             */\n/******************************************/\nCREATE TABLE `config_info_aggr` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',\n  `data_id` varchar(255) NOT NULL COMMENT 'data_id',\n  `group_id` varchar(128) NOT NULL COMMENT 'group_id',\n  `datum_id` varchar(255) NOT NULL COMMENT 'datum_id',\n  `content` longtext NOT NULL COMMENT '内容',\n  `gmt_modified` datetime NOT NULL COMMENT '修改时间',\n  `app_name` varchar(128) DEFAULT NULL,\n  `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_configinfoaggr_datagrouptenantdatum` (`data_id`,`group_id`,`tenant_id`,`datum_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='增加租户字段';\n\n\n/******************************************/\n/*   表名称 = config_info_beta             */\n/******************************************/\nCREATE TABLE `config_info_beta` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',\n  `data_id` varchar(255) NOT NULL COMMENT 'data_id',\n  `group_id` varchar(128) NOT NULL COMMENT 'group_id',\n  `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',\n  `content` longtext NOT NULL COMMENT 'content',\n  `beta_ips` varchar(1024) DEFAULT NULL COMMENT 'betaIps',\n  `md5` varchar(32) DEFAULT NULL COMMENT 'md5',\n  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',\n  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',\n  `src_user` text COMMENT 'source user',\n  `src_ip` varchar(50) DEFAULT NULL COMMENT 'source ip',\n  `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',\n  `encrypted_data_key` text NOT NULL COMMENT '密钥',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_configinfobeta_datagrouptenant` (`data_id`,`group_id`,`tenant_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info_beta';\n\n/******************************************/\n/*   表名称 = config_info_tag              */\n/******************************************/\nCREATE TABLE `config_info_tag` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',\n  `data_id` varchar(255) NOT NULL COMMENT 'data_id',\n  `group_id` varchar(128) NOT NULL COMMENT 'group_id',\n  `tenant_id` varchar(128) DEFAULT '' COMMENT 'tenant_id',\n  `tag_id` varchar(128) NOT NULL COMMENT 'tag_id',\n  `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',\n  `content` longtext NOT NULL COMMENT 'content',\n  `md5` varchar(32) DEFAULT NULL COMMENT 'md5',\n  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',\n  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',\n  `src_user` text COMMENT 'source user',\n  `src_ip` varchar(50) DEFAULT NULL COMMENT 'source ip',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_configinfotag_datagrouptenanttag` (`data_id`,`group_id`,`tenant_id`,`tag_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info_tag';\n\n/******************************************/\n/*   表名称 = config_tags_relation         */\n/******************************************/\nCREATE TABLE `config_tags_relation` (\n  `id` bigint(20) NOT NULL COMMENT 'id',\n  `tag_name` varchar(128) NOT NULL COMMENT 'tag_name',\n  `tag_type` varchar(64) DEFAULT NULL COMMENT 'tag_type',\n  `data_id` varchar(255) NOT NULL COMMENT 'data_id',\n  `group_id` varchar(128) NOT NULL COMMENT 'group_id',\n  `tenant_id` varchar(128) DEFAULT '' COMMENT 'tenant_id',\n  `nid` bigint(20) NOT NULL AUTO_INCREMENT,\n  PRIMARY KEY (`nid`),\n  UNIQUE KEY `uk_configtagrelation_configidtag` (`id`,`tag_name`,`tag_type`),\n  KEY `idx_tenant_id` (`tenant_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_tag_relation';\n\n/******************************************/\n/*   表名称 = group_capacity               */\n/******************************************/\nCREATE TABLE `group_capacity` (\n  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',\n  `group_id` varchar(128) NOT NULL DEFAULT '' COMMENT 'Group ID，空字符表示整个集群',\n  `quota` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '配额，0表示使用默认值',\n  `usage` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '使用量',\n  `max_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个配置大小上限，单位为字节，0表示使用默认值',\n  `max_aggr_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '聚合子配置最大个数，，0表示使用默认值',\n  `max_aggr_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值',\n  `max_history_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最大变更历史数量',\n  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',\n  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_group_id` (`group_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='集群、各Group容量信息表';\n\n/******************************************/\n/*   表名称 = his_config_info              */\n/******************************************/\nCREATE TABLE `his_config_info` (\n  `id` bigint(20) unsigned NOT NULL,\n  `nid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,\n  `data_id` varchar(255) NOT NULL,\n  `group_id` varchar(128) NOT NULL,\n  `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',\n  `content` longtext NOT NULL,\n  `md5` varchar(32) DEFAULT NULL,\n  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  `src_user` text,\n  `src_ip` varchar(50) DEFAULT NULL,\n  `op_type` char(10) DEFAULT NULL,\n  `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',\n  `encrypted_data_key` text NOT NULL COMMENT '密钥',\n  PRIMARY KEY (`nid`),\n  KEY `idx_gmt_create` (`gmt_create`),\n  KEY `idx_gmt_modified` (`gmt_modified`),\n  KEY `idx_did` (`data_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='多租户改造';\n\n\n/******************************************/\n/*   表名称 = tenant_capacity              */\n/******************************************/\nCREATE TABLE `tenant_capacity` (\n  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',\n  `tenant_id` varchar(128) NOT NULL DEFAULT '' COMMENT 'Tenant ID',\n  `quota` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '配额，0表示使用默认值',\n  `usage` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '使用量',\n  `max_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个配置大小上限，单位为字节，0表示使用默认值',\n  `max_aggr_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '聚合子配置最大个数',\n  `max_aggr_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值',\n  `max_history_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最大变更历史数量',\n  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',\n  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_tenant_id` (`tenant_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='租户容量信息表';\n\n\nCREATE TABLE `tenant_info` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',\n  `kp` varchar(128) NOT NULL COMMENT 'kp',\n  `tenant_id` varchar(128) default '' COMMENT 'tenant_id',\n  `tenant_name` varchar(128) default '' COMMENT 'tenant_name',\n  `tenant_desc` varchar(256) DEFAULT NULL COMMENT 'tenant_desc',\n  `create_source` varchar(32) DEFAULT NULL COMMENT 'create_source',\n  `gmt_create` bigint(20) NOT NULL COMMENT '创建时间',\n  `gmt_modified` bigint(20) NOT NULL COMMENT '修改时间',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_tenant_info_kptenantid` (`kp`,`tenant_id`),\n  KEY `idx_tenant_id` (`tenant_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='tenant_info';\n\nCREATE TABLE `users` (\n\t`username` varchar(50) NOT NULL PRIMARY KEY,\n\t`password` varchar(500) NOT NULL,\n\t`enabled` boolean NOT NULL\n);\n\nCREATE TABLE `roles` (\n\t`username` varchar(50) NOT NULL,\n\t`role` varchar(50) NOT NULL,\n\tUNIQUE INDEX `idx_user_role` (`username` ASC, `role` ASC) USING BTREE\n);\n\nCREATE TABLE `permissions` (\n    `role` varchar(50) NOT NULL,\n    `resource` varchar(255) NOT NULL,\n    `action` varchar(8) NOT NULL,\n    UNIQUE INDEX `uk_role_permission` (`role`,`resource`,`action`) USING BTREE\n);\n\nINSERT INTO users (username, password, enabled) VALUES ('nacos', '$2a$10$EuWPZHzz32dJN7jexM34MOeYirDdFAZm2kuWj7VEOJhhZkDrxfvUu', TRUE);\n\nINSERT INTO roles (username, role) VALUES ('nacos', 'ROLE_ADMIN');\n")])])]),a("h2",{attrs:{id:"_3-nacos持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-nacos持久化"}},[n._v("#")]),n._v(" 3，nacos持久化")]),n._v(" "),a("p",[n._v("在0.7版本之前，在单机模式时nacos使用嵌入式数据库实现数据的存储，不方便观察数据存储的基本情况。")]),n._v(" "),a("p",[n._v("0.7版本增加了支持mysql数据源能力，所以只要使用0.7及以上版本的nacos,便可以配置mysql数据库，可视化的查看数据的存储情况了。")]),n._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 检查通讯情况 打开端口")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" ufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("8848")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# bin目录下启动")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("bash")]),n._v(" startup.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-m")]),n._v(" standalone\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 备份nacos")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("cp")]),n._v("  application.properties  application-copy.properties\n\n")])])]),a("p",[n._v("修改application.propertie设置")]),n._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#*************** Config Module Related Configurations ***************#")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("### If use MySQL as datasource:")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[n._v("spring.datasource.platform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[n._v("mysql")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("### Count of DB:")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[n._v("db.num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[n._v("1")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("### Connect URL of DB:")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[n._v("db.url.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[n._v("jdbc:mysql://127.0.0.1:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[n._v("db.user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[n._v("root")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[n._v("db.password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[n._v("123456")]),n._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);