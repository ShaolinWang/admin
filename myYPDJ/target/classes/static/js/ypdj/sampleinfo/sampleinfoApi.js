/*访问后台的代码*/
layui.define([], function(exports) {
    var api={
            updateSampleinfo:function(form,callback){
                Lib.submitForm("/ypdj/sampleinfo/update.json",form,{},callback)
            },
            addSampleinfo:function(form,callback){
                Lib.submitForm("/ypdj/sampleinfo/add.json",form,{},callback)
            },
            del:function(ids,callback){
                Common.post("/ypdj/sampleinfo/delete.json",{"ids":ids},function(){
                    callback();
                })
            }
            ,
            exportExcel:function(form,callback){
                var formPara = form.serializeJson();
                Common.post("/ypdj/sampleinfo/excel/export.json", formPara, function(fileId) {
                    callback(fileId);
                })
            }
		
    };
    exports('sampleinfoApi',api);
});