package com.corp.ypdj.service;

import java.util.List;

import org.beetl.sql.core.engine.PageQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ibeetl.admin.core.util.PlatformException;

import com.corp.ypdj.dao.SampleinfoDao;
import com.corp.ypdj.entity.Sampleinfo;
import com.ibeetl.admin.core.service.BaseService;

/**
 * Sampleinfo Service
 */

@Service
@Transactional
public class SampleinfoService extends BaseService<Sampleinfo>{

    @Autowired private SampleinfoDao sampleinfoDao;

    public PageQuery<Sampleinfo>queryByCondition(PageQuery query){
        PageQuery ret =  sampleinfoDao.queryByCondition(query);

        queryListAfter(ret.getList());
        return ret;
    }

    public void batchDelSampleinfo(List<Long> ids){
        try {
            sampleinfoDao.batchDelSampleinfoByIds(ids);
        } catch (Exception e) {
            throw new PlatformException("批量删除Sampleinfo失败", e);
        }
    }
}