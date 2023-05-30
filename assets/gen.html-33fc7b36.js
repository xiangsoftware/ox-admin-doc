import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,f as i}from"./app-df7a7c33.js";const r="/ox-admin-doc/gen_code.jpg",s={},d=i(`<h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h2><p>在日常开发工作中会有许多简单重复式代码工作（包括创建数据表对应的实体，映射文件，控制层，业务层等基础类对象）一个一个的手写创建会浪费很多时间,如果使用代码生成器可以根据数据库的表反向生成我们所需要的模版及基础代码,可大大节约了开发时间,只需配置好你的数据库连接信息一键启动main方法即可快速生成基础代码为后续编写业务逻辑奠定基础。</p><h2 id="引入插件" tabindex="-1"><a class="header-anchor" href="#引入插件" aria-hidden="true">#</a> 引入插件</h2><p>Mybatis-Generator的运行方式有很多种，本开源代码生成器主要通过：基于mybatis-plus-generator-3.3.1.jar和模版引擎XML配置文件，通过Java代码和其XML配置文件配合生成需要的包文件</p><h2 id="使用教程" tabindex="-1"><a class="header-anchor" href="#使用教程" aria-hidden="true">#</a> 使用教程</h2><h4 id="_1、添加-代码生成器-依赖" tabindex="-1"><a class="header-anchor" href="#_1、添加-代码生成器-依赖" aria-hidden="true">#</a> 1、添加 代码生成器 依赖</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-plus-generator&lt;/artifactId&gt;
    &lt;version&gt;3.3.1&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、添加-模板引擎-依赖-mybatis-plus-支持-freemarker-我们使用-、velocity、beetl-用户可以选择自己熟悉的模板引擎-如果都不满足您的要求-可以采用自定义模板引擎。" tabindex="-1"><a class="header-anchor" href="#_2、添加-模板引擎-依赖-mybatis-plus-支持-freemarker-我们使用-、velocity、beetl-用户可以选择自己熟悉的模板引擎-如果都不满足您的要求-可以采用自定义模板引擎。" aria-hidden="true">#</a> 2、添加 模板引擎 依赖，MyBatis-Plus 支持 Freemarker（我们使用）、Velocity、Beetl，用户可以选择自己熟悉的模板引擎，如果都不满足您的要求，可以采用自定义模板引擎。</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-freemarker&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、编写调整配置" tabindex="-1"><a class="header-anchor" href="#_3、编写调整配置" aria-hidden="true">#</a> 3、编写调整配置</h4><p>MyBatis-Plus 的代码生成器提供了大量的自定义参数供用户选择，能够满足绝大部分人的使用需求。</p><p>下面的代码就生成器的配置文件 codeGenConf.properties（有些地方需根据自身情况修改）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># =======================常用配置==============================
# 代码输出路径
codeGen.code.output.dir=/你的工程本地目录/ox-admin/ox-admin-generator/src/main/
# 作者名（注意修改）
codeGen.Author=作者名
# 业务模块名（即生成的代码放置的modules下的目录名，例如:如果配置为sys，代码生成会放置在com.java668.oxadmin.modules.sys下
codeGen.code.module.name=sample
# 执行代码生成的表名称（多个表名用英文逗号隔开）,如果不配置，默认所有
codeGen.code.table.name=sys_user
# 表前缀，表名去除该表前缀后按驼峰命名生成实体类名，例如：如果配置sample_，则表名为sample_publisher_order,代码会生成PublisherOrder作为实体类名；若不配置，默认根据表名生成驼峰形式的实体类名
codeGen.code.table.prefix=sys

# =======================数据库相关配置==========================
codeGen.db.drivers=com.mysql.jdbc.Driver
codeGen.db.username=root
codeGen.db.pwd=你的DB密码
codeGen.db.uri=jdbc:mysql://你的数据库IP:端口/数据库名称?characterEncoding=utf8

# =======================生成器策略配置(以下配置不建议修改)==========================
# 当前项目模块Maven GroupId
codeGen.mvn.groupId=com.java668.oxadmin
# 公共字段（多个用英文逗号隔开)
codeGen.code.SuperEntityColumns=id
# Entities基类
codeGen.code.SuperEntityCls= com.java668.common.db.entity.SuperEntity
# Mapper基类
codeGen.code.SuperMapperCls=com.baomidou.mybatisplus.core.mapper.BaseMapper
# Service基类
codeGen.code.SuperServiceCls=com.baomidou.mybatisplus.extension.service.IService
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、运行" tabindex="-1"><a class="header-anchor" href="#_4、运行" aria-hidden="true">#</a> 4、运行</h4><p>找到模块下CodeGenerator类运行main方法即可:</p><p>其运行日志输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>09:41:48.838 [main] DEBUG com.baomidou.mybatisplus.generator.AutoGenerator - ==========================准备生成文件...==========================
09:41:49.031 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 创建目录： [/xxxx/ox-admin/ox-admin-generator/src/main/java/com/java668/oxadmin/modules/sample/entity]
09:41:49.032 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 创建目录： [/xxxx/ox-admin/ox-admin-generator/src/main/java/com/java668/oxadmin/modules/sample/controller]
09:41:49.032 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 创建目录： [/xxxx/ox-admin/ox-admin-generator/src/main/resources/mapper/sample]
09:41:49.032 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 创建目录： [/xxxx/ox-admin/ox-admin-generator/src/main/java/com/java668/oxadmin/modules/sample/service]
09:41:49.032 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 创建目录： [/xxxx/ox-admin/ox-admin-generator/src/main/java/com/java668/oxadmin/modules/sample/mapper]
09:41:49.033 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 创建目录： [/xxxx/ox-admin/ox-admin-generator/src/main/java/com/java668/oxadmin/modules/sample/service/impl]
09:41:49.435 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/entity.java.ftl;  文件:/xxxx/ox-admin/ox-admin-generator/src/main//java/com/java668/oxadmin/modules/sample/entity/User.java
09:41:49.440 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/mapper.java.ftl;  文件:/xxxx/ox-admin/ox-admin-generator/src/main//java/com/java668/oxadmin/modules/sample/mapper/UserMapper.java
09:41:49.445 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/mapper.xml.ftl;  文件:/xxxx/ox-admin/ox-admin-generator/src/main//resources/mapper/sample/UserMapper.xml
09:41:49.455 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/service.java.ftl;  文件:/xxxx/ox-admin/ox-admin-generator/src/main//java/com/java668/oxadmin/modules/sample/service/IUserService.java
09:41:49.460 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/serviceImpl.java.ftl;  文件:/xxxx/ox-admin/ox-admin-generator/src/main//java/com/java668/oxadmin/modules/sample/service/impl/UserServiceImpl.java
09:41:49.469 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/controller.java.ftl;  文件:/xxxx/ox-admin/ox-admin-generator/src/main//java/com/java668/oxadmin/modules/sample/controller/UserController.java
09:41:49.492 [main] DEBUG com.baomidou.mybatisplus.generator.AutoGenerator - ==========================文件生成完成！！！==========================
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自动生成的配置和代码：</p><img src="`+r+'" width="400" height="600">',19),m=[d];function l(t,o){return a(),n("div",null,m)}const u=e(s,[["render",l],["__file","gen.html.vue"]]);export{u as default};
