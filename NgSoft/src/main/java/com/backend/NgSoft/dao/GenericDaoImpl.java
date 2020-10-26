
package com.backend.NgSoft.dao;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.hibernate.Criteria;
import org.hibernate.ScrollableResults;
import org.hibernate.criterion.Conjunction;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.persister.entity.AbstractEntityPersister;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class GenericDaoImpl implements GenericDao {

	@Override
	public boolean save(Object object) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean saveAll(List<?> object) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(Object object) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean saveOrUpdate(Object object) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(Object object) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean deleteAll(Object objects) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean deleteAll(Class<?> o, List<Integer> ids) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Object getRecordById(Class<?> o, Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object getRecordByIds(Class<?> o, List<Integer> ids) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object findByParam(Class<?> o, String fieldName, String value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean executeUpdate(String query) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<String> getTables() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object findByParam(Class<?> o, String fieldName, List<String> ids) {
		// TODO Auto-generated method stub
		return null;
	}}
