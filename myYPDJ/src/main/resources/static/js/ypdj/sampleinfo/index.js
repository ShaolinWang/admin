layui.define([ 'form', 'laydate', 'table' ], function(exports) {
    var form = layui.form;
    var laydate = layui.laydate;
    var table = layui.table;
    var sampleinfoTable = null;
    var view ={
        init:function(){
            this.initTable();
            this.initSearchForm();
            this.initToolBar();
            window.dataReload = function(){
                Lib.doSearchForm($("#searchForm"),sampleinfoTable)
            }

        },
        initTable:function(){
            sampleinfoTable = table.render({
                elem : '#sampleinfoTable',
                height : Lib.getTableHeight(1),
                cellMinWidth: 100,
                method : 'post',
                url : Common.ctxPath + '/ypdj/sampleinfo/list.json' // 数据接口
                ,page : Lib.tablePage // 开启分页
                ,limit : 10,
                cols : [ [ // 表头
                {
                    type:'numbers',
                    title:'序号'
                },
                {
                    //选择框
                    type : 'checkbox',
                    //fixed:'left',
                },
                // {
                //
                //     field : 'sltwz',
                //     title : '缩略图',
                //     height:100,
                //     templet:'<div><img src="{{d.sltwz}}">'
                // },
                {

                    field : 'sltwz',
                    title : '缩略图',
                    height:230,
                    width: 100,
                    templet:'<div><img class="sample-info-img" style="width:100%;height:100%;" src="{{d.sltwz}}">'
                },
               /* {

                    field : 'id', 
                        title : 'id',
                    fixed:'left',
                        width : 60,
                },*/
                // {
                //
                //     field : 'sampleid',
                //         title : '样品ID',
                // },
                {

                    field : 'ypbh',
                    title : '样品编号',
                },
                {

                    field : 'ypsx',
                    title : '样品属性',
                },
                {

                    field : 'syr',
                    title : '送样人',
                },
                {

                    field : 'sysj', 
                        title : '送样时间',
                },
                // {
                //
                //     field : 'smsj',
                //         title : '扫描时间',
                // },

                // {
                //
                //     field : 'ypcc',
                //         title : '样品尺寸',
                // },
                // {
                //
                //     field : 'ypfbl',
                //         title : '样品分辨率',
                // },

                // {
                //
                //     field : 'ds',
                //         title : '导师',
                // },
                {

                    field : 'xxdw', 
                        title : '学校/单位',
                 },
                // {
                //
                //     field : 'zy',
                //         title : '专业',
                // },
                // {
                //
                //     field : 'qysj',
                //         title : '取样时间',
                // },
                // {
                //
                //     field : 'qyr',
                //         title : '取样人',
                // },
                // {
                //
                //     field : 'qyfs',
                //         title : '取样方式',
                // },
                // {
                //
                //     field : 'dw',
                //         title : '单位',
                // },
                // {
                //
                //     field : 'pj',
                //         title : '拼接',
                // },
                // {
                //
                //     field : 'yp',
                //         title : '样品',
                // },
                // {
                //
                //     field : 'ecfd',
                //         title : '二次放大',
                // },
                // {
                //
                //     field : 'yplx',
                //         title : '样品类型',
                // },
                // {
                //
                //     field : 'ctwz',
                //         title : 'CT存储位置',
                // },
                {


                    title : '操作',
                    templet : '#detailShow',
                },


        ] ]

        });

            table.on('checkbox(sampleinfoTable)', function(obj){
                var sampleinfo = obj.data;
                if(obj.checked){
                    //按钮逻辑Lib.buttonEnable()
                }else{

                }
            })

            table.on('tool(sampleinfoTable)',function(obj){
                var data = obj.data;
                if(obj.event === 'detail'){
                    //layer.msg('ID'+ data.id +'的查看操作');
                    var url = "/ypdj/sampleinfo/CKXQ.do?id="+data.id;
                    Common.openDlg(url,"样品编号:"+data.sampleid+" ");
                }
                else{

                }
            })
            // table.on('tool(sampleinfoTable)',function(obj){
            //     var download = obj.data;
            //     if(obj.event === 'detaill'){
            //         //layer.msg('ID'+ data.id +'的查看操作');
            //         // var url = "www.baidu.com";
            //         // Common.openDlg(url,"样品编号:"+data.sampleid+" ");
            //     }
            //     else{
            //
            //     }
            // })
        },

        initSearchForm:function(){
            Lib.initSearchForm( $("#searchForm"),sampleinfoTable,form);
        },
        initToolBar:function(){
            toolbar = {
                add : function() { // 获取选中数据
                    var url = "/ypdj/sampleinfo/add.do";
                    Common.openDlg(url,"样品信息管理>新增");
                },
                edit : function() { // 获取选中数目
                    var data = Common.getOneFromTable(table,"sampleinfoTable");
                    if(data==null){
                        return ;
                    }
                    var url = "/ypdj/sampleinfo/edit.do?id="+data.id;
                    Common.openDlg(url,"样品信息管理:"+data.sampleid+">编辑");
                },
                del : function() {
                    layui.use(['del'], function(){
                        var delView = layui.del
                        delView.delBatch();
                    });
                }
            ,
                exportDocument : function() {
                    layui.use([ 'sampleinfoApi' ], function() {
                        var sampleinfoApi = layui.sampleinfoApi
                        Common.openConfirm("确认要导出这些样品信息数据?", function() {
                            sampleinfoApi.exportExcel($("#searchForm"), function(fileId) {
                                Lib.download(fileId);
                            })
                        })
                    });
                },
                importDocument:function(){
                    var uploadUrl = Common.ctxPath+"/ypdj/sampleinfo/excel/import.do";
                    //模板,
                    var templatePath= "/ypdj/sampleinfo/sampleinfo_upload_template.xls";
                    //公共的简单上传文件处理
                    var url = "/core/file/simpleUpload.do?uploadUrl="+uploadUrl+"&templatePath="+templatePath;
                    Common.openDlg(url, "样品信息管理>上传");
                }
        };
            $('.ext-toolbar').on('click', function() {
                var type = $(this).data('type');
                toolbar[type] ? toolbar[type].call(this) : '';
            });
        }
    }
    exports('index',view);

});