layui.define([ 'form', 'laydate', 'table' ], function(exports) {
    var form = layui.form;
    var laydate = layui.laydate;
    var table = layui.table;
    var stuBonusInfoYjsTable = null;
    var view ={
        init:function(){
            this.initTable();
            this.initSearchForm();
            this.initToolBar();
            window.dataReload = function(){
                Lib.doSearchForm($("#searchForm"),stuBonusInfoYjsTable)
            }
        },
        initTable:function(){
            stuBonusInfoYjsTable = table.render({
                elem : '#stuBonusInfoYjsTable',
                height : Lib.getTableHeight(1),
                cellMinWidth: 100,
                method : 'post',
                url : Common.ctxPath + '/zyjt/stuBonusInfoYjs/list.json' // 数据接口
                ,page : Lib.tablePage // 开启分页
                ,limit : 10,
                cols : [ [ // 表头
                     {type: 'numbers', title: '序号'},
                {
                        type : 'checkbox',
                        //fixed:'left',
                },
                /*{

                    field : 'id',
                        title : '序号',
                    fixed:'left',
                        width : 60,
                },*/
                {

                    field : 'xh', 
                        title : '学生学号',
                },
                {

                    field : 'xm', 
                        title : '学生姓名',
                },
                {

                    field : 'yx',
                        title : '院系',
                    width : 200
                },
                // {
                //
                //     field : 'zy',
                //         title : '专业',
                // },
                //{

                   // field : 'sfzh',
                   //     title : '身份证号',
                //},
                // {
                //
                //     field : 'jhkh',
                //         title : '交行卡号',
                //     width : 200
                // },
                {

                    field : 'jtje', 
                        title : '津贴金额',
                },
                {

                    field : 'dsgh',
                        title : '导师工号',
                 },
                {

                    field : 'dsxm',
                        title : '导师姓名',
                },
                {
                    field : 'dsyx',
                    title : '导师院系',
                },
                {

                    field : 'xmkh', 
                        title : '项目卡号',
                },

                //{

                //    field : 'xslx',
                 //       title : '学生类型',
                //},
                //{

                 //   field : 'sfzdtj',
                 //       title : '是否自动提交',
                //},
                {

                    field : 'dstjzt',
                    title : '导师提交状态',
                    templet: '#switchEdit',
                },
                {

                   field : 'yxtjzt',
                       title : '院系提交状态',
                },
                    {

                        field : 'jtffsj',
                        title : '发放月份',
                    },
                //{

                //    field : 'yjsydczt',
                //        title : '研究生院导出状态',
                //},
                //{

                 //   field : 'jtffsj',
                 //       title : '津贴发放时间',
                //},
                //{

                //    field : 'czr',
                //        title : '操作人',
                //},
                //{

                 //   field : 'zdtjyf',
                 //       title : '自动提交月份',
                //}
                {
                    title :'操作',
                    templet : '#detailShow',

                },
        ] ]

        });

            table.on('checkbox(stuBonusInfoYjsTable)', function(obj){
                var stuBonusInfoYjs = obj.data;
                if(obj.checked){
                    //按钮逻辑Lib.buttonEnable()
                }else{

                }
            })

            form.on('switch(dstjzt)',function (obj) {
                layui.use(['stuBonusInfoYjsApi'],function () {
                    console.log(obj.elem);//得到checkbox原始DOM对象
                    console.log(obj.elem.checked);//开关是否开启，true/false
                    console.log(obj.value)//开关value值，也可以通过obj.elem.value得到
                    console.log(obj.othis)//得到美化后的DOM对象
                    var x=obj.elem.checked;
                    layer.open({
                        content:'您确定要强制修改导师的提交状态？',
                        btn:['确定','取消'],
                        yes:function (index,layero) {
                            obj.elem.checked=x;
                            form.render();
                            layer.close(index);
                            var stuBonusInfoYjsApi=layui.stuBonusInfoYjsApi;
                            // console.log("工号"+obj.gh);
                            /*        table.on('tool(stuBonusInfoYxTable)', function(data){
                                        var data2=data.data;
                                        console.log("+++++"+data2.dsgh+"+++++++")
                                    });*/
                            //console.log(index);
                            stuBonusInfoYjsApi.dstjzt(obj.value,obj.elem.checked,function (msg) {
                                //console.log(obj.value);
                                // Common.info(msg);
                                dataReload();
                                //console.log(msg+"===========================");

                                // Lib.closeFrame();
                            })}
                        , btn2:function(index,layero){
                            obj.elem.checked=!x;
                            form.render();
                            layer.close(index);
                            //return false 开启该代码可禁止点击该按钮

                        },cancel:function(){
                            obj.elem.checked=!x;
                            form.render();
                        }
                    });
                    return false;
                });
            });

            table.on('tool(stuBonusInfoYjsTable)',function(obj){
                var data = obj.data;
                if(obj.event === 'detail'){
                    //layer.msg('ID'+ data.id +'的查看操作');
                    var url = "/zyjt/stuBonusInfoYjs/CKXQ.do?xh="+data.xh+"&dsgh="+data.dsgh+"&czr="+data.czr;
                    Common.openDlg(url,"学生津贴信息管理>"+data.id+">详情");
                }
                else{

                }
            })
        },

        initSearchForm:function(){
            Lib.initSearchForm( $("#searchForm"),stuBonusInfoYjsTable,form);
        },
        initToolBar:function(){
            toolbar = {
                add : function() { // 获取选中数据
                    var url = "/zyjt/stuBonusInfoYjs/add.do";
                    Common.openDlg(url,"学生津贴信息管理>新增");
                },
                edit : function() { // 获取选中数目
                    var data = Common.getOneFromTable(table,"stuBonusInfoYjsTable");
                    if(data==null){
                        return ;
                    }
                    var url = "/zyjt/stuBonusInfoYjs/edit.do?id="+data.id;
                    Common.openDlg(url,"学生津贴信息管理>"+data.id+">编辑");
                },
                del : function() {
                    layui.use(['del'], function(){
                        var delView = layui.del
                        delView.delBatch();
                    });
                },
                update_yxtjzt :function() {
                    layui.use([ 'stuBonusInfoYjsApi' ], function() {
                        var stuBonusInfoYjsApi = layui.stuBonusInfoYjsApi
                        Common.openConfirm("确认要修改院系提交状态?", function () {
                            stuBonusInfoYjsApi.yxtjzt($("#searchForm"),function (msg){
                                dataReload();
                            });
                        })
                    });
                },
                exportDocument_1 : function() {
                    layui.use([ 'stuBonusInfoYjsApi' ], function() {
                        var stuBonusInfoYjsApi = layui.stuBonusInfoYjsApi
                        Common.openConfirm("确认要导出这些学生津贴信息数据?", function() {
                            stuBonusInfoYjsApi.exportExcel_1_1($("#searchForm"), function(fileId) {
                                Lib.download(fileId);
                            });
                            stuBonusInfoYjsApi.exportExcel_1_2($("#searchForm"), function(fileId) {
                                Lib.download(fileId)
                            })
                        })
                    });
                },
                exportDocument_2 : function() {
                    layui.use([ 'stuBonusInfoYjsApi' ], function() {
                        var stuBonusInfoYjsApi = layui.stuBonusInfoYjsApi
                        Common.openConfirm("确认要导出这些学生津贴信息数据?", function() {
                            stuBonusInfoYjsApi.exportExcel_2($("#searchForm"), function(fileId) {
                                Lib.download(fileId);
                            })
                        })
                    });
                },
        };
            $('.ext-toolbar').on('click', function() {
                var type = $(this).data('type');
                toolbar[type] ? toolbar[type].call(this) : '';
            });
        }
    }
    exports('index',view);

});