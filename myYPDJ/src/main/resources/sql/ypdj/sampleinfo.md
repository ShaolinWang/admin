queryByCondition
===


    select 
    @pageTag(){
    t.*
    @}
    from sampleinfo t
    where del_flag=0 
    @//数据权限，该sql语句功能点  
    and #function("sampleinfo.query")#
    @if(!isEmpty(sysj)){
        and  t.SYSJ =#sysj#
    @}
    @if(!isEmpty(smsj)){
        and  t.SMSJ =#smsj#
    @}
    @if(!isEmpty(ypbh) && ypbh != '%null%'){
        and  t.YPBH like #ypbh#
    @}
    @if(!isEmpty(syr) && syr != '%null%'){
        and  t.SYR like #syr#
    @}
    @if(!isEmpty(qysj)){
        and  t.QYSJ =#qysj#
    @}
    @if(!isEmpty(qyr) && qyr != '%null%'){
        and  t.QYR like #qyr#
    @}
    @if(!isEmpty(qyfs) && qyfs != '%null%'){
        and  t.QYFS like #qyfs#
    @}
    @if(!isEmpty(ds) && ds != '%null%'){
            and  t.DS like #ds#
    @}
    
    
    

batchDelSampleinfoByIds
===


* 批量逻辑删除

    update sampleinfo set del_flag = 1 where ID  in( #join(ids)#)
    
