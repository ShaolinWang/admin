package com.corp.ypdj.web.query;

import com.ibeetl.admin.core.annotation.Query;
import com.ibeetl.admin.core.util.enums.CoreDictType;
import com.ibeetl.admin.core.web.query.PageParam;
import java.util.Date;
/**
 *Sampleinfo查询
 */
public class SampleinfoQuery extends PageParam {
    @Query(name = "送样时间", display = true,type = Query.TYPE_CONTROL,control = "date1")
    private String sysj;
    @Query(name = "扫描时间", display = true,type = Query.TYPE_CONTROL,control = "date2")
    private String smsj;
    @Query(name = "取样时间", display = true,type = Query.TYPE_CONTROL,control = "date3")
    private String qysj;
    @Query(name = "样品编号", display = true)        
    private String ypbh;
    @Query(name = "送样人", display = true)
    private String syr;
    @Query(name = "取样人", display = true)        
    private String qyr;
    @Query(name = "取样方式", display = true)        
    private String qyfs;
    @Query(name = "导师", display = true)
    private String ds;
    public String getSysj(){
        return  sysj;
    }


    public void setSysj(String sysj ){
        this.sysj = sysj;
    }
    public String getSmsj(){
        return  smsj;
    }
    public void setSmsj(String smsj ){
        this.smsj = smsj;
    }
    public String getYpbh(){
        return  ypbh;
    }
    public void setYpbh(String ypbh ){
        this.ypbh = ypbh;
    }
    public String getSyr(){
        return  syr;
    }
    public void setSyr(String syr ){
        this.syr = syr;
    }
    public String getQysj(){
        return  qysj;
    }
    public void setQysj(String qysj ){
        this.qysj = qysj;
    }
    public String getQyr(){
        return  qyr;
    }
    public void setQyr(String qyr ){
        this.qyr = qyr;
    }
    public String getQyfs(){
        return  qyfs;
    }
    public void setQyfs(String qyfs ){
        this.qyfs = qyfs;
    }

    public void setDs(String ds ){
        this.ds = ds;
    }
    public String getDs(){
        return  ds;
    }
}
