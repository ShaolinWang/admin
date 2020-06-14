layui.define(['table', 'sampleinfoApi'], function(exports) {
    var sampleinfoApi = layui.sampleinfoApi;
    var table=layui.table;
    var view = {
        init:function(){
        },
        delBatch:function(){
            var data = Common.getMoreDataFromTable(table,"sampleinfoTable");
            if(data==null){
                return ;
            }
            Common.openConfirm("确认要删除这些样品信息?",function(){
            var ids =Common.concatBatchId(data,"id");
            sampleinfoApi.del(ids,function(){
                Common.info("删除成功");
                    dataReload();
                })
            })
        }
    }
    exports('del',view);
	
});