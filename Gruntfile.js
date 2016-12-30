module.exports=function(grunt){
    require('load-grunt-tasks')(grunt);
    var serveStatic = require('serve-static');
    var proxyRewrite = {
        '^/provider/': '/chuangfubao/'
    };
    grunt.initConfig({
       pkg:grunt.file.readJSON("package.json"),//��ȡjsonԪ�ļ�
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
            buildall: {//����������ԭ�ļ��ṹѹ��js�ļ���������JS�ļ�
                files: [{
                    expand:true,
                    cwd:'demo/js',//jsĿ¼��
                    src:'**/*.js',//����js�ļ�
                    dest: 'dist/js'//�������Ŀ¼��
                }]
            }
        },
        concat: {
            options: {
                separator: ';',//�ļ�֮�������ʽ������
                stripBanners: true//ȥ������ע�Ϳ�
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
        clean:['dist/*','demo/*'],
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: 'demo/**/*.js',
              //  tasks: ['copy:js','replace:js']
            }
        },
        connect: {
            options: {
                port: '9001',
                hostname: 'localhost',
                protocol: 'http',
                open: true,
                base: {
                    path: './',
                    options: {
                        index: 'demo/html/index.html'
                    }
                },
                livereload: true
            },
            proxies: [
                {
                    context: '/chuangfubao',
                    host: 'www.wxspider.com',
                    port: '80',
                    https: false,
                    changeOrigin: true,
                    rewrite: proxyRewrite
                }
            ],
            default: {},
            proxy: {
                options: {
                    middleware: function (connect, options) {
                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        // Setup the proxy
                        var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];

                        // Serve static files.
                        options.base.forEach(function (base) {
                            middlewares.push(serveStatic(base.path, base.options));
                        });

                        // Make directory browse-able.
                        /*var directory = options.directory || options.base[options.base.length - 1];
                         middlewares.push(connect.directory(directory));
                         */
                        return middlewares;
                    }
                }
            }
        }
    });
//���еı�����������json�е�keyһ��
     grunt.registerTask("default",['jshint']);
     grunt.registerTask('jshints', ['jshint']);//js����У��
     grunt.registerTask("uglifys",['uglify']);//js����ѹ��
     grunt.registerTask("copys",['copy']);//js����ѹ��
     grunt.registerTask("cleans",['clean']);//js����ѹ��
    grunt.registerTask('proxyServer', '�����������......', function () {
        grunt.task.run([
            'configureProxies:proxy',
            'connect:proxy',
            'watch'
        ]);
    });

}



///**
// * Created by Administrator on 2016/9/19.
// */
//module.exports = function(grunt) {
//    require('load-grunt-tasks')(grunt);//load-grunt-tasks   ����load���    grunt.loadNpmTasks('grunt-contrib-uglify');ԭ�ȵļ��ز����ԱȽϸ���
//    // Project configuration.
//    grunt.initConfig({
//        pkg: grunt.file.readJSON('package.json'),
//        uglify: {
//            options: {
//                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//            },
//            buildall: {//����������ԭ�ļ��ṹѹ��js�ļ���������JS�ļ�
//                files: [{
//                    expand:true,
//                    cwd:'app/view1',//jsĿ¼��
//                    src:'**/*.js',//����js�ļ�
//                    dest: 'bulidMin'//�������Ŀ¼��
//                }]
//            }
//        },
//        log: {
//            foo: [1, 2, 3],
//            bar: 'hello world',
//            baz: false
//        },
//        connect: {//grunt-contrib-connect    ��̬�ļ�������
//            options: {
//                port: 9000,
//                hostname: '*', //Ĭ�Ͼ������ֵ��������Ϊ����ĳ�� IP��localhost ������
//                livereload: 35729  //������ watch �����Ķ˿�
//            },
//
//            server: {
//                options: {
//                    open: true, //�Զ�����ҳ http://
//                    base: [
//                        'app'  //��Ŀ¼
//                    ]
//                }
//            }
//        },
//        watch: {//grunt-contrib-watch  ����ļ��ı仯
//            livereload: {
//                options: {
//                    livereload: '<%=connect.options.livereload%>'  //����ǰ�������Ķ˿�  35729
//                },
//
//                files: [  //�����ļ��ĸı�ͻ�ʵʱˢ����ҳ
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
//    //grunt-connect-proxy ������
//    grunt.registerMultiTask('log', 'Log stuff.', function() {
//        grunt.log.writeln(this.target + ': ' + this.data);
//    });
//    // ���ذ��� "uglify" ����Ĳ����
//   // grunt.loadNpmTasks('grunt-contrib-uglify');
//
//    // Ĭ�ϱ�ִ�е������б�
//    grunt.registerTask('default', ['connect',"watch"]);
//
//};//'app/view2/<%= pkg.name %>.js',