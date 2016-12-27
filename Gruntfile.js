module.exports=function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
       pkg:grunt.file.readJSON("package.json"),//读取json元文件
        jshint:{
            build:['demo/**/*.js'],
            options:{
                jshintrc:'.jshintrc'
            }
        },
        uglify: {
            options: {
               banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            buildall: {//任务三：按原文件结构压缩js文件夹内所有JS文件
                files: [{
                    expand:true,
                    cwd:'demo/js',//js目录下
                    src:'**/*.js',//所有js文件
                    dest: 'dist/js'//输出到此目录下
                }]
            }
        },
        concat: {
            options: {
                separator: ';',//文件之间隔开方式“；”
                stripBanners: true//去除代码注释块
            },
            dist: {
                src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
                dest: 'dist/built.js',
            },
        },
        copy: {
            main: {
                expand: true,
                cwd: 'demo/page',
                src: '**',
                dest: 'dist/page',
                filter: 'isFile',
            },
        },
        clean:['dist/*','demo/*']
    });
//所有的别名不可以与json中的key一样
     grunt.registerTask("default",['jshint']);
     grunt.registerTask('jshints', ['jshint']);//js代码校验
     grunt.registerTask("uglifys",['uglify']);//js代码压缩
     grunt.registerTask("copys",['copy']);//js代码压缩
     grunt.registerTask("cleans",['clean']);//js代码压缩

}



///**
// * Created by Administrator on 2016/9/19.
// */
//module.exports = function(grunt) {
//    require('load-grunt-tasks')(grunt);//load-grunt-tasks   批量load插件    grunt.loadNpmTasks('grunt-contrib-uglify');原先的加载插件相对比较复杂
//    // Project configuration.
//    grunt.initConfig({
//        pkg: grunt.file.readJSON('package.json'),
//        uglify: {
//            options: {
//                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//            },
//            buildall: {//任务三：按原文件结构压缩js文件夹内所有JS文件
//                files: [{
//                    expand:true,
//                    cwd:'app/view1',//js目录下
//                    src:'**/*.js',//所有js文件
//                    dest: 'bulidMin'//输出到此目录下
//                }]
//            }
//        },
//        log: {
//            foo: [1, 2, 3],
//            bar: 'hello world',
//            baz: false
//        },
//        connect: {//grunt-contrib-connect    静态文件服务器
//            options: {
//                port: 9000,
//                hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
//                livereload: 35729  //声明给 watch 监听的端口
//            },
//
//            server: {
//                options: {
//                    open: true, //自动打开网页 http://
//                    base: [
//                        'app'  //主目录
//                    ]
//                }
//            }
//        },
//        watch: {//grunt-contrib-watch  监控文件的变化
//            livereload: {
//                options: {
//                    livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
//                },
//
//                files: [  //下面文件的改变就会实时刷新网页
//                    'app/*.html',
//                    'app/style/{,*/}*.css',
//                    'app/scripts/{,*/}*.js',
//                    'app/images/{,*/}*.{png,jpg}'
//                ]
//            }
//        }
//
//
//    });
//
//    //grunt-connect-proxy 代理插件
//    grunt.registerMultiTask('log', 'Log stuff.', function() {
//        grunt.log.writeln(this.target + ': ' + this.data);
//    });
//    // 加载包含 "uglify" 任务的插件。
//   // grunt.loadNpmTasks('grunt-contrib-uglify');
//
//    // 默认被执行的任务列表。
//    grunt.registerTask('default', ['connect',"watch"]);
//
//};//'app/view2/<%= pkg.name %>.js',