package com.corp.ypdj.dao;

import java.util.List;

import org.beetl.sql.core.annotatoin.SqlResource;
import org.beetl.sql.core.mapper.BaseMapper;
import org.beetl.sql.core.engine.PageQuery;

import  com.corp.ypdj.entity.*;

/**
 * Sampleinfo Dao
 */
@SqlResource("ypdj.sampleinfo")
public interface SampleinfoDao extends BaseMapper<Sampleinfo>{
    public PageQuery<Sampleinfo> queryByCondition(PageQuery query);
    public void batchDelSampleinfoByIds( List<Long> ids);
}


