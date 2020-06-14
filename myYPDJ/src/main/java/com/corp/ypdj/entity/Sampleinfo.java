package com.corp.ypdj.entity;

import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

import org.beetl.sql.core.annotatoin.AutoID;
import org.beetl.sql.core.annotatoin.SeqID;

import com.ibeetl.admin.core.util.ValidateConfig;

import org.beetl.sql.core.TailBean;
import java.math.*;

import com.ibeetl.admin.core.annotation.Dict;
import com.ibeetl.admin.core.entity.BaseEntity;

import org.beetl.sql.core.annotatoin.InsertIgnore;
import org.beetl.sql.core.annotatoin.Version;
import org.beetl.sql.core.annotatoin.LogicDelete;


/* 
* 
* gen by Spring Boot2 Admin 2019-06-20
*/
public class Sampleinfo extends BaseEntity{

    @NotNull(message = "ID不能为空", groups =ValidateConfig.UPDATE.class)
    @SeqID(name = ORACLE_CORE_SEQ_NAME)
    @AutoID	

    private Integer id ;
	
    //样品ID

    private String sampleid ;
	
    //送样时间

    private String sysj ;
	
    //扫描时间

    private String smsj ;
	
    //样品编号

    private String ypbh ;
	
    //样品属性

    private String ypsx ;
	
    //样品尺寸

    private String ypcc ;
	
    //样品分辨率

    private String ypfbl ;
	
    //送样人

    private String syr ;
	
    //导师

    private String ds ;
	
    //学校/单位

    private String xxdw ;
	
    //专业

    private String zy ;
	
    //取样时间

    private String qysj ;
	
    //取样人

    private String qyr ;
	
    //取样方式

    private String qyfs ;
	
    //单位

    private String dw ;
	
    //拼接

    private String pj ;
	
    //样品

    private String yp ;
	
    //二次放大

    private String ecfd ;
	
    //样品类型

    private String yplx ;
	
    //CT存储位置

    private String ctwz ;
	
    //缩略图位置

    private String sltwz ;
	
	/*逻辑删除标志*/
	@InsertIgnore
	@LogicDelete(value = 1)

    private Integer delFlag ;
	
    public Sampleinfo()
    {
    }

    public Integer getId(){
	    return  id;
    }
    public void setId(Integer id){
        this.id = id;
    }

    /**样品ID
    *@return 
    */
    public String getSampleid(){
	    return  sampleid;
    }
    /**样品ID
    *@param  sampleid
    */
    public void setSampleid(String sampleid){
        this.sampleid = sampleid;
    }

    /**送样时间
    *@return 
    */
    public String getSysj(){
	    return  sysj;
    }
    /**送样时间
    *@param  sysj
    */
    public void setSysj(String sysj){
        this.sysj = sysj;
    }

    /**扫描时间
    *@return 
    */
    public String getSmsj(){
	    return  smsj;
    }
    /**扫描时间
    *@param  smsj
    */
    public void setSmsj(String smsj){
        this.smsj = smsj;
    }

    /**样品编号
    *@return 
    */
    public String getYpbh(){
	    return  ypbh;
    }
    /**样品编号
    *@param  ypbh
    */
    public void setYpbh(String ypbh){
        this.ypbh = ypbh;
    }

    /**样品属性
    *@return 
    */
    public String getYpsx(){
	    return  ypsx;
    }
    /**样品属性
    *@param  ypsx
    */
    public void setYpsx(String ypsx){
        this.ypsx = ypsx;
    }

    /**样品尺寸
    *@return 
    */
    public String getYpcc(){
	    return  ypcc;
    }
    /**样品尺寸
    *@param  ypcc
    */
    public void setYpcc(String ypcc){
        this.ypcc = ypcc;
    }

    /**样品分辨率
    *@return 
    */
    public String getYpfbl(){
	    return  ypfbl;
    }
    /**样品分辨率
    *@param  ypfbl
    */
    public void setYpfbl(String ypfbl){
        this.ypfbl = ypfbl;
    }

    /**送样人
    *@return 
    */
    public String getSyr(){
	    return  syr;
    }
    /**送样人
    *@param  syr
    */
    public void setSyr(String syr){
        this.syr = syr;
    }

    /**导师
    *@return 
    */
    public String getDs(){
	    return  ds;
    }
    /**导师
    *@param  ds
    */
    public void setDs(String ds){
        this.ds = ds;
    }

    /**学校/单位
    *@return 
    */
    public String getXxdw(){
	    return  xxdw;
    }
    /**学校/单位
    *@param  xxdw
    */
    public void setXxdw(String xxdw){
        this.xxdw = xxdw;
    }

    /**专业
    *@return 
    */
    public String getZy(){
	    return  zy;
    }
    /**专业
    *@param  zy
    */
    public void setZy(String zy){
        this.zy = zy;
    }

    /**取样时间
    *@return 
    */
    public String getQysj(){
	    return  qysj;
    }
    /**取样时间
    *@param  qysj
    */
    public void setQysj(String qysj){
        this.qysj = qysj;
    }

    /**取样人
    *@return 
    */
    public String getQyr(){
	    return  qyr;
    }
    /**取样人
    *@param  qyr
    */
    public void setQyr(String qyr){
        this.qyr = qyr;
    }

    /**取样方式
    *@return 
    */
    public String getQyfs(){
	    return  qyfs;
    }
    /**取样方式
    *@param  qyfs
    */
    public void setQyfs(String qyfs){
        this.qyfs = qyfs;
    }

    /**单位
    *@return 
    */
    public String getDw(){
	    return  dw;
    }
    /**单位
    *@param  dw
    */
    public void setDw(String dw){
        this.dw = dw;
    }

    /**拼接
    *@return 
    */
    public String getPj(){
	    return  pj;
    }
    /**拼接
    *@param  pj
    */
    public void setPj(String pj){
        this.pj = pj;
    }

    /**样品
    *@return 
    */
    public String getYp(){
	    return  yp;
    }
    /**样品
    *@param  yp
    */
    public void setYp(String yp){
        this.yp = yp;
    }

    /**二次放大
    *@return 
    */
    public String getEcfd(){
	    return  ecfd;
    }
    /**二次放大
    *@param  ecfd
    */
    public void setEcfd(String ecfd){
        this.ecfd = ecfd;
    }

    /**样品类型
    *@return 
    */
    public String getYplx(){
	    return  yplx;
    }
    /**样品类型
    *@param  yplx
    */
    public void setYplx(String yplx){
        this.yplx = yplx;
    }

    /**CT存储位置
    *@return 
    */
    public String getCtwz(){
	    return  ctwz;
    }
    /**CT存储位置
    *@param  ctwz
    */
    public void setCtwz(String ctwz){
        this.ctwz = ctwz;
    }

    /**缩略图位置
    *@return 
    */
    public String getSltwz(){
	    return  sltwz;
    }
    /**缩略图位置
    *@param  sltwz
    */
    public void setSltwz(String sltwz){
        this.sltwz = sltwz;
    }

    public Integer getDelFlag(){
	    return  delFlag;
    }
    public void setDelFlag(Integer delFlag){
        this.delFlag = delFlag;
    }


}
