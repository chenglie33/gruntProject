module.exports=function(grunt){
    require('load-grunt-tasks')(grunt);
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
                    dest: 'dist'//�������Ŀ¼��
                }]
            }
        }

    });

     // grunt.registerTask("default",['jshint']);
     //grunt.registerTask('jshints', ['jshint']);
     grunt.registerTask("uglifys",['uglify']);//���еı�����������json�е�keyһ��

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